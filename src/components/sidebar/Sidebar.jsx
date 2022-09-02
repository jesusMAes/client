import React from "react";
import './sidebar.css'


export default function Sidebar(){
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="./images/aboutsidebar.png" alt="" className="aboutMeImage"/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ,</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
        <li className="sidebarListItem">Literature</li>
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