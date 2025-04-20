import React from "react";
import { Link } from "react-router-dom";
import "../components/components.css";

function AboutUs() {
    return (
        <div className = "main-background welcome-container">
            <div className = "welcome-container">
                <h1 className = "oxanium-semibold welcome-box">Welcome to Triton Robosub!</h1>
                <p className = "blinker-regular welcome-box">
                    We're the Robosub team for the University of California, San
                    Diego. We're a diverse family, with interests in computer
                    science, engineering, and more -- including a passion to create
                    an Autonomous Underwater Vehicle (AUV). Our members seek to
                    strengthen their skills in computer vision, engineering
                    fundamentals, and most importantly, teamwork!
                </p>
                <Link to="/auv">
                    <button className="welcome-box oxanium-semibold button">Check out our team!</button>
                </Link>
            </div>
        </div>
    );
}

export default AboutUs;
