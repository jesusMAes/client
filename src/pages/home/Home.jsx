import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios';
import './home.css'
import { useLocation } from "react-router-dom";

export default function Home(){
  const [posts, setPost] =useState([]);
  const {search} = useLocation();



  useEffect(() => {
    const fetchPost = async () =>{
      //get all posts
      const response = await axios.get("posts"+search)
      setPost(response.data)
    }

    fetchPost()
  },[search])
 
  return (
    <>
      <Header />
    <div className="home">
      <Posts posts={posts} />
      <Sidebar />
    </div>
    </>
  )
}