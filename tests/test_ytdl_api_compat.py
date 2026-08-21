import ast
import unittest
from pathlib import Path


class YtdlApiCompatibilityTests(unittest.TestCase):
    def test_download_queue_add_accepts_latest_main_keywords(self):
        source = Path(__file__).resolve().parents[1].joinpath("ytdl.py").read_text(encoding="utf-8")
        tree = ast.parse(source)
        add_method = next(
            node
            for node in ast.walk(tree)
            if isinstance(node, ast.AsyncFunctionDef) and node.name == "add"
        )
        names = [arg.arg for arg in add_method.args.args]
        self.assertIn("retry_entry", names)
        self.assertIn("sponsorblock", names)


if __name__ == "__main__":
    unittest.main()
