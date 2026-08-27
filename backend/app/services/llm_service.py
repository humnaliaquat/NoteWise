import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY")
)


def generate_answer(question, context):

    prompt = f"""
You are a helpful assistant that answers questions using the user's documents.

Use the provided context to answer the question.

Rules:
- Answer the user's question directly.
- Use the context when it contains relevant information.
- Do not copy irrelevant text from the context.
- If the context does not contain enough information, say that you couldn't find the answer in the uploaded documents.
- Do not mention safety classifications.
- Do not return JSON unless explicitly requested.

Question:
{question}

Context:
{context}

Answer:
"""

    response = client.chat.completions.create(
        model="openrouter/free",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content
