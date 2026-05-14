import Link from 'next/link';
import LeftSideBar from '@/components/catagorySection/LeftSideBar';
import { getCourseDetails, getCategories } from '@/lib/Data';

const CoursePage = async ({ searchParams }) => {
    const courses = await getCourseDetails();
    const categories = await getCategories();
    const search = (await searchParams)?.search?.toLowerCase() || '';
    const filtered = search ? courses.filter(c => c.title.toLowerCase().includes(search)) : courses;

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 flex gap-6">
            <div className="w-56 shrink-0">
                <LeftSideBar categories={categories} />
            </div>
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-1">{search ? `Results for "${search}"` : 'All Courses'}</h1>
                <p className="text-gray-500 text-sm mb-6">{filtered.length} courses available</p>
                <div className="grid grid-cols-3 gap-4">
                    {filtered.map(course => (
                        <div key={course.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
                            <img src={course.image} alt={course.title} className="w-full h-44 object-cover shrink-0" />
                            <div className="p-4 flex flex-col gap-2 flex-1">
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full w-fit">{course.category}</span>
                                <h2 className="font-semibold text-sm leading-snug">{course.title}</h2>
                                <p className="text-gray-400 text-xs">{course.instructor}</p>
                                <div className="flex justify-between text-xs text-gray-400 border-t border-gray-100 pt-2 mt-auto">
                                    <span>{course.level}</span>
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs">
                                    <span className="text-yellow-400">★</span>
                                    <span className="font-medium text-gray-700">{course.rating}</span>
                                </div>
                                <Link href={`/course/${course.id}`} className="btn btn-outline btn-sm w-full rounded-full">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
