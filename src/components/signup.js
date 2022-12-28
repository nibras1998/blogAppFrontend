import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './signup.css'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const SignupHandler = (e) => {
        e.preventDefault()
        if (email === "" || password === "" || confirmPassword === "") {
            return alert("All fields are required")
        }
        if (!(email.includes("@"))) {
            return alert("Invalid email")
        }
        if (password.length < 8) {
            return alert("Password should contain 8 characters")
        }
        if (password !== confirmPassword) {
            return alert("Passwords does not match")
        }
        axios.post("http://localhost:5000/signup", {
            email: email,
            password: password
        }).then(res => {
            console.log(res)
            if (res.data.status === "User already exists") {
                return alert("User already exists")
            } else if (res.data.status === "User created") {
                alert("User registered")
                return navigate("/")

            }


        })
    }
    return (
        <div className="signupcontainer">
            <form>
                <p id="signhead">SIGN UP</p>
                <label>Email</label><br></br>
                <input placeholder="email" type="email" onChange={e => setEmail(e.target.value)} /><br></br>
                <label>Password</label><br></br>
                <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} /><br></br>
                <label>Confirm Password</label><br></br>
                <input placeholder="confirm password" type="password" onChange={e => setConfirmPassword(e.target.value)} /><br></br>
                <button onClick={SignupHandler}>SIGN UP</button>
            </form>
        </div>
    )
}
export default Signup;