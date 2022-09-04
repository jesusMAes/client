import React from "react";
import {Link} from 'react-router-dom'
import './post.css';



export default function Post({post}){
  const publicFolder = 'http://localhost:5000/images/'
  return (
    <div className="post">
      {post.photo ? (
      <img className="postImg"
      src={publicFolder+ post.photo}
      alt="post " 
      />
      ) : (
        <img className="postImg"
      src='https://images.unsplash.com/photo-1605187151664-9d89904d62d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      alt="post " 
      />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(c => (
        
            <span className="postCat" key={c}>{c}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className='link' >
        <span className="postTitle">
          {post.title}
        </span>
        </Link>
        <hr/>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}