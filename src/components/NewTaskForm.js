import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {

  const [formData, setformData] = useState({
    text: "",
    category: "Code",
  })
  console.log(formData)

  const catListForm = categories.map(cat => cat === "All" ? null : <option key={cat} >{cat}</option>)

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value

    setformData({
      ...formData,
      [name]: value
    }
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit(formData)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" value={formData.value} onChange={handleChange} >
          {catListForm}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
