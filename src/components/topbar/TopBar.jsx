import React from "react";
import {Link} from "react-router-dom"
import './topbar.css';


export default function TopBar (){
  const user =false
  return(
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-github"></i>
      <i className="topIcon fa-solid fa-at"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
           <Link to="/" className="link"> HOME</Link>
           </li>
          <li className="topListItem">
          <Link to="/" className="link" > ABOUT</Link>
            </li>
          <li className="topListItem">
          <Link to="/" className="link" > CONTACT</Link>
          </li>
          <li className="topListItem">
          <Link to="/write" className="link" > WRITE</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="link" > {user && "LOGOUT"}</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img src='../images/profilePic.png' alt="profile" className="topImage" />
          ): (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link"> LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link to="/register" className="link"> REGISTER</Link>
           </li> 
          </ul>
          )
        }
        
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}