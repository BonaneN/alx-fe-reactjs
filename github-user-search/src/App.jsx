import Search from "./components/Search";

export default function App() {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}
