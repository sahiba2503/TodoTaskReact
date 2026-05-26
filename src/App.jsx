import { useState , useEffect} from "react";
import Navbar from "./assets/Navbar";
import Maincomponent from "./assets/Maincomponent";
import { useLocation ,useNavigate} from "react-router-dom";
import SideNavbar from "./assets/SideNavbar";

function App() {
  const [tasks, setTasks] = useState([]);
   const [taskName, setTaskName] = useState("");  
  const [dueDate,setDueDate] = useState("");
  const [discription, setDiscription] = useState("");
   
  const location = useLocation();
  const navigate = useNavigate();
 
   useEffect(() => {
    if (location.pathname === "/") {
      navigate("/Active/Manage");
    }
  }, [location.pathname]);


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
createDate: new Date()
};
    setTasks([...tasks, DetailTask]);
    setTaskName("");
    setDueDate("");
    setDiscription("");

    navigate("/Active/View");
  };

 }
  

  return (
    <div className="todoTaskContainer">

      <Navbar />
           <div className="bodyContainer">
             <SideNavbar />
      <Maincomponent
 taskName={taskName}
 dueDate={dueDate}
 discription={discription}
 setTaskName={setTaskName}
 setDueDate={setDueDate}
 setDiscription={setDiscription}
 addTask={addTask}
 tasks={tasks}
/>  

</div>
    </div>
  );
}
export default App;

