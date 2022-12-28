import Navbar from "./navbar";
import React from "react";
import axios from "axios";
import './upload.css'
import { useEffect, useState, useContext } from "react";
import { userContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

const Upload=()=>{
    const [title,setTitle] = useState("")
    const [imageurl,setImageurl] = useState("")
    const [description,setDescription] = useState("")
    const ImageSub=(e)=>{
        e.preventDefault()
    }
    const navigate = useNavigate()
    const HandleSubmit=(e)=>{
        e.preventDefault()
        if(title==="" || imageurl==="" || description===""){
            return alert("All input fields are required")
        }
        axios.post("http://localhost:5000/blog",{
            imageurl:imageurl,
            title:title,
            description:description
        }).then(res=>{
            console.log(res)
            navigate("/homepage")

        })
    }
    return(
        <div>
            <Navbar/>
            <div className="uploadcon">
            <input placeholder="Title" type="text" id="titleinp" onChange={e=>setTitle(e.target.value)}/><br></br>
            <input placeholder="Image URL" type="text" id="imginp" onChange={e=>setImageurl(e.target.value)}/>
            <button id="imgurl">Submit Image Url</button><br></br>
            <input placeholder="Description" type="text" id="descinp" onChange={e=>setDescription(e.target.value)}/>
            <br></br><button id="sub" onClick={HandleSubmit}>Submit</button>
            </div>
           

        </div>
    )
}
export default Upload;