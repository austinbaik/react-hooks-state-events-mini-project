import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [taskList, setTasklist] = useState(TASKS)

  function handleDeleteTask(deleteTask){
    setTasklist(taskList.filter((task)=> task.text !== deleteTask))

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={taskList} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
