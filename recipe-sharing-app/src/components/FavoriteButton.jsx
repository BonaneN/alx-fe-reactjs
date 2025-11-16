import { useRecipeStore } from './recipeStore.js';


const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorite) removeFavorite(recipeId);
    else addFavorite(recipeId);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
    </button>
  );
};

export default FavoriteButton;