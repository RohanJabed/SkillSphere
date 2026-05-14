import Image from "next/image";
import Link from "next/link";

const TopCourse = ({ course }) => {
    return (
        <div className="card bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-2xl overflow-hidden">
            {/* Thumbnail */}
            <div className="relative bg-gray-900 h-44 flex items-center justify-center">
                <Image
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-80"
                    width={400}
                    height={240}
                />
                <span className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full ${course.badgeColor}`}>
                    {course.badge}
                </span>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
                <h2 className="font-semibold text-gray-900 text-sm leading-snug">{course.title}</h2>

                {/* Instructor + Rating */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs">👤</div>
                        {course.instructor}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400 font-bold">★ {course.rating}</span>
                        <span className="text-gray-400">({course.reviews})</span>
                    </div>
                </div>

                {/* Level + Hours */}
                <div className="flex justify-between text-xs text-gray-400 border-t border-gray-100 pt-2">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                </div>
                <Link href={`/course`}>
                    <button className="btn btn-outline btn-sm w-full rounded-full">View Details</button>

                </Link>
               
            </div>
        </div>
    );
};

export default TopCourse;
