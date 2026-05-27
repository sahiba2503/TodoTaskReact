// import React from 'react'
import { Routes,Route} from "react-router-dom"
import Manage from "./Manage"
import View from "./View"
  function Maincomponent({
  taskName,
  dueDate,
  discription,
  setTaskName,
  setDueDate,
  setDiscription,
  addTask,
  tasks
}) 
{
  return (
    <div className="mainComponent">
    <Routes>
    <Route path="/Manage" element={<Manage
     taskName={taskName}
 dueDate={dueDate}
 discription={discription}
 setTaskName={setTaskName}
 setDueDate={setDueDate}
 setDiscription={setDiscription}
 addTask={addTask}
    />}></Route>
     <Route path="/View" element={<View  tasks={tasks}   />}></Route>
    
     
  </Routes>
  </div>
  )
}



export default Maincomponent
