import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="p-6 text-center">Recipe not found!</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />

      <h1 className="text-4xl font-bold mt-4">{recipe.title}</h1>

      <section className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          {/* Render ingredients from recipe data if available */}
          {recipe.ingredients && recipe.ingredients.length > 0
            ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
            : <li>No ingredients listed.</li>}
        </ul>
      </section>

      <section className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Instructions</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          {recipe.instructions || "No instructions provided."}
        </p>
      </section>
    </div>
  );
}
