import React from "react";
import './header.css'

export default function Header (){
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="https://cutewallpaper.org/21/typewriter-wallpapers/Typewriter-And-Coffee-UHD-4K-Wallpaper-Pixelz.jpg" className="headerImg" alt="a coffe restaurant with a typping machine" />
    </div>
  )
}