// import React from 'react'
import { Routes,Route } from "react-router-dom"
import Manage from "./Manage"
import View from "./View"
// import { useLocation,useNavigate } from "react-router-dom";
// import { useEffect } from "react";

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
// const location = useLocation();
//   const Navigate = useNavigate(); 
  //  useEffect(() => {
  //   if (location.pathname === "/") {
  //     Navigate("/Manage");
  //   }
  // }, [location.pathname]);
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
