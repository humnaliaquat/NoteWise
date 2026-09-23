from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)


def create_embedding(text: str):
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text,
        dimensions=384
    )

    return response.data[0].embedding
