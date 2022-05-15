import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [taskList, setTasklist] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function addTask(formData){
    console.log('formData', formData)
    debugger
    setTasklist([...taskList, formData])
  }

  function handleDeleteTask(deleteTask){
    setTasklist(taskList.filter((task)=> task.text !== deleteTask))

  }


  function handleFilter() {
    return taskList.filter((task) => category === "All" || task.category === category) //rview this further
    //the boolean argument is asking is it true or fale, and everything else falls under that umbrella.  
  }

  function onTaskFormSubmit(){


  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={setCategory} selectedCategory = {category}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={handleFilter()} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
