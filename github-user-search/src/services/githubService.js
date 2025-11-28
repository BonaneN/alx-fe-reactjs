import { useState } from "react";
import { fetchUserData, advancedSearch } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [singleUser, setSingleUser] = useState(null);
  const [userList, setUserList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setError("");
    setSingleUser(null);
    setUserList([]);
    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setSingleUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setError("");
    setSingleUser(null);
    setUserList([]);
    setLoading(true);

    try {
      const results = await advancedSearch(username, location, minRepos);
      setUserList(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "550px" }}>
      {/* BASIC SEARCH */}
      <h2 style={{ marginTop: "20px", fontWeight: "bold" }}>Basic Search</h2>
      <form onSubmit={handleBasicSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          style={{ width: "100%", padding: "10px", marginTop: "8px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            background: "#2563eb",
            color: "white",
          }}
        >
          Search User
        </button>
      </form>

      {/* ADVANCED SEARCH */}
      <h2 style={{ marginTop: "30px", fontWeight: "bold" }}>
        Advanced Search
      </h2>

      <form onSubmit={handleAdvancedSearch}>
        <input
          type="text"
          placeholder="Username (optional)"
          style={{ width: "100%", padding: "10px", marginTop: "8px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          style={{ width: "100%", padding: "10px", marginTop: "8px" }}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          style={{ width: "100%", padding: "10px", marginTop: "8px" }}
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            background: "#15803d",
            color: "white",
          }}
        >
          Advanced Search
        </button>
      </form>

      {/* STATUS */}
      {loading && <p style={{ marginTop: "15px" }}>Loading...</p>}
      {error && (
        <p style={{ marginTop: "15px", color: "red", fontWeight: "bold" }}>
          {error}
        </p>
      )}

      {/* BASIC SEARCH RESULT */}
      {singleUser && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ddd",
          }}
        >
          <img
            src={singleUser.avatar_url}
            alt=""
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <h3>{singleUser.name || singleUser.login}</h3>
          <p>{singleUser.location}</p>
          <a href={singleUser.html_url} target="_blank">
            View Profile
          </a>
        </div>
      )}

      {/* ADVANCED SEARCH RESULTS (list) */}
      {userList.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Search Results:</h3>

          {userList.map((user) => (
            <div
              key={user.id}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img
                src={user.avatar_url}
                alt=""
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />

              <div>
                <p style={{ fontWeight: "bold" }}>{user.login}</p>
                <a href={user.html_url} target="_blank">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
