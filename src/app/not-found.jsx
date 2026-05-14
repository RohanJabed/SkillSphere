import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-6 animate__animated animate__fadeIn">
            <h1 className="text-9xl font-bold text-primary animate__animated animate__bounceIn">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900">Page Not Found</h2>
            <p className="text-gray-400 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
            <Link href="/" className="btn btn-primary text-white rounded-full mt-2">Back to Home</Link>
        </div>
    );
};

export default NotFound;
