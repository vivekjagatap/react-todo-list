import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, deleteTask, toggleTask, editTask }) => {
  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
