import React from "react";
import Hi from "../../assests/undraw_fireworks.svg";
import Wave from "../../assests/svg.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeTextContainer">
        <div className="photo">
          <div >
            <h4 className="intro">Hello there, my name is</h4>
            <h1 className="name">Happy Soni.</h1>
            <h2 className="job">Software Engineer (CloudEq)</h2>
            <h2 className="job">& A Full Stack MERN Developer.</h2>
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/96763614?v=4"
              alt="Happy Soni " id="photo"
            />
          </div>
        </div>
        <img src={Hi} alt="profile" className="profile" />
      </div>
      <img src={Wave} alt="wave" className="wave" />
    </div>
  );
}
