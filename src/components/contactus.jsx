import React from "react";
import Navbar from "./Navbar";
import "./styles.css";

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to My Contact</h1>
                <p>This is a paragraph.</p>
            </div>
        </div>
    );
}

export default Contact;
