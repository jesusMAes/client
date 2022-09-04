import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './singlepost.css';
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = 'http://localhost:5000/images/';
  const {user} = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false)


  useEffect(()=> {
    const getPost = async () =>{
      const res = await axios.get('/posts/'+path)
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc)
    }
    getPost()
  },[path]);

  const handleDelete = async () => {
    try{
    await axios.delete('/posts/'+path,
     {data:{username:user.username}});
    window.location.replace('/')
    }catch(err){}
  }

  const handleUpdate = async () => {
    try{
      await axios.put('/posts/'+path,
       {username:user.username, title, desc});
      setUpdateMode(false)
      }catch(err){}
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
            <img src={publicFolder + post.photo} alt="" className="singlePostImg" />        
        ): (
          <img src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="singlePostImg" />
        )}
        {
          updateMode ? <input type='text' value={title} className='singlePostTitleInput'
           onChange={(e) => setTitle(e.target.value)}/> 
           : (
            <h1 className="singlePostTitle">
            {title}
            {post.username === user.username && (
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"
             onClick={()=> setUpdateMode(true)}></i>
            <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
          </div>
            )}

          </h1>
          )
        }


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
        { updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} /> : (
        <p className="singlePostDesc">
        {desc}
        </p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )}
        
      </div>
     
    </div>
  )
}