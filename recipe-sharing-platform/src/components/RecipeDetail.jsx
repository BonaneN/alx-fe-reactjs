import { useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find(r => r.id === parseInt(id));

  if (!recipe) return <p className="p-6 text-center">Recipe not found!</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg shadow-lg" />

      <h1 className="text-4xl font-bold mt-4">{recipe.title}</h1>

      <section className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </section>

      <section className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Instructions</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Add your recipe instructions here...
        </p>
      </section>
    </div>
  );
}
