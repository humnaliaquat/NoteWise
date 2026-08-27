from fastapi import APIRouter
from app.services.chat_service import answer_question

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.get("/")
def chat(question: str):
    result = answer_question(question)
    return result
