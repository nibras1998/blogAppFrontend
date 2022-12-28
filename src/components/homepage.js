import { useEffect, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./navbar";
import { userContext } from "../App";
import './homepage.css'
import axios from "axios";


const HomePage=()=>{
    const [useInfo,setUseinfo] = useContext(userContext);
    const [blogs,setBlogs] = useState(null)
    const navigate = useNavigate()
    const ViewBlog=(item)=>{
        localStorage.setItem("image",item.imageurl)
        localStorage.setItem("title",item.title)
        localStorage.setItem("description",item.description)
        navigate("/postview")
    }
    useEffect(()=>{
        axios.get("http://localhost:5000/blogs")
        .then(res=>{
            setBlogs(res.data.blogs)
            console.log(res)
        })
        axios.get("http://localhost:5000/homepage",{
            headers:{
                authorization:useInfo.accessToken
            }
        }).then(res=>{
            console.log(res)
            if(res.data.status==="Unauthorized"){
                navigate("/")
            }
        })
    },[useInfo.accessToken])
    return(
        <div>
            <Navbar/>
            {blogs&&blogs.map((item)=>{
                return(
                    <>
                    <div className="blogitem">
                <div className="imgcontainer">
                    <img src={item.imageurl}/>
                </div>
                <div className="titledesc">
                    <h2 onClick={()=>ViewBlog(item)}>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
                    </>
                )
            })}
            
        </div>
    )
}
export default HomePage;