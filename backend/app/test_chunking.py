from app.services.chunking_service import create_chunks


text = """
Operating systems manage computer resources.
Memory management is responsible for allocating memory.
CPU scheduling determines which process runs.
"""


chunks = create_chunks(text)

print("Number of chunks:", len(chunks))

for i, chunk in enumerate(chunks):
    print(f"\n--- Chunk {i} ---")
    print(chunk)
