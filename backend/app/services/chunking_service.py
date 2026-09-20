def create_chunks(pages, chunk_size=600, overlap=80):

    chunks = []

    for page in pages:

        words = page["text"].split()

        start = 0

        while start < len(words):

            end = start + chunk_size

            chunk_text = " ".join(words[start:end])

            chunks.append({
                "text": chunk_text,
                "page": page["page"]
            })

            start += chunk_size - overlap

    return chunks
