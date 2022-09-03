import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './singlepost.css';
import { useState } from "react";


export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(()=> {
    const getPost = async () =>{
      const res = await axios.get('/posts/'+path)
      setPost(res.data)
    }
    getPost()
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
            <img src={post.photo} alt="" className="singlePostImg" />        
        ): (
          <img src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="singlePostImg" />
        )}


          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
          </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
           <Link to ={`/?user=${post.username}`} className='link'> 
           Author: <b>{post.username}</b>
           </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
          
      </div>
     
    </div>
  )
}