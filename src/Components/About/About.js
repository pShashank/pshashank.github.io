import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const About = (props) => {
  return (
    <div className="card text-center col-sm-7 " id="mainContent">
      <h2 className="card-title" style={{ marginTop: "100px" }}>
        I'm Shashank Penukonda
      </h2>
      <div className="card-body text-dark">
        <p>
          Graduated from the University of Texas at Arlington. I have completed
          my masters in Computer Science with majors in AI and DB during which I
          worked on several projects in computer vision, machine learning and
          software development. I also took classes in cloud development and
          gained experience working with different cloud providers such as
          Microsoft Azure and Amazon AWS. Further, I took the AWS Solutions
          Architect Associate exam and cleared it.
          <br />
          Before my masters, I completed my undergraduate studies from Alliance
          University, Bengaluru India. I completed my B.Tech in Computer Science
          and later had the chance to work at a startup called Digywood
          Technologies Pvt. Ltd. where I gained valuable experience of working
          in the industry.
          <br />
          Currently I'm looking for full time opportunities as a Software
          Engineer, Full-Stack Developer and Data Engineer. Please visit my
          Resume to view my qualifications.
        </p>
      </div>
    </div>
  );
};
export default About;
