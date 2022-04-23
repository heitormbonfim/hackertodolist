import React from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = () => {
  return (
    <div className="add-task-container">
      <input type="text" className="add-task-input" placeholder="Add a task" />
      <div className="default-button-container">
        <Button>Add Task</Button>
      </div>
    </div>
  );
};

export default AddTask;
