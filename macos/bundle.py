"""Create the self-contained WebKit document used by the native app."""
from pathlib import Path
import re
import sys

root = Path(__file__).resolve().parents[1]
html = (root / 'index.html').read_text()

def script(match):
    source = (root / match[1]).read_text()
    source = re.sub(r'</script', lambda _: r'<\/script', source, flags=re.I)
    return '<script>' + source + '</script>'

html = re.sub(r'<link (?:rel="stylesheet" href="([^"]+)"|href="([^"]+)" rel="stylesheet")\s*/?>',
              lambda m: '<style>' + (root / (m[1] or m[2])).read_text() + '</style>', html)
html = re.sub(r'<script src="([^"]+)"></script>', script, html)
Path(sys.argv[1]).write_text(html)
