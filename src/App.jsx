import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/navbar.js";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer.js";
import "./components/App.css";

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
                <p>
                    Welcome to our page! We're the Robosub team for the University of California, San Diego. We're a diverse family, with interests in computer science, engineering, and more -- including a passion to create an Autonomous Underwater Vehicle (AUV). Our members seek to strengthen their skills in computer vision, engineering fundamentals, and most importantly, teamwork!
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default App;
