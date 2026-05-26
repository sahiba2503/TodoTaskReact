// import React from 'react'
import { Routes,Route} from "react-router-dom"
import Manage from "./Manage"
import View from "./View"
// import PendingTasks from "./PendingTasks"
// import DoneTasks from "./DoneTasks"
// import OverDueTasks from "./OverDueTasks"
// import BacklogTasks from "./BacklogTasks"


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
     <Route path="/View/Active/*" element={<View  tasks={tasks}   />}></Route>
     {/* <Route path="/Pending" element={<PendingTasks  tasks={tasks}   />}></Route>
     <Route path="/Done" element={<DoneTasks  tasks={tasks}   />}></Route>
     <Route path="/OverDue" element={<OverDueTasks  tasks={tasks}   />}></Route>
     <Route path="/Backlog" element={<BacklogTasks  tasks={tasks}   />}></Route> */}
     
  </Routes>
  </div>
  )
}



export default Maincomponent
