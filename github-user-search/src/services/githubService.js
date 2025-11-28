import axios from "axios";

export async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });

  return response.data;
}

export async function advancedSearch(queryObj) {
  const { username, location, minRepos } = queryObj;

  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });

  return response.data.items;
}
