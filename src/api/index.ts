export const fetchList = async () => {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/services`);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}

export const fetchDetails = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/services/${id}`);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}