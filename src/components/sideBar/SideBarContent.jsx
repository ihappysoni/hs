import React from "react"
import "./SideBarContent.css"
import ResumePDF from "../../Resume_Updated.pdf"

export default function SideBarContent() {
  return (
    <div className="siderContent">
      <a href="#home">Home</a>

      <a href="#about">About</a>

      <a href="#projects">Projects</a>

      <a href="#resume">Resume</a>

      <a href="#contact">Contact</a>

      <button className="resumeBtn sideResumeBtn">
        <a href={ResumePDF}>Download My Resume</a>
      </button>
    </div>
  )
}
