import React, { useState } from "react";

const ToDoItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex justify-between items-center p-2 border-b ${
        task.completed ? "line-through text-gray-500" : ""
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border p-1"
        />
      ) : (
        <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
          {task.text}
        </span>
      )}
      <div>
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 ml-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white px-2 py-1 ml-2"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 ml-2"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;