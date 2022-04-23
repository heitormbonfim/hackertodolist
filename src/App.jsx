import { useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study programming",
      completed: false,
    },
    {
      id: 2,
      title: "Read books",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
