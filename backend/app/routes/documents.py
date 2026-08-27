from fastapi import APIRouter, UploadFile, File, HTTPException
from bson import ObjectId
from app.services.chunking_service import create_chunks
from app.services.embeddings import create_embedding
from app.services.pinecone_service import (
    store_chunks, delete_document_vectors)
from datetime import datetime, timezone
from app.services.document_service import (
    extract_text_from_pdf,
    extract_text_from_txt
)
from app.database.database import documents_collection
router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)

# create docs


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
        file_type = "pdf"

    elif filename.endswith(".txt"):
        text = await extract_text_from_txt(file)
        file_type = "txt"

    else:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and TXT files are supported"
        )
    chunks = create_chunks(text)
    embeddings = [
        create_embedding(chunk)
        for chunk in chunks
    ]
    print("Number of chunks:", len(chunks))
    print("Number of embeddings:", len(embeddings))

    if embeddings:
        print("First embedding dimensions:", len(embeddings[0]))
        print("Second embedding dimensions:", len(embeddings[1]))
    document = {
        "filename": file.filename,
        "file_type": file_type,
        "text_length": len(text),
        "status": "uploaded",

        "created_at": datetime.now(timezone.utc)
    }
    result = documents_collection.insert_one(document)
    document_id = str(result.inserted_id)
    store_chunks(chunks, embeddings, document_id)

    return {
        "message": "Document uploaded successfully",
        "document_id": str(result.inserted_id),
        "filename": file.filename,
        "file_type": file_type,
        "number_of_chunks": len(chunks),
        "first_chunk": chunks[0] if chunks else None,
        "text_length": len(text),
        "status": "uploaded"
    }

# get all docs


@router.get("/")
def get_docs():
    documents = list(
        documents_collection.find()
    )
    for document in documents:
        document["_id"] = str(document["_id"])

    return documents

# get one doc


@router.get("/{document_id}")
def get_oneDoc(document_id: str):
    if not ObjectId.is_valid(document_id):
        raise HTTPException(
            status_code=400,
            detail="Invalid document id"
        )
    document = documents_collection.find_one({
        "_id": ObjectId(document_id)
    })
    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )
    document["_id"] = str(document["_id"])
    return document
# delete a doc


@router.delete("/{document_id}")
def delete_doc(document_id: str):
    if not ObjectId.is_valid(document_id):
        raise HTTPException(
            status_code=400,
            detail="Invalid document id"
        )
    document = documents_collection.find_one({
        "_id": ObjectId(document_id)
    })
    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )
    # delete from pinecone
    delete_document_vectors(document_id)
    # delete from mongodb
    documents_collection.delete_one({
        "_id": ObjectId(document_id)
    })

    return {
        "message": "Document deleted successfully",
        "document_id": document_id
    }
