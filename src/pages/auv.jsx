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
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Repellendus consequatur iusto soluta aperiam
                            molestiae doloribus maxime quibusdam voluptatum
                            officiis, eum sequi! Qui consectetur iste esse,
                            fugiat dignissimos illo repellendus magni.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolor tempora eius aliquid illo recusandae
                            excepturi deserunt enim laudantium, nam perferendis
                            facere doloribus quia eos rem atque maxime
                            temporibus, magnam aut.
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
                <Viewer fileUrl="https://robosub-technical-report.s3.us-east-2.amazonaws.com/2023%20Technical%20Design%20Report.pdf" />
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
        <button
            className="buttonCard mechanical"
            onClick={() => alert("Button clicked!")}
        >
            Mechanical
        </button>
    );
}

function ElectricalTeamCard() {
    return (
        <button
            className="buttonCard electrical"
            onClick={() => alert("Button clicked!")}
        >
            Electrical
        </button>
    );
}

export default Auv;
