export async function fetchPosts() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data;
}