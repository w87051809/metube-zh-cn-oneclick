import unittest

from dl_formats import get_compatibility_format, get_format


class VideoFormatSelectionTests(unittest.TestCase):
    def test_automatic_video_prefers_non_av1_with_av1_fallback(self):
        selector = get_format("video", "auto", "any", "best")

        self.assertEqual(
            selector,
            "bestvideo[vcodec!~='^av0?1']+bestaudio/"
            "best[vcodec!=none][acodec!=none][vcodec!~='^av0?1']/"
            "bestvideo+bestaudio/best",
        )

    def test_automatic_video_keeps_quality_limit_on_every_fallback(self):
        selector = get_format("video", "auto", "any", "1080")

        self.assertEqual(
            selector,
            "bestvideo[vcodec!~='^av0?1'][height<=1080]+bestaudio/"
            "best[vcodec!=none][acodec!=none][vcodec!~='^av0?1'][height<=1080]/"
            "bestvideo[height<=1080]+bestaudio/best[height<=1080]",
        )

    def test_explicit_av1_choice_is_unchanged(self):
        selector = get_format("video", "av1", "any", "best")

        self.assertTrue(selector.startswith("bestvideo[vcodec~='^av0?1']+bestaudio"))

    def test_compatibility_format_prefers_combined_media(self):
        self.assertEqual(
            get_compatibility_format("any", "best"),
            "best[vcodec!=none][acodec!=none]/best",
        )

    def test_compatibility_format_keeps_quality_limit(self):
        self.assertEqual(
            get_compatibility_format("any", "1080"),
            "best[vcodec!=none][acodec!=none][height<=1080]/best[height<=1080]/best",
        )

    def test_mp4_compatibility_format_prefers_combined_mp4(self):
        self.assertEqual(
            get_compatibility_format("mp4", "best"),
            "best[vcodec!=none][acodec!=none][ext=mp4]/best[vcodec!=none][acodec!=none]/best",
        )


if __name__ == "__main__":
    unittest.main()
