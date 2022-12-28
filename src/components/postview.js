import React, { useEffect } from "react";
import Navbar from "./navbar";
import { useState } from "react";

const PostView=()=>{
    const [title,setTitle] = useState("")
    const [image,setImage]=useState("")
    const [desc,setDesc] = useState("")
    useEffect(()=>{
        setTitle(localStorage.getItem("title"))
        setImage(localStorage.getItem("image"))
        setDesc(localStorage.getItem("description"))
    })
    return(
        <>
        <Navbar/>
        <div id="container">
            <h1>{title}</h1>
            <img src={image}/>
            <p>{desc}</p>
        </div>
        </>
    )
}
export default PostView;