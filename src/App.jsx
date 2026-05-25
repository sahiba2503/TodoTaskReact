import { useState } from "react";
import Navbar from "./assets/Navbar";
import Maincomponent from "./assets/Maincomponent";


function App() {
  const [tasks, setTasks] = useState([]);

   const [taskName, setTaskName] = useState("");  
  const [dueDate,setDueDate] = useState("");
  const [discription, setDiscription] = useState("");
  

  const addTask = () => {
   if(taskName === "" || dueDate === "" || discription === "" || taskName === " " || dueDate === " " || discription === " "){
    alert("please fill all input section");
    return;
   }
   else{
    const DetailTask = {
name:taskName,
dueDate:dueDate,
discription:discription , 
createDate: new Date()};
    setTasks([...tasks, DetailTask]);
    setTaskName("");
    setDueDate("");
    setDiscription("");
  };
 }
  

  return (
    <div className="todoTaskContainer">
      {/* <nav className="navbar">
        <button>Create Task</button>
        <button>View Task</button>
      </nav> */}
      <Navbar />
      {/* <div className="taskContainer">
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
      </div> */}
      {/* <maincomponent  taskData={taskName,dueDate,discription,setTaskName,setDueDate,setDiscription,addTask} /> */}
      <Maincomponent
 taskName={taskName}
 dueDate={dueDate}
 discription={discription}
 setTaskName={setTaskName}
 setDueDate={setDueDate}
 setDiscription={setDiscription}
 addTask={addTask}
/>
     <div>
        {tasks.map((task,index) => (   
          <div key={index}>
             <p> <strong>Task Name :</strong> {task.name}</p>
          <p><strong>  DueDate :</strong> {task.dueDate}</p>
           <p><strong>CreateDate : </strong> {task.createDate.toLocaleDateString()}</p>
            <p><strong>Discription : </strong>{task.discription}</p>
            <span> ←  x  → ⇧ </span>
          </div>     
                            
          
        ))}
    </div>
    </div>
  );
}
export default App;

