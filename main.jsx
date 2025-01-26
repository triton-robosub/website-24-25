import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./src/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Blog from "./src/components/blog.jsx";
import Contact from "./contactus.jsx";
import Gallery from "./gallery.jsx";
import Index from "./index.jsx";
import Sponsors from "./src/components/sponsors.jsx";
import ErrorElement from "./src/components/ErrorElement.jsx";

{
    /* <Routing logic for page> */
}
const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, element: <App /> },
            { path: "/projects", element: <Projects /> },
        ],
        errorElement: <ErrorElement></ErrorElement>,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
