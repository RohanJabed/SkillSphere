import { getCourseDetails } from '@/lib/Data';
import Link from 'next/link';

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const courses = await getCourseDetails();
    const course = courses.find(c => c.id === Number(id));

    if (!course) return <div className="text-center py-20">Course not found.</div>;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <Link href="/course" className="text-primary text-sm hover:underline mb-6 inline-block">← Back to Courses</Link>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />

                <div className="p-6 space-y-4">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{course.category}</span>
                    <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>👤</span>
                        <span>{course.instructor}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>

                    <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
                        <div className="text-center">
                            <p className="text-xs text-gray-400">Level</p>
                            <p className="font-semibold text-sm">{course.level}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-gray-400">Duration</p>
                            <p className="font-semibold text-sm">{course.duration}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-gray-400">Rating</p>
                            <p className="font-semibold text-sm text-yellow-500">★ {course.rating}</p>
                        </div>
                    </div>

                    <button className="btn btn-primary w-full text-white rounded-full mt-2">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
