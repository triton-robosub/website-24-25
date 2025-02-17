import "../output.css";
import "../input.css";
import "./auv.css";
import picture from "../assets/logotransparent.png";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../components/components.css";
import { Link } from "react-router-dom";

function Auv() {
    return (
        <div className="main-background2">
            {/* Hero section */}
            <section>
                <div className="hero-container">
                    <div className="hero-desc-container">
                        <h1 className="section-head oxanium-bold">AUV</h1>
                        <p className="hero-description blinker-regular">
                            Welcome to Triton Robosub! Our Autonomous Underwater
                            Vehicle (AUV), “Nu”, is the culmination of teamwork,
                            creativity, and innovation by undergraduate students
                            at UC San Diego. Designed for the 2023 Robosub
                            competition, Nu showcases our passion for underwater
                            robotics and engineering excellence. With its sleek
                            design and advanced capabilities, Nu is built to
                            navigate underwater challenges with precision and
                            reliability. It represents not just a technical
                            achievement but also the dedication and
                            collaboration of a team striving to push the
                            boundaries of what student-led projects can
                            accomplish.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview section */}
            <section>
                <div className="overview-container">
                    <div className="overview-desc-container">
                        <h2 className="section-head">Overview</h2>
                        <p className="overview-description">
                            “Nu” is an advanced Autonomous Underwater Vehicle
                            (AUV) developed by undergraduate students at UC San
                            Diego for the 2023 Robosub competition. It features
                            a custom-designed HDPE frame with six degrees of
                            freedom, enabling precise maneuverability. The AUV
                            integrates modular electrical systems, including a
                            Jetson Xavier NX for mission planning and advanced
                            sensors like Doppler Velocity Log (DVL) and
                            exploreHD cameras for underwater navigation and
                            imaging. With robust mechanical, electrical, and
                            software systems, “Nu” represents a fully realized
                            platform designed for efficient and reliable
                            underwater exploration.
                        </p>
                    </div>
                    <AUVImage />
                </div>
            </section>
            {/* Cards section */}
            <section>
                <div className="card-container">
                    <SoftwareTeamCard />
                    <MechanicalTeamCard />
                    <ElectricalTeamCard />
                </div>
            </section>

            {/* Technical paper section */}
            <section className="report-container">
                <div className="pdf-description">
                    <h2 className="section-head">Technical Paper</h2>
                    <p>An insight into the technicalities of our submarine</p>
                </div>
                <TechnicalReport />
            </section>
        </div>
    );
}

function AUVImage() {
    return (
        <div>
            <img src={picture} className="picture" alt="Logo" />
        </div>
    );
}

function TechnicalReport() {
    return (
        <div className="pdf-container">
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js">
                <Viewer fileUrl="https://robosub-technical-report.s3.us-east-2.amazonaws.com/TDR_TritonRobosub_RS2023+2.pdf" />
            </Worker>
        </div>
    );
}

function SoftwareTeamCard() {
    return (
        <Link to="/software">
            <button className="buttonCard software">Software</button>
        </Link>
    );
}

function MechanicalTeamCard() {
    return (
        <Link to="/mechanical">
            <button className="buttonCard mechanical">Mechanical</button>
        </Link>
    );
}

function ElectricalTeamCard() {
    return (
        <Link to="/electrical">
            <button className="buttonCard electrical">Electrical</button>
        </Link>
    );
}

export default Auv;
