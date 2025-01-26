import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from ".//components/navbar.js";
import { Outlet } from "react-router-dom";
import Footer from ".//components/footer.js";

function App() {
    return (
        <div>
            <h1>Landing Page</h1>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
