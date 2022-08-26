import React from "react";
import "./Projects.css";
import Ecom from "../../assests/projects/ecom.png";
import Nf from "../../assests/projects/nf.png";
import BlogProjectImg from "../../assests/projects/blog.png";
import TodoProjectImg from "../../assests/projects/todo.png";
import ClockProjectImg from "../../assests/projects/clock3.png";
import Prepbyte from "../../assests/projects/prepbyte.png";

export default function Projects() {
  return (
    <div className="projectsContainer" id="projects">
      <div className="projectsTitle">
        <h1>Some Things I've Built</h1>
      </div>
      <div className="projects">
        <div className="project blog">
          <a
            href="https://ihappysoni-blog-app-node.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={BlogProjectImg}
              alt="blog"
              className="projectImg"
            />
          </a>
          <div className="projectDetails">
            <p className="featured">Featured Project</p>
            <h1 className="projectTitle">Blog/News App </h1>
            <p className="projectInfo">
              Blog / News Updates, showing Bollywood , Technology, Fitness , Sports , Hollywood etc related Blogs are shown using API build using Node by Me.
            </p>
            <div className="usedTechno">
              <p>React</p>
              <p>Css</p>
              <p>Node.Js</p>
              <p>Git</p>
              <p>Netlify</p>
              <p>Heroku</p>
            </div>
            <div className="projectLinks">
              <a
                href="https://github.com/ihappysoni/BlogAppFrontEnd"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://ihappysoni-blog-app-node.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project movieFinder">
          <div className="projectDetails projectDetails2">
            <p className="featured">Featured Project</p>
            <h1 className="projectTitle">Netflix UI</h1>
            <p className="projectInfo">
              A non Working UI Clone for the entertainment platform Netflix
            </p>
            <div className="usedTechno usedTechno2">
              <p>Javascript</p>
              <p>Css</p>
              <p>Html</p>
              <p>React</p>
              <p>Git</p>
              <p>Github</p>
            </div>
            <div className="projectLinks projectLinks2">
              <a
                href="https://github.com/ihappysoni/NetflixClone"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://ihappysoni-nf.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <a
            href="https://ihappysoni-nf.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Nf}
              alt="netflix UI"
              className="projectImg"
            />
          </a>
        </div>
        <div className="project covidTracker">
          <a
            href="https://ecommerce-ihappysoni.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Ecom}
              alt="covid-19 tracker"
              className="projectImg"
            />
          </a>
          <div className="projectDetails">
            <p className="featured">Featured Project</p>
            <h1 className="projectTitle">E-Commerce Site</h1>
            <p className="projectInfo">
              An E- Commerce Site with React Components of Checkout and Store using Context APIs
            </p>
            <div className="usedTechno">
              <p>React</p>
              <p>Css</p>
              <p>API</p>
              <p>Git</p>
              <p>Netlify</p>
            </div>
            <div className="projectLinks">
              <a
                href="https://github.com/ihappysoni/React-Ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://ecommerce-ihappysoni.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="otherProjects">
          <h1>Other Noteworthy Projects</h1>
          <div className="otherProjectsContainer">
            <div className="otherProject">
              <a
                href="https://ihappysoni-todo-react.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={TodoProjectImg}
                  alt="todo-list"
                  className="otherProjectsImg"
                />
              </a>
              <h2>Todo-List</h2>
              <p className="otherProjectInfo">
                A Simple Todo-List, with clean UI and Moblie responsive
              </p>
              <div className="usedTechno otherTechno">
                <ul>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>Git</li>
                </ul>
                {/* <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Github</p> */}
              </div>
              <div className="projectLinks">
                <a
                  href="https://github.com/ihappysoni/Todo-React"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div className="otherProject">
              <a
                href="https://ihappysoni.github.io/DigitalClock/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ClockProjectImg}
                  alt="clock"
                  className="otherProjectsImg"
                />
              </a>
              <h2>Digital CLock</h2>
              <p className="otherProjectInfo">
                A Simple Digital Clock, with clean UI and Moblie responsive
              </p>
              <div className="usedTechno otherTechno">
              <ul>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>Git</li>
                </ul>
              </div>
              <div className="projectLinks">
                <a
                  href="https://github.com/ihappysoni/DigitalClock"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div className="otherProject">
              <a
                href="https://ihappysoni.github.io/prepBytesClone/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Prepbyte}
                  alt="clock"
                  className="otherProjectsImg"
                />
              </a>
              <h2>PrepBytes Clone UI</h2>
              <p className="otherProjectInfo">
                A Clone Webpage UI of landing page of Educational Coding Platform PrepBytes 
              </p>
              <div className="usedTechno otherTechno">
              <ul>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>Git</li>
                </ul>
              </div>
              <div className="projectLinks">
                <a
                  href="https://github.com/ihappysoni/prepBytesClone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <h2>These are some of the projects I've done,</h2>
          <h2>
            You can also checkout my other projects by clicking&nbsp;
            <a
              href="https://github.com/ihappysoni"
              target="_blank"
              rel="noreferrer"
              className="otherProjectsPageLink"
            >
              here!
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
