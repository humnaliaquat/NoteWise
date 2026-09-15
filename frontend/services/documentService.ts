import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL

interface APIDocument {
  _id: string;
  filename: string;
  file_type: string;
  file_size: number;
  file_size_mb: number;
  pages: number | null;
  text_length: number;
  status: string;
  created_at: string;
}

// upload a document
export async function uploadDocument(file:File){
  const formData = new FormData()
  formData.append("file",file)

  const response = await axios.post(`${API_URL}/documents/upload`,formData);
  return response.data;
}

// fetch all documents
export async function getDocuments() {
  const response = await axios.get(`${API_URL}/documents/`);

  console.log("Documents from API:", response.data);

  return response.data;
}

// delete a document
export async function deleteDocument(document_id: string) {
  const response = await axios.delete(
    `${API_URL}/documents/${document_id}`
  );

  return response.data;
}