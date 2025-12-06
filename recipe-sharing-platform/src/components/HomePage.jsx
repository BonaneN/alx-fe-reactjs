import { useEffect, useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data); 
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-200"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
