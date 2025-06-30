// src/components/Auv.jsx
import React, { useEffect } from 'react';
import electricalIcon from '../assets/electrical_logo.png';
import mechanicalIcon from '../assets/mechanical_logo.png';
import softwareIcon   from '../assets/software_logo.png';
import teamPhoto      from '../assets/image.png';
import logo           from '../assets/logo.png';
import paperPdf       from '../assets/fakeRobosubDoc.pdf';
import '../pages/auv.css';

export default function Auv() {
  useEffect(() => {
    // Auto-lock to AUV hero section when component mounts
    const heroSection = document.querySelector('.hero-container');
    if (heroSection) {
      // Scroll to the hero section immediately
      heroSection.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting && !target.classList.contains('visible')) {
          requestAnimationFrame(() => {
            target.classList.add('visible');
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="auv-container">
      {/* technical paper */}
      <section className="report-section">
        <div className="report-container">
          <div className="pdf-description slide-in">
            <h2>Technical Paper</h2>
            <p>
              Our comprehensive technical documentation details the design, construction, and testing of our autonomous underwater vehicle. This paper covers our engineering approach, technical specifications, and performance analysis from the latest competition.
            </p>
          </div>
          <div className="pdf-container">
            <iframe
              src={`${paperPdf}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Technical Paper"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* cards */}
      <section className="card-section">
        <div className="card-container">
          <a href="/website-24-25/electrical" className="buttonCard electrical">
            <span className="label">Electrical</span>
            <img src={electricalIcon} alt="Electrical icon" className="icon" />
          </a>
          <a href="/website-24-25/mechanical" className="buttonCard mechanical">
            <span className="label">Mechanical</span>
            <img src={mechanicalIcon} alt="Mechanical icon" className="icon" />
          </a>
          <a href="/website-24-25/software" className="buttonCard software">
            <span className="label">Software</span>
            <img src={softwareIcon} alt="Software icon" className="icon" />
          </a>
        </div>
      </section>

      {/* overview */}
      <section className="overview-section">
        <div className="overview-container">
          <div className="overview-desc-container">
            <h2>Overview</h2>
            <p className="overview-description">
              Our Autonomous Underwater Vehicle (AUV) represents the culmination of interdisciplinary engineering, combining mechanical design, electrical systems, and advanced software algorithms. Built for the annual RoboSub competition, our vehicle demonstrates cutting-edge autonomous navigation, object manipulation, and underwater exploration capabilities.
            </p>
          </div>
          <div className="image-wrapper slide-in">
            <img src={logo} alt="Logo" className="styled-image" />
          </div>
        </div>
      </section>

      {/* hero */}
      <section
        className="hero-container"
        style={{
          backgroundImage: `linear-gradient(var(--hero-gradient-start), var(--hero-gradient-end)), url(${teamPhoto})`
        }}
      >
        <h1>AUV</h1>
        <p className="hero-description">
          Our autonomous underwater vehicle competing in the annual RoboSub competition.
        </p>
      </section>
    </div>
  );
}