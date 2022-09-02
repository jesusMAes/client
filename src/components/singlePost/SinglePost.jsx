import React from "react";
import './singlepost.css';


export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="singlePostImg" />

          <h1 className="singlePostTitle">
          Single post title
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
          </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Jesús Mármol</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eveniet fugit iste vero praesentium, pariatur molestiae. Ratione assumenda architecto molestiae recusandae quos, reiciendis vel iste fugiat maxime nostrum optio nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eveniet fugit iste vero praesentium, pariatur molestiae. Ratione assumenda architecto molestiae recusandae quos, reiciendis vel iste fugiat maxime nostrum optio nisi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eveniet fugit iste vero praesentium, pariatur molestiae. Ratione assumenda architecto molestiae recusandae quos, reiciendis vel iste fugiat maxime nostrum optio nisi.</p>
          
      </div>
     
    </div>
  )
}