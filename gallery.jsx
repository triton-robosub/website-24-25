import React from 'react';
import Navbar from './Navbar';
import './styles.css';

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to My Website</h1>
                <p>This is a paragraph.</p>
            </div>
        </div>
    );
}

export default App;