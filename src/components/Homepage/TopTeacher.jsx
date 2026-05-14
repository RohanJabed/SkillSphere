'use client';
import Image from 'next/image';

const TopTeacher = ({ teacher }) => {
    if (!teacher) return null;
    return (
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20 mb-4">
                <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">{teacher.name}</h3>
            <p className="text-gray-400 text-xs mt-1">{teacher.expertise}</p>
            <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-gray-700 text-xs font-medium">{teacher.rating}</span>
            </div>
            <p className="text-gray-400 text-xs mt-1">{teacher.students?.toLocaleString()} students</p>
        </div>
    );
};

export default TopTeacher;
