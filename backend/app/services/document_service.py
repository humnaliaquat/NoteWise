import fitz

# extract text from pdf


async def extract_text_from_pdf(file):
    contents = await file.read()

    pdf = fitz.open(
        stream=contents,
        filetype="pdf"
    )

    text = ""
    for page in pdf:
        text += page.get_text()

    pdf.close()
    return text

# extract text from .txt file


async def extract_text_from_txt(file):
    contents = await file.read()

    return contents.decode("utf-8")
