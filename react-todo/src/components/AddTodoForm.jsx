import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add todo"
        data-testid="todo-input"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
