

import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-y-4 text-center">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-base-content/60">The page you are looking for doesn t exist or has been moved.</p>
            <Link href="/" className="btn btn-primary mt-2">Back to Home</Link>
        </div>
    );
};

export default NotFound;