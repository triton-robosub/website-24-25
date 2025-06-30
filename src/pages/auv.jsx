// src/pages/auv.jsx
import React from 'react';
import teamPhoto from '../assets/image.png';
import logo from '../assets/logo.png';
import paperPdf from '../assets/fakeRobosubDoc.pdf';
import '../pages/auv.css';

export default function Auv() {
  return (
    <div className="new-auv-container">
      {/* Hero Section */}
      <section className="new-hero-section">
        <div 
          className="new-hero-background"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 41, 59, 0.7), rgba(0, 106, 150, 0.7)), url(${teamPhoto})`
          }}
        >
          <div className="new-hero-content">
            <h1>Autonomous Underwater Vehicle</h1>
            <p>Triton Robosub's cutting-edge AUV designed for underwater exploration and competition excellence.</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="new-overview-section">
        <div className="new-container">
          <div className="new-content-grid">
            <div className="new-text-content">
              <h2>About Our AUV</h2>
              <p>
                Our Autonomous Underwater Vehicle represents years of engineering innovation and teamwork. 
                Designed and built by UC San Diego students, this robot showcases advanced autonomous 
                navigation, computer vision, and mechanical systems working in perfect harmony.
              </p>
              <p>
                Built for the annual RoboSub competition, our AUV demonstrates capabilities in object 
                detection, path planning, and mission execution in challenging underwater environments.
              </p>
            </div>
            <div className="new-image-content">
              <img src={logo} alt="Triton Robosub Logo" className="new-logo-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Documentation Section */}
      <section className="new-technical-section">
        <div className="new-container">
          <h2>Technical Documentation</h2>
          <div className="new-pdf-container">
            <div className="new-pdf-viewer">
              <iframe
                src={`${paperPdf}#toolbar=1&navpanes=0&scrollbar=1`}
                title="AUV Technical Paper"
                className="new-pdf-frame"
              />
            </div>
            <div className="new-pdf-description">
              <h3>Competition Paper</h3>
              <p>
                Our comprehensive technical paper details the design methodology, 
                system architecture, and performance analysis of our autonomous underwater vehicle. 
                This document showcases our engineering approach and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}