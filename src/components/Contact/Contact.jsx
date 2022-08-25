import React from "react"
import "./Contact.css"
import Logo from "../../assests/R-logos/R-logos_white.png"

export default function Contact() {
  return (
    <div className="contactContainer" id="contact">
      <div className="contactHead">
        <h1>Get In Touch</h1>
        <p>
          In case You need me , please feel free to contact <br /><br />
          👇
        </p>
        <button className="mailBtn">
          <a
            href="mailto:happy.soni944@gmail.com"
            className="mailLink"
          >
            Say Hello
          </a>
        </button>
      </div>
      <div className="contactLinks">
        <a
          href="mailto:happy.soni944@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ihappysoni/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/ihappysoni"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://github.com/ihappysoni"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="tel:+918299098719">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="https://www.instagram.com/ihappysoni">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>

      <div className="footer">
        <p>Designed & Built by Happy Soni with <i class="fa-solid fa-heart" ></i></p>
        <img src={Logo} alt="Logo"  />
      </div>
    </div>
  )
}
