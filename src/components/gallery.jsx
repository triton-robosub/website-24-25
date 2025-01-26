import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Gallery() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to My Gallery</h1>
                <p>This is a paragraph.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;
