const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const getPopularCourses = async () => {
    const res = await fetch(`${BASE_URL}/courses.json`);
    const courses = await res.json();
    return courses;
}
export const getPopularTeachers = async () => {
    const res = await fetch(`${BASE_URL}/instructors.json`);
    const teachers = await res.json();
    return teachers;
}
export const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/cetagory.json`);
    const courses = await res.json();
    const unique = [...new Set(courses.map(c => c.category))].map((name, i) => ({ id: i + 1, category: name }));
    return unique;
}
export const getCoursesByCategory = async (category) => {
    const res = await fetch(`${BASE_URL}/cetagory.json`);
    const courses = await res.json();
    return courses.filter(c => c.category === category);
}
export const getTrendingCourses = async () => {
    const res = await fetch(`${BASE_URL}/trendingCourse.json`);
    const courses = await res.json();
    return courses;
}

export const getCourseDetails = async () => {
    const res = await fetch(`${BASE_URL}/cetagory.json`);
    const courseDetails = await res.json();
    return courseDetails;
}