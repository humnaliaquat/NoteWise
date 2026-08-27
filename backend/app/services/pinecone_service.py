import os
from dotenv import load_dotenv
from pinecone import Pinecone
load_dotenv()

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_INDEX_NAME = os.getenv("PINECONE_INDEX_NAME")

pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index(PINECONE_INDEX_NAME)


def store_chunks(
    chunks: list,
    embeddings: list,
    document_id: str
):
    vectors = []
    for i, (chunk, embedding) in enumerate(
        zip(chunks, embeddings)
    ):
        vectors.append({
            "id": f"{document_id}-chunk-{i}",
            "values": embeddings[i],
            "metadata": {
                "document_id": document_id,
                "chunk_index": i,
                "text": chunk
            }
        })

    batch_size = 100
    for start in range(0, len(vectors), batch_size):
        batch = vectors[start:start+batch_size]
        index.upsert(
            vectors=batch
        )
    print("All vectors uploaded successfully!")


def search_vectors(
    query_vectors: list,
    top_k: int = 5,
    min_score: float = 0.40
):
    results = index.query(
        vector=query_vectors,
        top_k=top_k,
        include_metadata=True
    )

    matches = []

    for match in results.matches:

        if match.score >= min_score:
            matches.append({
                "id": match.id,
                "score": match.score,
                "metadata": match.metadata
            })

    return matches


def delete_document_vectors(document_id: str):
    index.delete(
        filter={
            "document_id": document_id
        }
    )
