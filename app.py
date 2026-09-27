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
components.html(load_portfolio(), height=12000, scrolling=True)