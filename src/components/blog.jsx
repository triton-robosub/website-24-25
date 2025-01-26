import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";

function Blog() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to My Blog</h1>
                <p>This is a paragraph.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
