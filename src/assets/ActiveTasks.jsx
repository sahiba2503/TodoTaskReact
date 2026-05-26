

function ActiveTasks(props) {
  return (
     <div className="tasksViewContainer">
            {props.tasks.map((task, index) => (
                <div key={index} className="seperateTask">
                    <p> <strong>Task Name :</strong> {task.name}</p>
                    <p><strong>  DueDate :</strong> {task.dueDate}</p>
                    <p><strong>CreateDate : </strong> {task.createDate.toLocaleDateString()}</p>
                    <p><strong>Discription : </strong>{task.discription}</p>
                    <span> ←   </span>
                    <span>  x </span>
                    <span>   →  </span>
                    <span>  ⇧ </span>
                </div>

            ))}
        </div> 
  )
}

export default ActiveTasks
