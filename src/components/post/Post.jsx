import React from "react";
import './post.css'


export default function Post(){
  return (
    <div className="post">
      <img className="postImg"
      src="https://i.pinimg.com/originals/6e/d9/77/6ed97796206b9ba37f5ed425295944ee.jpg"
      alt="post " 
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod magni, commodi adipisci dicta quam magnam doloribus error accusamus sunt velit distinctio. Porro ea, doloremque magnam asperiores odio sunt fuga adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod magni, commodi adipisci dicta quam magnam doloribus error accusamus sunt velit distinctio. Porro ea, doloremque magnam asperiores odio sunt fuga adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod magni, commodi adipisci dicta quam magnam doloribus error accusamus sunt velit distinctio. Porro ea, doloremque magnam asperiores odio sunt fuga adipisci.</p>
    </div>
  )
}