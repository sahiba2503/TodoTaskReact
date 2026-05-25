// import React from 'react'

function maincomponent(props) {
  return (
  <div className="taskContainer">
      <input
        type="text"
        placeholder="Enter task"
        value={props.taskName}
        onChange={(e) => props.setTaskName(e.target.value)}
      />
      <input 
      type="date"
      placeholder="Enter due date"
      value= {props.dueDate}
      onChange = {(e) => props.setDueDate(e.target.value)} />

      <input 
      type="text"
      placeholder="Enter description"
      value={props.discription}
      onChange={(e) => props.setDiscription(e.target.value)} />
      <button onClick={props.addTask}>Add</button>
      </div>
  )
}

export default maincomponent
