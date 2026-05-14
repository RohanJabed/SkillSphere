import Image from 'next/image';

const TrendingCourse = ({ course }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-32 w-full bg-gray-900">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-90"
                />
            </div>
            <div className="p-3 space-y-1">
                <h3 className="font-semibold text-gray-900 text-xs leading-snug">{course.title}</h3>
                <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-gray-700 text-xs font-medium">{course.rating}</span>
                    <span className="text-gray-400 text-xs">({course.reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default TrendingCourse;
