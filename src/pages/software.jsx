import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function Software() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to Software team</h1>
                <p>This is a paragraph.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Software;
