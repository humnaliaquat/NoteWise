const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function uploadDocument(file:File){
  const formData = new FormData()
  formData.append("file",file)

  const responce = await fetch(
    `${API_URL}/documents/upload`,
    {
      method: "Post",
      body: formData
    }
  );
  if(!responce){
    throw new Error("Failed to upload the file")
  }
  return responce.json()
}