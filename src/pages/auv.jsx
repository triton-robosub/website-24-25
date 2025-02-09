import "../output.css";
import "../input.css";

function Auv() {
    return (
        <div>
            {/* Hero section */}
            <section>
                <div>
                    <h1>AUV</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Repellendus consequatur iusto soluta aperiam
                        molestiae doloribus maxime quibusdam voluptatum
                        officiis, eum sequi! Qui consectetur iste esse, fugiat
                        dignissimos illo repellendus magni.
                    </p>
                </div>
            </section>

            {/* Overview section */}
            <section>
                <div>
                    <h2>Overview</h2>
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
                <div>
                    <p className="bg-red-300">placeholder for cards</p>
                    <SoftwareTeamCard />
                </div>
            </section>

            {/* Technical paper section */}
            <section>
                <div>
                    <h2 className="font-bold">Technical Paper</h2>
                    <p>An insight into the technicalities of our submarine</p>
                </div>
            </section>
        </div>
    );
}

function SoftwareTeamCard() {
    return (
        <button
            className="buttonCard bg-blue-500 rounded-lg"
            onClick={() => alert("Button clicked!")}
        >
            Software
        </button>
    );
}

export default Auv;
