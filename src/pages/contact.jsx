import React from "react";
import "../output.css";
import "../input.css";
import "./auv.css";
import { Link } from "react-router-dom";

function Contact() {
    console.log("Rendering contact page");
    return (
        <div className="main-background2">
            <div className="hero-container">
                <h1>Interested in working with us?</h1>
                <section className="report-container">
                    <div className="card-container">
                        <StudentButton />
                        <SponsorsButton />
                    </div>
                </section>
            </div>
        </div>
    );
}

function StudentButton() {
    return (
        <Link to="/">
            <button className="buttonCard">Current UCSD Students!</button>
        </Link>
    );
}

function SponsorsButton() {
    return (
        <Link to="/">
            <button className="buttonCard"> SponSOrINg US?!?!!?!?!?!?!</button>
        </Link>
    );
}

export default Contact;
