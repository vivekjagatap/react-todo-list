import React, { useState } from "react";

const Header = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <header className="text-center text-2xl font-bold mb-4">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Add a new task..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </form>
    </header>
  );
};

export default Header;