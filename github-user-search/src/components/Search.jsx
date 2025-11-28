import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);
    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "450px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #aaa",
            borderRadius: "6px",
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            background: "#2563eb",
            color: "white",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {loading && <p style={{ marginTop: "15px" }}>Loading...</p>}
      {error && (
        <p style={{ marginTop: "15px", color: "red", fontWeight: "bold" }}>
          {error}
        </p>
      )}

      {user && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        >
          <img
            src={user.avatar_url}
            alt="avatar"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />
          <h3 style={{ marginBottom: "5px" }}>{user.name || user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            style={{ color: "#2563eb" }}
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
