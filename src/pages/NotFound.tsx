import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</p>
            <p className="text-gray-500 mt-2 mb-8">The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/">
                <Button size="lg">Return Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;
