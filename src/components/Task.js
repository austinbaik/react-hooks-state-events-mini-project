import React from "react";

function Task( { handleDeleteTask, text, category} ) {

function handleClick(){
  handleDeleteTask(text)

}

  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
