import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function askQuestion(
  question: string,
  documentId: string
) {
  const response = await axios.post(
    `${API_URL}/chat/`,
    {
      question,
      document_id: documentId,
    }
  );

  return response.data;
}