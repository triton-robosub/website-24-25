import React from "react";
import "../output.css";
import "../input.css";
import "./auv.css";
import "./contact.css";
import { Link } from "react-router-dom";

function Contact() {
    console.log("Rendering contact page");
    return (
        <div className="main-background2">
            <div className="main-container">
                <h1 className="title-text">Interested in working with us?</h1>
                <section className="card-container">
                    <StudentButton />
                    <SponsorsButton />
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
