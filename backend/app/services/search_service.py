from app.services.embeddings import create_embedding
from app.services.pinecone_service import search_vectors


def search_documents(query: str, top_k: int = 5):

    query_vector = create_embedding(query)

    results = search_vectors(
        query_vector,
        top_k
    )

    return results
