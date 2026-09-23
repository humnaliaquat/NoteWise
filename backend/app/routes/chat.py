from fastapi import APIRouter
from pydantic import BaseModel

from app.services.chat_service import answer_question

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


class ChatRequest(BaseModel):
    question: str
    document_id: str


@router.post("/")
def chat(data: ChatRequest):

    result = answer_question(
        data.question,
        data.document_id
    )

    return result
