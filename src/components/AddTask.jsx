import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (data) => {
    setInputData(data.target.value);
  };

  const handleAddTaskOnClick = () => {
    handleTaskAddition(inputData);
    setInputData('')
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="add-task-input"
        onChange={handleInputChange}
        value={inputData}
        placeholder="Add a task"
      />

      <div className="default-button-container">
        <Button onClickEvent={handleAddTaskOnClick}>Add Task</Button>
      </div>
    </div>
  );
};

export default AddTask;
