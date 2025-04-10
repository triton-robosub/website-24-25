import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sponsors from "./pages/sponsors.jsx";
import AboutUs from "./components/about.jsx";
import { Navbar } from "./components/navbar.jsx";
import Overview from "./pages/overview.jsx";
import Software from "./pages/software.jsx";
import Blog from "./pages/blog.jsx";
import Gallery from "./components/gallery.jsx";
import Alumni from "./pages/alumni.jsx";
import Contact from "./pages/contact.jsx";
import Team from "./pages/team/team.jsx";
import Auv from "./pages/auv.jsx";
import Electrical from "./pages/electrical.jsx";
import Mechanical from "./pages/mechanical.jsx";
import Footer from "./components/footer.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/auv" element={<Auv />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/software" element={<Software />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
      <main className="content-container">
        <Outlet />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
