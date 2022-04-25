// Packages
import React from "react";
// Components
import Task from "./Task";

const Tasks = ({ tasks, handleTaskOnClick, handleTaskRemoval }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskOnClick={handleTaskOnClick}
          handleTaskRemoval={handleTaskRemoval}
        />
      ))}
    </>
  );
};

export default Tasks;
