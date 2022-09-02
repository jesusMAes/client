import React from "react";
import './write.css'

export default function Write (){
  return (
    <div className="write">
      <img className="writeImg" src="https://img.freepik.com/vector-gratis/fecha-cafe-perfecta-fondo-ilustracion-estetica-san-valentin_53876-120552.jpg" alt=""/>
      <form className="writeForm" >
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className=" writeIcon fa fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>

        <div className="writeFormGroup">
          <textarea placeholder="Tell your Story..." type="text" className="writeInput writeText"/>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}