import { Routes,Route } from 'react-router-dom';
import PendingTasks from "./PendingTasks"
import DoneTasks from "./DoneTasks"
import OverDueTasks from "./OverDueTasks"
import BacklogTasks from "./BacklogTasks"
import ActiveTasks from './ActiveTasks';

function TasksDetails(props) {
  return (
    <div>
       <Routes>
        <Route path="/View/Active" element={<ActiveTasks  tasks={props.tasks}   />}></Route>
        <Route path="/View/Pending" element={<PendingTasks  tasks={props.tasks}   />}></Route>
     <Route path="/View/Done" element={<DoneTasks  tasks={props.tasks}   />}></Route>
     <Route path="/View/OverDue" element={<OverDueTasks  tasks={props.taskss}   />}></Route>
     <Route path="/View/Backlog" element={<BacklogTasks  tasks={props.tasks}   />}></Route>
      </Routes>
    </div>
  )
}

export default TasksDetails
