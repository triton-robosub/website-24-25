import { Link } from "react-router-dom";
const ErrorElement = () => {
    return (
        <>
            <div>
                <h1>404 Page Not Found Sadly</h1>
                <Link to={"/"}> Go back home you lost sheep</Link>
            </div>
        </>
    );
};

export default ErrorElement;
