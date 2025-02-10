import "../output.css";
import "../input.css";
import "./auv.css";
import picture from "../assets/logotransparent.png";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Auv() {
    return (
        <div>
            {/* Hero section */}
            <section>
                <div className="hero-container">
                    <div className="hero-desc-container">
                        <h1 className="section-head">AUV</h1>
                        <p className="hero-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Repellendus consequatur iusto soluta aperiam
                            molestiae doloribus maxime quibusdam voluptatum
                            officiis, eum sequi! Qui consectetur iste esse,
                            fugiat dignissimos illo repellendus magni.
                        </p>
                    </div>

                    <AUVImage />
                </div>
            </section>

            {/* Overview section */}
            <section>
                <div>
                    <h2 className="section-head">Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor tempora eius aliquid illo recusandae excepturi
                        deserunt enim laudantium, nam perferendis facere
                        doloribus quia eos rem atque maxime temporibus, magnam
                        aut.
                    </p>
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
            <section>
                <div>
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
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="../assets/TDR_TritonRobosub_RS2023.pdf" />;
            </Worker>
        </div>
    );
}

function SoftwareTeamCard() {
    return (
        <button
            className="buttonCard software"
            onClick={() => alert("Button clicked!")}
        >
            Software
        </button>
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
