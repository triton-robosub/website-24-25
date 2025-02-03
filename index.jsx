import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./src/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import About from "./components/About.jsx";
import Resume from "./components/resume.jsx";
import ErrorElement from "./src/components/ErrorElement.jsx";
import Projects from "./components/projects.jsx";
import Alumni from "./src/pages/alumni.jsx";
import Blog from "./src/pages/blog.jsx";
import Contact from "./src/pages/contact.jsx";
import Electrical from "./src/pages/electrical.jsx";
import Mechanical from "./src/pages/mechanical.jsx";
import MeetTheTeam from "./src/pages/meettheteam.jsx";
import Overview from "./src/pages/overview.jsx";
import Software from "./src/pages/software.jsx";
import Sponsors from "./src/pages/sponsors.jsx";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         children: [
//             { index: true, element: <App /> },
//             { path: "/projects", element: <Projects /> },
//         ],
//         errorElement: <ErrorElement></ErrorElement>,
//     },
//     {
//         path: "/about",
//         element: <About />,
//     },
//     {
//         path: "/resume",
//         element: <Resume />,
//     },
// ]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "alumni", element: <Alumni /> },
            { path: "blog", element: <Blog /> },
            { path: "contact", element: <ContactUs /> },
            { path: "electrical", element: <Electrical /> },
            { path: "mechanical", element: <Mechanical /> },
            { path: "team", element: <MeetTheTeam /> },
            { path: "overview", element: <Overview /> },
            { path: "software", element: <Software /> },
            { path: "sponsors", element: <Sponsors /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
