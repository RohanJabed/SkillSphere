import { getTrendingCourses } from '@/lib/Data';
import Link from 'next/link';
import TrendingCourse from './TrendingCourse';

const TrendingCourses = async () => {
    const courses = await getTrendingCourses();
    return (
        <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Keep Learning */}
            <div className="bg-primary/5 rounded-2xl p-8 flex flex-col justify-between">
                <div className="space-y-3">
                    <div className="text-4xl">🏆</div>
                    <h2 className="text-2xl font-bold text-gray-900">Keep Learning,<br />Keep Growing</h2>
                    <p className="text-gray-500 text-sm">Thousands of students are already learning and building their dream careers.</p>
                </div>
                <Link href="/register" className="btn btn-primary text-white mt-6 w-fit">Join Now</Link>
            </div>

            {/* Trending Courses */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">🚀 Trending Courses</h2>
                    <Link href="/course" className="text-primary text-sm font-medium hover:underline">View All →</Link>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {courses.map(course => (
                        <TrendingCourse key={course.id} course={course} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default TrendingCourses;
