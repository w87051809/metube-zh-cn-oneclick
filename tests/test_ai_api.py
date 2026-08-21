import unittest

from ai_api import build_chat_endpoints, classify_provider_error, public_ai_config


class AiApiTests(unittest.TestCase):
    def test_base_without_v1_gets_openai_compatible_endpoint(self):
        self.assertEqual(
            build_chat_endpoints("https://example.test"),
            [
                "https://example.test/v1/chat/completions",
                "https://example.test/chat/completions",
            ],
        )

    def test_base_with_v1_is_not_duplicated(self):
        self.assertEqual(
            build_chat_endpoints("https://example.test/v1/"),
            ["https://example.test/v1/chat/completions"],
        )

    def test_401_is_reported_as_invalid_key(self):
        self.assertEqual(classify_provider_error(401, "Invalid API key"), "invalid_key")

    def test_public_config_never_exposes_secret(self):
        config = public_ai_config(
            base_url="https://example.test/v1",
            api_key="super-secret",
            model="gpt-test",
        )

        self.assertEqual(config["provider"], "example.test")
        self.assertEqual(config["model"], "gpt-test")
        self.assertTrue(config["configured"])
        self.assertNotIn("api_key", config)
        self.assertNotIn("super-secret", str(config))


if __name__ == "__main__":
    unittest.main()
