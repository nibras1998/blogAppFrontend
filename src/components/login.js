import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {userContext} from '../App'
import './login.css'

const Login = () => {
    const [useInfo,setUseinfo] = useContext(userContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const LoginHandler = (e) => {
        e.preventDefault()
        if (email === "" || password === "") {
            return alert("Input fields should not be empty")
        }
        if (!(email.includes("@"))) {
            return alert("Invalid email")
        }
        axios.post("http://localhost:5000/login", {
            email: email,
            password: password
        }).then(res => {
            console.log(res)
            if (res.data.status === "Invalid password") {
                return alert("Invalid password")
            } else if (res.data.status === "ok") {
                setUseinfo({
                    accessToken:res.data.token
                })
                alert("Login Successfull")
                navigate("/homepage")
                console.log(useInfo)
            }
        })
    }
    return (
        <div className="logincontainer">
            <form>
                <p id="loginhead">LOGIN</p>
                <label>Email</label><br></br>
                <input placeholder="email" type="email" onChange={e => setEmail(e.target.value)} /><br></br>
                <label>Password</label><br></br>
                <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} /><br></br>
                <input id="check" type="checkbox" /> <label id="rem">Remember me?</label><br></br>
                <button onClick={LoginHandler}>LOGIN</button><br></br>
                <p id="forgot">Forgot password?</p>
                <p id="need">Need an account? <span><Link to="/register">Signup</Link></span></p>
            </form>
        </div>
    )
}
export default Login;