import SideNavbar from "./SideNavbar"
import ViewTasks from "./ViewTasks"

function View({ tasks }) {
    return (
    <div className="viewTaskContainer">
               <SideNavbar />
               <ViewTasks tasks={tasks}/>
              </div>
    )
}

export default View
