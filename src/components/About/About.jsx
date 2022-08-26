import React, { useState, useEffect } from "react"
import "./About.css"
import AboutImg from "../../assests/undraw_freelancer.svg"
import Logo from "../../assests/R-logos/R-logos_white.png"

export default function About() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutTitle">
        <h1>About Me</h1>
      </div>
      <div className="abountContentContainer">
        <div className="aboutContent">
          <p>
            Hello there, I'm Happy Soni. I am currently working as Junior Software Engineer at CloudEQ 
            & I'm an aspiring full stack MERN developer. I had done my Bachelor's and currently persuing Master's from Chandigarh University
          </p>
          <p>
            Fast-forward to today, I am currently learning DevOps , SysOps and Python Programming. As I was
            learning web i was enjoying turning complex problems into simple, beautiful and intuitive designs 
            now i am enjoying learning new technologies like CI/CD Pipeline, Terraform, Github Action, AWS and Azure.
             When I'm not pushing pixels or flying into Clouds, you'll find me reading fiction or sketching one's portraits.
          </p>
          <div className="skillsContainer">
            <br />
            <h2 id="head">Languages/Libraries that i have hands-on experience</h2>
            <ul className="skills">
              <li>
                <i className="fa-brands fa-python" title="Python"></i>
              </li>
              <li>
                <i className="fa-brands fa-java" title="Java"></i>
              </li>
              <li>
                <i className="fa-brands fa-c" title="C/C++"></i>
              </li>
              <li>
                <i className="fa-brands fa-html5" title="Html5"></i>
              </li>
              <li>
                <i className="fa-brands fa-css3-alt" title="CSS3"></i>
              </li>
              <li>
                <i className="fa-brands fa-js" title="Javascript"></i>
              </li>
              <li>
                <i className="fa-brands fa-git-alt" title="Git"></i>
              </li>
              <li>
                <i className="fa-brands fa-react" title="ReactJs"></i>
              </li>
              <li>
                <i className="fa-brands fa-node" title="NodeJs"></i>
              </li>
              <li>
                <i className="fa-brands fa-github" title="Github"></i>
              </li>
              <li>
                <i className="fa-brands fa-bootstrap" title="Bootstrap"></i>
              </li>
              <li>
                <i className="fa-brands fa-php" title="PHP"></i>
              </li>
              <li>
                <i className="fa-brands fa-aws" title="AWS"></i>
              </li>
            </ul>
          </div>
        </div>

        <img src={AboutImg} alt="About me" className="about-me" />
      </div>
      <div className="footerLogo2">
        {showTopBtn && (
          <img
            src={Logo}
            alt="Logo"
            className="logo logo2 logo3"
            onClick={goToTop}
          />
        )}
      </div>
    </div>
  )
}
