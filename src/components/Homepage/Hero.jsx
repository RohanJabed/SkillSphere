import Link from "next/link";
import Image from "next/image";
import CoderAvatar from "@/assets/Coder_Avater.png";

const Hero = () => {
    return (
        <section className="bg-white min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 w-full">

                {/* Left Content */}
                <div className="flex-1 space-y-6 animate__animated animate__fadeInLeft">
                    <span className="text-sm text-gray-400 flex items-center gap-2">🎓 Learn. Grow. Achieve.</span>
                    <h1 className="text-5xl font-bold leading-tight text-gray-900">
                        Upgrade Your Skills <br />
                        <span className="text-primary">Today 🚀</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-md">
                        Learn from industry experts and build in-demand skills for your future.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Link href="/course" className="btn btn-primary text-white px-6">Explore Courses</Link>
                        <button className="btn btn-ghost gap-2 text-gray-700">
                            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-primary">▶</span>
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center relative animate__animated animate__fadeInRight">
                    {/* Floating icons */}
                    <div className="absolute top-4 left-8 bg-white shadow-md rounded-xl p-2 text-2xl animate__animated animate__pulse animate__infinite">💻</div>
                    <div className="absolute top-4 right-8 bg-white shadow-md rounded-xl p-2 text-2xl animate__animated animate__pulse animate__infinite animate__delay-1s">📊</div>
                    <div className="absolute bottom-8 left-4 bg-white shadow-md rounded-xl p-2 text-2xl animate__animated animate__pulse animate__infinite animate__delay-2s">🏆</div>

                    <div className="w-72 h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full flex items-center justify-center">
                        <Image
                            src={CoderAvatar}
                            className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                            alt="Student learning"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
