const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <div className="animate__animated animate__pulse animate__infinite">
                <div className="bg-primary text-white rounded-md w-16 h-16 flex items-center justify-center text-3xl font-bold">S</div>
            </div>
            <p className="text-gray-400 text-sm animate__animated animate__fadeIn">Loading, please wait...</p>
        </div>
    );
};

export default Loading;
