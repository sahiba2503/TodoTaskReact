// import React from 'react'
import {useNavigate} from "react-router-dom"
function Navbar() {
  let navigate = useNavigate();
  return (
    <nav className="navbar">
        <button onClick={()=>navigate("/Manage")}>Manage</button>
        <button onClick={()=>navigate("/View/Active")}>View</button>
      </nav>
  )
}

export default Navbar
