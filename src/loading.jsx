import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-sm text-base-content/50 animate-pulse">Loading, please wait...</p>
        </div>
    );
};

export default LoadingPage;