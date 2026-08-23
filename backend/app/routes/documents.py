from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.document_service import (
    extract_text_from_pdf,
    extract_text_from_txt
)

router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)


@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):

    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="No file provided"
        )

    filename = file.filename.lower()

    if filename.endswith(".pdf"):
        text = await extract_text_from_pdf(file)

    elif filename.endswith(".txt"):
        text = await extract_text_from_txt(file)

    else:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and TXT files are supported"
        )

    return {
        "filename": file.filename,
        "file_type": file.content_type,
        "text_length": len(text),
        "text_preview": text[:500]
    }
