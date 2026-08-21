import unittest

from download_retry import (
    apply_download_attempt,
    build_media_download_attempts,
    is_recoverable_download_error,
    retry_download_attempts,
    retry_recoverable_download,
)


class DownloadRetryTests(unittest.TestCase):
    def test_video_attempts_cover_clients_and_compatibility_format(self):
        attempts = build_media_download_attempts(
            "video",
            "bestvideo+bestaudio/best",
            "best[vcodec!=none][acodec!=none]/best",
        )

        self.assertEqual(
            [attempt.key for attempt in attempts],
            ["default", "refresh", "mweb", "android_vr", "compatible"],
        )
        self.assertEqual(attempts[2].player_client, "mweb")
        self.assertTrue(attempts[3].anonymous)
        self.assertEqual(
            attempts[4].format_selector,
            "best[vcodec!=none][acodec!=none]/best",
        )

    def test_attempt_overrides_client_without_losing_other_extractor_args(self):
        base = {
            "cookiefile": "/state/cookies.txt",
            "extractor_args": {
                "youtube": {"player_skip": ["configs"]},
                "generic": {"impersonate": ["chrome"]},
            },
        }
        attempt = build_media_download_attempts("video", "auto", "compatible")[2]

        result = apply_download_attempt(base, attempt)

        self.assertEqual(result["extractor_args"]["youtube"]["player_client"], ["mweb"])
        self.assertEqual(result["extractor_args"]["youtube"]["player_skip"], ["configs"])
        self.assertEqual(result["extractor_args"]["generic"]["impersonate"], ["chrome"])
        self.assertEqual(result["cookiefile"], "/state/cookies.txt")

    def test_anonymous_attempt_removes_login_material(self):
        base = {
            "cookiefile": "/state/cookies.txt",
            "cookiesfrombrowser": ("edge",),
            "http_headers": {"Authorization": "Bearer secret", "User-Agent": "test"},
        }
        attempt = build_media_download_attempts("video", "auto", "compatible")[3]

        result = apply_download_attempt(base, attempt)

        self.assertNotIn("cookiefile", result)
        self.assertNotIn("cookiesfrombrowser", result)
        self.assertNotIn("Authorization", result["http_headers"])
        self.assertEqual(result["http_headers"]["User-Agent"], "test")

    def test_403_walks_fallback_chain_until_success(self):
        attempts = build_media_download_attempts("video", "auto", "compatible")
        called = []

        def operation(attempt, _number):
            called.append(attempt.key)
            if attempt.key != "android_vr":
                raise RuntimeError("HTTP Error 403: Forbidden")
            return "ok"

        result = retry_download_attempts(
            operation,
            attempts,
            sleep=lambda _: None,
        )

        self.assertEqual(result, "ok")
        self.assertEqual(called, ["default", "refresh", "mweb", "android_vr"])

    def test_nonrecoverable_error_does_not_change_client_or_format(self):
        attempts = build_media_download_attempts("video", "auto", "compatible")
        called = []

        def operation(attempt, _number):
            called.append(attempt.key)
            raise RuntimeError("Postprocessing: Conversion failed")

        with self.assertRaisesRegex(RuntimeError, "Conversion failed"):
            retry_download_attempts(operation, attempts, sleep=lambda _: None)

        self.assertEqual(called, ["default"])

    def test_timeout_reextracts_and_then_succeeds(self):
        attempts = []
        delays = []

        def operation():
            attempts.append(len(attempts) + 1)
            if len(attempts) < 3:
                raise RuntimeError("Connection timed out")
            return "ok"

        result = retry_recoverable_download(
            operation,
            delays=(1, 2),
            sleep=delays.append,
        )

        self.assertEqual(result, "ok")
        self.assertEqual(attempts, [1, 2, 3])
        self.assertEqual(delays, [1.0, 2.0])

    def test_non_network_error_is_not_retried(self):
        attempts = []

        def operation():
            attempts.append(1)
            raise RuntimeError("Postprocessing: Conversion failed")

        with self.assertRaisesRegex(RuntimeError, "Conversion failed"):
            retry_recoverable_download(operation, sleep=lambda _: None)

        self.assertEqual(len(attempts), 1)

    def test_temporary_http_errors_are_recoverable(self):
        self.assertTrue(is_recoverable_download_error(RuntimeError("HTTP Error 503")))
        self.assertTrue(is_recoverable_download_error(RuntimeError("HTTP Error 403")))
        self.assertFalse(is_recoverable_download_error(RuntimeError("No video formats found")))

    def test_last_network_error_is_reported(self):
        attempts = []

        def operation():
            attempts.append(1)
            raise RuntimeError("Connection reset by peer")

        with self.assertRaisesRegex(RuntimeError, "Connection reset"):
            retry_recoverable_download(
                operation,
                max_attempts=2,
                delays=(),
                sleep=lambda _: None,
            )

        self.assertEqual(len(attempts), 2)


if __name__ == "__main__":
    unittest.main()
