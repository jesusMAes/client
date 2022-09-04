import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import './sidebar.css'
import { Link } from "react-router-dom";



export default function Sidebar(){
  const [cats,setCats] = useState([])

  useEffect( () => {
    const getCats = async () =>{
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="../../images/aboutsidebar.png" alt="" className="aboutMeImage"/>
        <p>I'm Jesús Mármol, fullstack developer ,</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map((c) => (
          <Link to={`/?cat=${c.name}`} className='link' key={c.name}>
          <li className="sidebarListItem" key={c.name.toString()
          } >{c.name}</li>
          </Link>
          )
        )}
        
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-linkedin"></i>
      <i className="sidebarIcon fa-brands fa-github"></i>
      <i className="sidebarIcon fa-solid fa-at"></i>
      </div>
      </div>

    </div>
  )
}