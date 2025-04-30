import React from "react";
import "./subteams.css";
import "../components/footer.css";
import softwareImage from "../assets/teampics/software.jpg"; 


function Software() {
  return (
    <div>
      <div className="image">
        <h1>Software</h1>
        <p>
          Our software team created this team website and also builds the algorithms used to guide the robot via the onboard cameras, sonar, DVL, and other sensors. 
        </p>
      </div>
      <div className="content-container">
        <img src={softwareImage} alt="Software Team" className="hi-image" />
        <div className="text">
          <h2>Our Approach</h2>
          <p>We leverage cutting-edge technologies and agile methodologies to develop robust software solutions. Our stack includes Python for backend logic and perception, ROS (Robot Operating System) for middleware communication, and React + Node.js for building intuitive user interfaces like this website. We focus on modularity and testability to ensure our codebase is maintainable and scalable.</p>
        </div>
      </div>
    </div>
  );
}

export default Software;
