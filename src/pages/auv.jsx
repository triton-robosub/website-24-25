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
      {/* hero */}
      <section
        className="hero-container"
        style={{
          backgroundImage: `linear-gradient(var(--hero-gradient-start), var(--hero-gradient-end)), url(${teamPhoto})`
        }}
      >
        <h1>AUV</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      {/* overview */}
      <section className="overview-section">
        <div className="overview-container">
          <div className="overview-desc-container">
            <h2>Overview</h2>
            <p className="overview-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="image-wrapper slide-in">
            <img src={logo} alt="Logo" className="styled-image" />
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

      {/* technical paper */}
      <section className="report-section">
        <div className="report-container">
          <div className="pdf-container">
            <iframe
              src={`${paperPdf}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Technical Paper"
              allowFullScreen
            />
          </div>
          <div className="pdf-description slide-in">
            <h2>Technical Paper</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}