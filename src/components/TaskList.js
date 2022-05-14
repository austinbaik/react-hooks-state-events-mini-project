import React from "react";
import Task from "./Task"

function TaskList({ handleDeleteTask, tasks }) {

  const taskList = tasks.map(task =>
    <Task
      key={task.text} //key identifies each li - it is needed everywhere that a map through 
      text={task.text}
      category={task.category}
      handleDeleteTask={handleDeleteTask}
    />)

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
