import pymupdf

# extract text from pdf
import re


def clean_pdf_text(text: str) -> str:
    # -----------------------------------
    # 1. Normalize line breaks
    # -----------------------------------
    text = text.replace("\r\n", "\n")
    text = text.replace("\r", "\n")

    # -----------------------------------
    # 2. Fix spaces around brackets
    # Example:
    # A [ 2 ] -> A[2]
    # B [ C [ A [ 1 ] ] ] -> B[C[A[1]]]
    # -----------------------------------
    text = re.sub(r'\s*\[\s*', '[', text)
    text = re.sub(r'\s*\]\s*', ']', text)

    # -----------------------------------
    # 3. Fix spaces around parentheses
    # -----------------------------------
    text = re.sub(r'\s*\(\s*', '(', text)
    text = re.sub(r'\s*\)\s*', ')', text)

    # -----------------------------------
    # 4. Remove weird control characters
    # -----------------------------------
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]', ' ', text)

    # -----------------------------------
    # 5. Fix excessive spaces
    # -----------------------------------
    text = re.sub(r'[ \t]+', ' ', text)

    # -----------------------------------
    # 6. Fix excessive blank lines
    # -----------------------------------
    text = re.sub(r'\n{3,}', '\n\n', text)

    # -----------------------------------
    # 7. Remove spaces at beginning/end
    # of every line
    # -----------------------------------
    lines = []

    for line in text.split("\n"):
        line = line.strip()

        if line:
            lines.append(line)

    text = "\n".join(lines)

    # -----------------------------------
    # 8. Fix common PDF extraction issues
    # where punctuation gets separated
    # -----------------------------------
    text = re.sub(r'\s+([,.;:!?])', r'\1', text)

    # -----------------------------------
    # 9. Normalize quotes/dashes
    # -----------------------------------
    text = text.replace("“", '"')
    text = text.replace("”", '"')
    text = text.replace("‘", "'")
    text = text.replace("’", "'")
    text = text.replace("–", "-")
    text = text.replace("—", "-")

    return text.strip()


async def extract_text_from_pdf(file):
    contents = await file.read()

    pdf = pymupdf.open(
        stream=contents,
        filetype="pdf"
    )

    pages = []

    for page_number, page in enumerate(pdf):
        raw_text = page.get_text("text")

        cleaned_text = clean_pdf_text(raw_text)

        if cleaned_text:
            pages.append(
                f"Page {page_number + 1}\n{cleaned_text}"
            )

    pdf.close()

    return "\n\n".join(pages)

# extract text from .txt file


async def extract_text_from_txt(file):
    contents = await file.read()

    return contents.decode("utf-8")
