from fastapi import APIRouter
router = APIRouter()


@router.get("/")
def get_notes():
    return {
        "notes": [
            {
                "id": 1,
                "title": "FastAPI Notes"
            },
            {
                "id": 2,
                "title": "RAG Notes"
            }
        ]
    }


@router.get("/{note_id}")
def get_note(note_id: int):
    return {
        "id": note_id,
        "title": "FastApi notes"
    }
