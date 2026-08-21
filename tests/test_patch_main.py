import unittest

from patch_main import patch_main_source


class PatchMainTests(unittest.TestCase):
    def test_registers_ai_routes_before_static_catch_all(self):
        source = """from yt_dlp.version import __version__ as yt_dlp_version

routes = web.RouteTableDef()

routes.static(config.URL_PREFIX + 'download/', config.DOWNLOAD_DIR)
app.add_routes(routes)
"""

        patched = patch_main_source(source)

        self.assertIn("from ai_api import register_ai_routes", patched)
        self.assertLess(
            patched.index("register_ai_routes(routes, config.URL_PREFIX)"),
            patched.index("routes.static(config.URL_PREFIX + 'download/'"),
        )

    def test_patch_is_idempotent(self):
        source = """from yt_dlp.version import __version__ as yt_dlp_version
routes = web.RouteTableDef()
routes.static(config.URL_PREFIX + 'download/', config.DOWNLOAD_DIR)
"""
        once = patch_main_source(source)
        twice = patch_main_source(once)
        self.assertEqual(once, twice)


if __name__ == "__main__":
    unittest.main()
