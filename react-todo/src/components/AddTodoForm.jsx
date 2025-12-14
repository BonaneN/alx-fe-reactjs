import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
