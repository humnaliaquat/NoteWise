from app.services.embeddings import create_embedding
from app.services.pinecone_service import search_vectors
from app.services.llm_service import generate_answer


def answer_question(question: str):

    query_embedding = create_embedding(question)

    results = search_vectors(
        query_embedding,
        top_k=5,
        min_score=0.40
    )

    context_parts = []

    for result in results:
        metadata = result.get("metadata", {})
        text = metadata.get("text")

        if text:
            context_parts.append(text)

    context = "\n\n".join(context_parts)

    answer = generate_answer(question, context)

    sources = []

    for result in results:
        metadata = result.get("metadata", {})

        sources.append({
            "document_id": metadata.get("document_id"),
            "page": metadata.get("page"),
            "chunk_index": metadata.get("chunk_index"),
            "score": round(result.get("score", 0), 3)
        })

    return {
        "question": question,
        "answer": answer,
        "sources": sources
    }
