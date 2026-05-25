// import React from 'react'

function Manage({
  taskName,
  dueDate,
  discription,
  setTaskName,
  setDueDate,
  setDiscription,
  addTask
})  {
  return (
   <div className="taskContainer">
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input 
      type="date"
      placeholder="Enter due date"
      value= {dueDate}
      onChange = {(e) => setDueDate(e.target.value)} />

      <input 
      type="text"
      placeholder="Enter description"
      value={discription}
      onChange={(e) => setDiscription(e.target.value)} />
      <button onClick={addTask}>Add</button>
      </div>
  )
}

export default Manage
