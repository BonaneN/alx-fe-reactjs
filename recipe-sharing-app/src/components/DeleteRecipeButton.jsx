import { useNavigate } from "react-router-dom";
import useRecipeStore from "../recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();   // <-- REQUIRED

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");                  // Redirect after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
