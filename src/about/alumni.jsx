import React from 'react';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Testing Testing 1 2 3</h1>
                <p>This is a paragraph.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default App;