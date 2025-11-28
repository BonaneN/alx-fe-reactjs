import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={username}
          placeholder="Search GitHub username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} width="100" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      )}

        <input type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />

        <input 
        type="number"
        placeholder="Minimum Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        />

    </div>
  );

const handleAdvancedSearch = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setResults([]);

  try {
    const users = await advancedSearch({
      username,
      location,
      minRepos,
    });
    setResults(users);
  } catch (err) {
    setError("Could not fetch advanced search results");
  } finally {
    setLoading(false);
  }
};

{results.map((u) => (
  <div key={u.id} className="border p-4 my-2">
    <img src={u.avatar_url} width="80" />
    <p>{u.login}</p>
    <a href={u.html_url} target="_blank">View Profile</a>
  </div>
))}

}
