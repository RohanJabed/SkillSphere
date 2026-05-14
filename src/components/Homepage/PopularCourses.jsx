
import Link from "next/link";
import TopCourse from "./TopCourse";
import { getPopularCourses } from "@/lib/Data";

const PopularCourses = async () => {
    const courses = await getPopularCourses();

    return (
        <section className="max-w-6xl mx-auto px-6 py-14">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">🔥 Popular Courses</h2>
                    <p className="text-gray-500 text-sm">Top rated courses by our learners</p>
                </div>
                <Link href="/course" className="text-primary text-sm font-medium hover:underline">View All Courses →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <TopCourse key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
};

export default PopularCourses;
