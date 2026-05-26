import { useNavigate } from "react-router-dom"

function SideNavbar() {
    let navigate = useNavigate();
  return (
    <div className="sideNavbar"> 
   <ul className="sidenavbarList">
    <li onClick={()=>navigate("/Active")}>Active</li>
    <li onClick={()=>navigate("/Pending")}>Pending</li>
    <li onClick={()=>navigate("/Done")}>Done</li>
    <li onClick={()=>navigate("/OverDue")}>Over Due</li>
    <li onClick={()=>navigate("/Backlog")}>Backlog</li>
   </ul>
    </div>
  )
}

export default SideNavbar
