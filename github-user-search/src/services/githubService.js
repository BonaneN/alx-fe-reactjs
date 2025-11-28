import axios from "axios";

const BASE_URL = "https://api.github.com";

// Basic user fetch
export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username required");

  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers,
  });

  return response.data;
};

// Advanced search for Task 2
export const advancedSearch = async (username, location, minRepos) => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  // Build query string
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&per_page=20`;

  const response = await axios.get(url, { headers });

  // GitHub Search API returns { items: [...] }
  return response.data.items;
};
