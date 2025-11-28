import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username required");

  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  const headers = token
    ? { Authorization: `token ${token}` }
    : {};

  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers,
  });

  return response.data;
};
