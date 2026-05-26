import { useNavigate } from "react-router-dom"

function SideNavbar() {
    let navigate = useNavigate();
  return (
      
   <div className="sideNaveList">
    <li onClick={()=>navigate("/View/Active")}>Active</li>
    <li onClick={()=>navigate("/View/Pending")}>Pending</li>
    <li onClick={()=>navigate("/View/Done")}>Done</li>
    <li onClick={()=>navigate("/View/OverDue")}>Over Due</li>
    <li onClick={()=>navigate("/View/Backlog")}>Backlog</li>
        </div>
    
  )
}

export default SideNavbar
