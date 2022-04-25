import React from "react";
import "./Task.css";

const Task = ({ task, handleTaskOnClick, handleTaskRemoval }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid lime" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskOnClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskRemoval(task.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Task;
