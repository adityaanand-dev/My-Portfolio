import base64
import re
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components


ROOT = Path(__file__).parent
DIST = ROOT / "dist"


def data_url(path):
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,{encoded}"


def load_portfolio():
    document = (DIST / "index.html").read_text(encoding="utf-8")
    script_path = re.search(r'<script[^>]+src="([^"]+)"', document).group(1).lstrip("/")
    style_path = re.search(r'<link[^>]+href="([^"]+\.css)"', document).group(1).lstrip("/")
    script = (DIST / script_path).read_text(encoding="utf-8")
    styles = (DIST / style_path).read_text(encoding="utf-8")

    script = script.replace(
        "/resumes/AdityaAnand_SDE.docx",
        data_url(DIST / "resumes" / "AdityaAnand_SDE.docx"),
    )
    script = script.replace(
        "/resumes/AdityaAnand_Cloud and DevOps.docx",
        data_url(DIST / "resumes" / "AdityaAnand_Cloud and DevOps.docx"),
    )
    document = re.sub(
        r'<script[^>]+src="[^"]+"[^>]*></script>',
        lambda _: f'<script type="module">{script}</script>',
        document,
    )
    document = re.sub(
        r'<link[^>]+href="[^"]+\.css"[^>]*>',
        lambda _: f"<style>{styles}</style>",
        document,
    )
    return document


st.set_page_config(page_title="Aditya Anand | SDE & Cloud/DevOps Engineer", layout="wide")

# Hide Streamlit chrome (header, footer, padding) so the portfolio fills the full viewport
st.markdown(
    """
    <style>
        /* Hide Streamlit header, footer, and main menu */
        header[data-testid="stHeader"] { display: none !important; }
        footer { display: none !important; }
        #MainMenu { display: none !important; }

        /* Remove all padding/margin around the app so iframe sits flush at top */
        .stApp { margin: 0 !important; padding: 0 !important; }
        .block-container {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
        }
        section[data-testid="stMain"] { padding: 0 !important; }
        div[data-testid="stVerticalBlock"] { gap: 0 !important; }
    </style>
    """,
    unsafe_allow_html=True,
)

# Scroll the parent Streamlit page to the very top on every load
st.markdown(
    "<script>window.scrollTo(0, 0); window.parent.scrollTo(0, 0);</script>",
    unsafe_allow_html=True,
)

# Load the portfolio HTML and inject a scroll-to-top on iframe load as well
portfolio_html = load_portfolio()

# Inject a scroll-to-top snippet just before </body> inside the iframe
scroll_script = (
    "<script>"
    "window.addEventListener('load', function() {"
    "  window.scrollTo(0, 0);"
    "  try { window.parent.scrollTo(0, 0); } catch(e) {}"
    "});"
    "</script>"
)
portfolio_html = portfolio_html.replace("</body>", scroll_script + "</body>")

components.html(portfolio_html, height=12000, scrolling=True)