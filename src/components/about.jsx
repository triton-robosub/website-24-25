import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <div>
            <h1>Welcome to our page!</h1>
            <p>
                We're the Robosub team for the University of California, San
                Diego. We're a diverse family, with interests in computer
                science, engineering, and more -- including a passion to create
                an Autonomous Underwater Vehicle (AUV). Our members seek to
                strengthen their skills in computer vision, engineering
                fundamentals, and most importantly, teamwork!
            </p>
            <Link to="/auv">
                <button>Check out the Team</button>
            </Link>
        </div>
    );
}

export default AboutUs;
