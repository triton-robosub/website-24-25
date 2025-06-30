import React from 'react';
import { Link } from 'react-router-dom';
import './newAuv.css';
import vehicleImage from '../assets/vehicle.png';
import pdfFile from '../assets/fakeRobosubDoc.pdf';

const NewAuv = () => {
    return (
        <div className="new-auv-page">
            {/* Hero Section */}
            <section className="new-auv-hero">
                <div className="new-auv-hero-content">
                    <h1 className="new-auv-hero-title">Autonomous Underwater Vehicle</h1>
                    <p className="new-auv-hero-subtitle">
                        Pushing the boundaries of underwater robotics through innovation and engineering excellence
                    </p>
                    <div className="new-auv-hero-stats">
                        <div className="new-auv-stat">
                            <span className="new-auv-stat-number">2025</span>
                            <span className="new-auv-stat-label">Competition Year</span>
                        </div>
                        <div className="new-auv-stat">
                            <span className="new-auv-stat-number">3</span>
                            <span className="new-auv-stat-label">Subteams</span>
                        </div>
                        <div className="new-auv-stat">
                            <span className="new-auv-stat-number">40+</span>
                            <span className="new-auv-stat-label">Team Members</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="new-auv-about">
                <div className="new-auv-container">
                    <div className="new-auv-about-grid">
                        <div className="new-auv-about-text">
                            <h2>Our Mission</h2>
                            <p>
                                Triton Robosub designs and builds autonomous underwater vehicles (AUVs) to compete 
                                in the international RoboSub competition. Our vehicle must navigate underwater 
                                obstacles, identify objects, and complete complex missions without human intervention.
                            </p>
                            <p>
                                Through this challenge, our team develops cutting-edge technologies in computer vision, 
                                autonomous navigation, and underwater robotics while fostering innovation and 
                                technical excellence among students.
                            </p>
                            <div className="new-auv-features">
                                <div className="new-auv-feature">
                                    <h4>Autonomous Navigation</h4>
                                    <p>Advanced algorithms for underwater pathfinding and obstacle avoidance</p>
                                </div>
                                <div className="new-auv-feature">
                                    <h4>Computer Vision</h4>
                                    <p>Real-time object detection and classification in challenging underwater environments</p>
                                </div>
                                <div className="new-auv-feature">
                                    <h4>Robust Design</h4>
                                    <p>Waterproof electronics and mechanical systems built for competition reliability</p>
                                </div>
                            </div>
                        </div>
                        <div className="new-auv-about-image">
                            <img src={vehicleImage} alt="Triton Robosub AUV" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Competition Section */}
            <section className="new-auv-competition">
                <div className="new-auv-container">
                    <h2>RoboSub Competition</h2>
                    <div className="new-auv-competition-grid">
                        <div className="new-auv-competition-card">
                            <h3>Competition Format</h3>
                            <p>
                                The RoboSub competition challenges teams to design AUVs that can complete 
                                underwater tasks autonomously. Vehicles must navigate through gates, 
                                identify objects, and manipulate targets in a pool environment.
                            </p>
                        </div>
                        <div className="new-auv-competition-card">
                            <h3>Mission Tasks</h3>
                            <ul>
                                <li>Gate traversal</li>
                                <li>Object identification</li>
                                <li>Path following</li>
                                <li>Target manipulation</li>
                                <li>Surface recovery</li>
                            </ul>
                        </div>
                        <div className="new-auv-competition-card">
                            <h3>Technical Challenges</h3>
                            <p>
                                Teams must overcome underwater communication limitations, sensor noise, 
                                buoyancy control, and real-time decision making to succeed in this 
                                demanding competition environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teams Section */}
            <section className="new-auv-teams">
                <div className="new-auv-container">
                    <h2>Meet Our Subteams</h2>
                    <p className="new-auv-teams-subtitle">
                        Explore the specialized teams that make our AUV possible through their expertise in different engineering disciplines.
                    </p>
                    <div className="new-auv-teams-grid">
                        <Link to="/electrical" className="new-auv-team-button">
                            <div className="new-auv-team-icon">⚡</div>
                            <h3>Electrical</h3>
                            <p>Power systems, sensors, and electronic control circuits</p>
                        </Link>
                        <Link to="/mechanical" className="new-auv-team-button">
                            <div className="new-auv-team-icon">⚙️</div>
                            <h3>Mechanical</h3>
                            <p>Vehicle design, propulsion, and structural engineering</p>
                        </Link>
                        <Link to="/software" className="new-auv-team-button">
                            <div className="new-auv-team-icon">💻</div>
                            <h3>Software</h3>
                            <p>Autonomous navigation, computer vision, and AI algorithms</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technical Documentation Section */}
            <section className="new-auv-documentation">
                <div className="new-auv-container">
                    <h2>Technical Documentation</h2>
                    <div className="new-auv-doc-grid">
                        <div className="new-auv-doc-text">
                            <h3>Technical Design Report</h3>
                            <p>
                                Our technical design report details the engineering decisions, 
                                system architecture, and innovative solutions that power our AUV. This document 
                                showcases our team's technical expertise and design methodology.
                            </p>
                            <div className="new-auv-doc-highlights">
                                <div className="new-auv-highlight">
                                    <strong>System Integration:</strong> Complete hardware and software architecture
                                </div>
                                <div className="new-auv-highlight">
                                    <strong>Algorithm Design:</strong> Computer vision and autonomous navigation systems
                                </div>
                                <div className="new-auv-highlight">
                                    <strong>Performance Analysis:</strong> Testing results and optimization strategies
                                </div>
                            </div>
                        </div>
                        <div className="new-auv-doc-viewer">
                            <div className="new-auv-pdf-container">
                                <div className="new-auv-pdf-header">
                                    <h4>Technical Design Report 2025</h4>
                                    <a 
                                        href={pdfFile} 
                                        download="UCSD_TritonRobosub_TechnicalDesignReport.pdf"
                                        className="new-auv-pdf-download"
                                    >
                                        Download
                                    </a>
                                </div>
                                <div className="new-auv-pdf-viewer">
                                    <object 
                                        data={`${pdfFile}#toolbar=1&navpanes=0&scrollbar=1&zoom=page-fit&view=FitH`} 
                                        type="application/pdf"
                                        className="new-auv-pdf-embed"
                                    >
                                        <div className="new-auv-pdf-fallback">
                                            <p>Unable to display PDF file.</p>
                                            <a 
                                                href={pdfFile} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Click here to view PDF
                                            </a>
                                        </div>
                                    </object>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewAuv; 