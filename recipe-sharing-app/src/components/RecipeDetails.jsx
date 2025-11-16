import { useParams } from "react-router-dom";
import { useRecipeStore } from './recipeStore.js';
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();

  // Convert the id from string → number
  const recipeId = Number(id);

  // Find recipe by id
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  // Handle missing recipe
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{recipe.title}</h1>
      <p><strong>ID:</strong> {recipe.id}</p>        {/* <-- recipe.id displayed */}
      <p>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <h3>Delete Recipe</h3>
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
