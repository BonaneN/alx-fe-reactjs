import { useState } from "react";

export default function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: ""
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!formData.steps.trim()) newErrors.steps = "Preparation steps are required.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // <-- using e.target.value
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Recipe submitted successfully!");
      setFormData({ title: "", ingredients: "", steps: "" });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Add New Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            className="w-full p-3 border rounded-md"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        <div>
          <textarea
            name="ingredients"
            placeholder="Ingredients (one per line)"
            className="w-full p-3 border rounded-md"
            rows="4"
            value={formData.ingredients}
            onChange={handleChange} // <-- using e.target.value
          />
          {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <textarea
            name="steps"  // <-- renamed from "instructions"
            placeholder="Preparation Steps"
            className="w-full p-3 border rounded-md"
            rows="6"
            value={formData.steps}
            onChange={handleChange} // <-- using e.target.value
          />
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
