import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sponsors from "./pages/sponsors.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./components/about.jsx";
import { Navbar } from "./components/navbar.jsx";
// import Overview from "./pages/overview.jsx";
import Software from "./pages/software.jsx";
import Blog from "./pages/blog.jsx";
import Gallery from "./components/gallery.jsx";
import Contact from "./pages/contact.jsx";
import Team from "./pages/team/team.jsx";
import NewAuv from "./pages/newAuv.jsx";
import Electrical from "./pages/electrical.jsx";
import Mechanical from "./pages/mechanical.jsx";
import Footer from "./components/footer.jsx";
// import ContactStudent from "./components/contactStudent.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/website-24-25">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/auv" element={<NewAuv />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/software" element={<Software />} />
        <Route path="/mechanical" element={<Mechanical />} />
        {/* <Route path="/overview" element={<Overview />} /> */}
        {/* <Route path="/contactStudent" element={<ContactStudent />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
