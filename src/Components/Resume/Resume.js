import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from 'framer-motion';
import "../style.css";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: "-100%"
  }
}

const Resume = (props) => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={ pageTransition } className="card text-center col-sm-7" id="mainContent">
      <div className="card-body text-dark">
        <section id="resume" class="resume">
          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Summary</h3>
              <div class="resume-item pb-0">
                <p>
                  <em>
                    A result-oriented professional specializing in Software, AI
                    and Databases with 1+ years of proven experience in Software
                    development which include Java, Python and, JavaScript.
                  </em>
                </p>
              </div>

              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Software Engineer, Digywood Technologies Pvt. Ltd.</h4>
                <h5>Apr'2017 - May'2018 </h5>
                <p>
                  <em>Product: DigyTMS</em>
                </p>
                <p>
                  <ul>
                    <li>
                      {" "}
                      Worked eight sprints on developing an Android application
                      in an online teaching platform.{" "}
                    </li>
                    <li>
                      {" "}
                      Developed features such as streaming videos, practice
                      quizzes, document management system and Q/A forums.
                    </li>
                    <li>
                      {" "}
                      Worked one sprint on performing manual testing on the
                      developed sections with the Q/A team.
                    </li>
                    <li>
                      {" "}
                      Helped the senior developer in various development
                      activities such as optimizing the database, setting up
                      Version Control and CI/CD pipelines.
                    </li>
                    <li>
                      {" "}
                      Actively participated in sprint retrospective, sprint
                      planning and completed the stories assigned to me on time.{" "}
                    </li>
                    <li>
                      {" "}
                      Identified, tracked, reported, and resolved critical
                      issues in a timely manner.
                    </li>
                    <li>
                      {" "}
                      Utilized strong problem solving and creative/critical
                      thinking skills to understand business needs and translate
                      them into technology solutions.
                    </li>
                  </ul>
                </p>
              </div>

              <h3 class="resume-title">Education</h3>

              <div class="resume-item">
                <h4>Master of Science in Computer Science</h4>
                <h5>2018 - 2020</h5>
                <p>
                  <em>
                    The University of Texas at Arlington, Arlington, Texas
                  </em>
                </p>
                <p>
                  I have completed my 2 year graduation degree in computer
                  science with overall CGPA 3.3
                </p>
              </div>

              <div class="resume-item">
                <h4>Bachelor of Technology Engineering</h4>
                <h5>2013 - 2017</h5>
                <p>
                  <em>Alliance University, Bengaluru, Karnataka </em>
                </p>
                <p>
                  I have completed my 4 year undergraduate degree in Electronics
                  with overall CGPA 3.0
                </p>
              </div>
            </div>

            <div class="col-lg-6">
              <h3 class="resume-title">Projects</h3>
              <div class="resume-item">
                <h4>UTA MAC Facility and Maintenance System</h4>
                <h5>Aug'2019 - Dec'2019</h5>
                <p>
                  <ul>
                    <li>
                      Created Android application using the MVC architecture,
                      that allow users to reserve facilities, manage
                      reservations and pay for their reservations.
                    </li>
                    <li>
                      Applied SCRUM framework with weekly sprints to complete
                      the application in a period of 3 months.
                    </li>
                    <li>
                      Implemented Version Control for collaboration and to
                      create multiple releases of the software{" "}
                    </li>
                  </ul>
                </p>
              </div>

              <div class="resume-item">
                <h4>Trucker – Fleet Management application</h4>
                <h5>Apr'2020 - Jul'2020</h5>
                <p>
                  <ul>
                    <li>
                      {" "}
                      Created a spring boot application for managing a fleet of
                      trucks which gathers real-time data from API endpoints.
                    </li>
                    <li>
                      {" "}
                      Configured MySQL database to store data and fetch metrics
                      to display on dashboard and created a Rest API endpoint to
                      allow access to data.
                    </li>
                    <li>
                      {" "}
                      Hosted the application on Docker containers in a swarm
                      cluster on AWS EC2 instances and built CI/CD pipelines
                      using Jenkins.
                    </li>
                  </ul>
                </p>
              </div>

              <div class="resume-item">
                <h4>Controlling Drone using Hand Gestures</h4>
                <h5>Jan'2020 - Apr'2020</h5>
                <p>
                  <ul>
                    <li>
                      {" "}
                      Calibrating the Drone programmatically using a wide range
                      of values for the yaw, pitch and roll.
                    </li>
                    <li>
                      {" "}
                      Created a gesture recognition model using the YOLO V3
                      object detection algorithm through a custom labeled
                      dataset of 3000 images.
                    </li>
                    <li>
                      {" "}
                      Drone flight simulation using V-REP before implementing it
                      onto the Intel Aero RTF Drone.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
export default Resume;
