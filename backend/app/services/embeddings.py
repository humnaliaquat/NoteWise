from sentence_transformers import SentenceTransformer
import numpy as np
model = SentenceTransformer("all-MiniLM-L6-V2")


def create_embedding(text: str):
    embedding = model.encode(text)
    return embedding.tolist()


texts = [
    "An operating system manages computer resources.",
    "The OS controls memory and CPU resources.",
    "I love eating chocolate cake."
]
embeddings = [
    create_embedding(text)
    for text in texts
]


def cosine_similarity(vector_a, vector_b):
    a = np.array(vector_a)
    b = np.array(vector_b)
    return np.dot(a, b)/(
        np.linalg.norm(a) *
        np.linalg.norm(b)
    )


score = cosine_similarity(
    embeddings[0], embeddings[1]
)
print(score)
