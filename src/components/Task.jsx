// Packages
import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
// Styles
import "./Task.css";

const Task = ({ task, handleTaskOnClick, handleTaskRemoval }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "solid 6px lime" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskOnClick(task.id)}>
        {task.title}
      </div>

      <button
        className="remove-task-button"
        onClick={() => handleTaskRemoval(task.id)}
      >
        <CgClose />
      </button>
    </div>
  );
};

export default Task;
