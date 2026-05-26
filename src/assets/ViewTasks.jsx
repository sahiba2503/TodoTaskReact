
// import { Routes,Route } from 'react-router-dom';
// import PendingTasks from "./PendingTasks"
// import DoneTasks from "./DoneTasks"
// import OverDueTasks from "./OverDueTasks"
// import BacklogTasks from "./BacklogTasks"
// import ActiveTasks from './ActiveTasks';
// import SideNavbar from './SideNavbar';
import TasksDetails from './TasksDetails';


function ViewTasks(props) {
  return (
    <div className='viewTaskContainer'>
         <TasksDetails props={props} />
         </div>
  )
}

export default ViewTasks
