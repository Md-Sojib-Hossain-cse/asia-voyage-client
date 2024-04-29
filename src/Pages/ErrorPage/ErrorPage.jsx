import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../groovyWalk.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="h-1/2 w-1/2">
                <Lottie animationData={groovyWalkAnimation} loop={true} className="h-full"/>
            </div>
            <h3 className="text-4xl font-medium">Error 404</h3>
            <p className="text-2xl">Page Not Found !</p>
            <Link className="btn mt-3" to="/">Go to Homepage</Link>
        </div>
    );
};

export default ErrorPage;