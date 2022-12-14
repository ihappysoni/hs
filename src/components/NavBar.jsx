import React, { useState, useEffect } from "react"
import TemporaryDrawer from "./sideBar/SideBar"
import Logo from "../assests/R-logos/smily.jpg"
import "./navBar.css"

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false)

  useEffect(() => {
    const show = () => {
      // console.log("yes")
      if (window.innerWidth < 560) {
        setShowSideBar(true)
      } else {
        setShowSideBar(false)
      }
    }
    window.addEventListener("resize", show)
    return () => window.removeEventListener("resize", show)
  }, [])

  return (
    <div className="navContainer">
      <img src={Logo} alt="Logo" className="logo" />

      {showSideBar && <TemporaryDrawer/>}
      <nav>
        <ul>
          <li>
            <a href="#home" id="home">Home</a>
          </li>
          <li>
            <a href="#about" id="about">About</a>
          </li>
          <li>
            <a href="#projects" id="projects">Projects</a>
          </li>
          <li>
            <a href="#resume" id="resume">Resume</a>
          </li>
          <li>
            <a href="#contact" id="contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
