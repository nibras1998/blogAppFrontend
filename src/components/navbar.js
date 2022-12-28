import React from "react";
import { useEffect, useContext } from "react";
import { userContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'

const Navbar=()=>{
    const [useInfo,setUseinfo] = useContext(userContext);
    const navigate = useNavigate()
    const Logout=()=>{
        setUseinfo({accessToken:""})

    }
    return(
        <div id="navcon">
            <h1>BlogApp</h1>
            <p id="logout" onClick={Logout}>Logout</p>
            <p id="create"><Link to="/upload">Create</Link></p>
            <p><Link to="/homepage" id="home">Home</Link></p>
        </div>
    )
}
export default Navbar;