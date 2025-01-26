import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";

function Sponsors() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to the Sponsors Page</h1>
                <p>This is a paragraph.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Sponsors;
