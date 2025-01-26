<<<<<<< HEAD:index.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
=======
import React from "react";
import Navbar from "./Navbar";
import "./styles.css";
>>>>>>> f5ded83 (changed components name and exports):src/components/index.jsx

function Index() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to My Website</h1>
                <p>This is a paragraph.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Index;
