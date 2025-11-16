import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // ============================
  // 🔹 BASE STATE
  // ============================
  recipes: [],

  // ============================
  // 🔹 CRUD ACTIONS
  // ============================
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // ============================
  // 🔹 SEARCH + FILTERING
  // ============================
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set(() => ({
      searchTerm: term,
    })),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ============================
  // 🔹 FAVORITES
  // ============================
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ============================
  // 🔹 RECOMMENDATIONS
  // ============================
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      // Mock recommendation logic:
      // Recommend recipes that are favorited + random selection
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );

      return { recommendations: recommended };
    }),
}));

