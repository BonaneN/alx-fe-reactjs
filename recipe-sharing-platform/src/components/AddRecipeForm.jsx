import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    alert("Recipe submitted successfully!");
    setError("");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Add New Recipe</h1>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-3 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Ingredients (one per line)"
          className="w-full p-3 border rounded-md"
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <textarea
          placeholder="Preparation Steps"
          className="w-full p-3 border rounded-md"
          rows="6"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
