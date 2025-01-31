import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Blog from "./blog.jsx";
import Contact from "./contactus.jsx";
import Gallery from "./gallery.jsx";
import Index from "./index.jsx";
import Sponsors from "./sponsors.jsx";
import ErrorElement from "./ErrorElement.jsx";

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
