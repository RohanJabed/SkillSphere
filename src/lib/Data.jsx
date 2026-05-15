import fs from 'fs';
import path from 'path';

const readJson = (filename) => {
    const filePath = path.join(process.cwd(), 'public', filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

export const getPopularCourses = async () => readJson('courses.json');

export const getPopularTeachers = async () => readJson('instructors.json');

export const getCategories = async () => {
    const courses = readJson('cetagory.json');
    return [...new Set(courses.map(c => c.category))].map((name, i) => ({ id: i + 1, category: name }));
};

export const getCoursesByCategory = async (category) => {
    const courses = readJson('cetagory.json');
    return courses.filter(c => c.category === category);
};

export const getTrendingCourses = async () => readJson('trendingCourse.json');

export const getCourseDetails = async () => readJson('cetagory.json');
