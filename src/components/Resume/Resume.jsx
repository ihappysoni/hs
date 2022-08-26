import React from "react"
import "./Resume.css"
import Happy from "../../happy.pdf"

export default function Resume() {
  return (
    <div className="resumeContainer" id="resume">
      <h1 className="resumeTitle">Resume</h1>
      <div className="resumeDownload">
        <button className="resumeBtn">
          <a href={Happy} download="happy.pdf">Download My Resume</a>
        </button>
      </div>
      <div className="education">
        <h2>Education:</h2>
        <section>
          <h3>
            Chandigarh University
          </h3>
          <p>Master's of Computer Application, 2022-Present</p>
        </section>
        <br />
        <section>
          <h3>Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal</h3>
          <p>Bachelor's of Computer Application, 2019-2022</p>
        </section>
        <br />
        <section>
          <h3>B. K. D. Aldrich Public School, Orai</h3>
          <p>Senior Seconadary, 2017</p>
        </section>
        <br />
        <section>
          <h3>Lord Mother Public School, Etawah</h3>
          <p>High School, 2015</p>
        </section>
        <br />
      </div>
      <div className="certificates">
        <h2 className="certificatesHead">Certifications:</h2>
        <div className="certificatesContainer">
          <div>
            <h3>
            Web Development(HTML, CSS, BootStrap, JavaScript, React, PHP, SQL and Database)
            </h3>
            <p>Completed on: Feb 2022</p>
            <a
              href="https://trainings.internshala.com/verify-certificate/?certificate_number=2EF29A17-5217-31DE-84AD-353505716DE6"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>React(Basics)</h3>
            <p>Completed on: Aug,2022</p>
            <a
              href="https://www.hackerrank.com/certificates/89045eec724f"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>
            CSS
            </h3>
            <p>Completed on: Aug 2022</p>
            <a
              href="https://www.hackerrank.com/certificates/9278edfcf7ac"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>
            Python(Basics)
            </h3>
            <p>Completed on: Aug 2022</p>
            <a
              href="https://www.hackerrank.com/certificates/d2784c7ae423"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>Python & Data Visualisation</h3>
            <p>Completed on: Dec,2021</p>
            <a
              href="https://www.cert.shapeai.tech/verify/1BGd7r"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>
            Problem Solving(Basics)
            </h3>
            <p>Completed on: Aug 2022</p>
            <a
              href="https://www.hackerrank.com/certificates/7635bb81084b"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>TCS NQT Score(Numerical, Verbal and Reasoning Ability)
            </h3>
            <p>Completed on: Jan 2022</p>
            <a
              href="https://drive.google.com/file/d/13-jXsKh6xEu60EmPCA5ZHmSjT6g5aIWl/view"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>TCS ION Communication Skills</h3>
            <p>Completed on: December 2021</p>
            <a
              href="https://drive.google.com/file/d/12mBTQe9pmdEbjmBrPYce4dKnZzoch6-1/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
