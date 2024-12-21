const API_BASE = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE}/users`);
  return response.json();
};

export const fetchUserById = async (id) => {
  const response = await fetch(`${API_BASE}/users/${id}`);
  return response.json();
};

export const fetchUserAlbums = async (userId) => {
  const response = await fetch(`${API_BASE}/users/${userId}/albums`);
  return response.json();
};

export const fetchAlbums = async () => {
  const response = await fetch(`${API_BASE}/albums`);
  return response.json();
};

export const fetchAlbumById = async (id) => {
  const response = await fetch(`${API_BASE}/albums/${id}`);
  return response.json();
};

export const fetchPhotosByAlbumId = async (albumId) => {
  const response = await fetch(`${API_BASE}/albums/${albumId}/photos`);
  return response.json();
};
