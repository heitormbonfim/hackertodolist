// Packages
import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
// Styles
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
        <button className="task-info-button" onClick={""}>
          <CgInfo />
        </button>

        <button
          className="remove-task-button"
          onClick={() => handleTaskRemoval(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
