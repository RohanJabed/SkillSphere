import React from 'react';
import { getPopularTeachers } from '@/lib/Data';
import TopTeacher from './TopTeacher';

const tips = [
    { icon: "📅", title: "Set a Study Schedule", desc: "Create a fixed time for learning every day." },
    { icon: "📝", title: "Take Short Notes", desc: "Write short notes to revise quickly." },
    { icon: "💻", title: "Practice Regularly", desc: "Practice makes perfect. Code, design, build!" },
    { icon: "🎯", title: "Stay Consistent", desc: "Consistency today, success tomorrow." },
];

const PopularTeacher = async () => {
    const teachers = await getPopularTeachers();
    return (
        <section className="bg-gray-50 py-14">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Learning Tips */}
                <div>
                    <h2 className="text-2xl font-bold mb-1">📋 Learning Tips</h2>
                    <p className="text-gray-500 text-sm mb-6">Smart ways to learn effectively</p>
                    <div className="space-y-5">
                        {tips.map((t) => (
                            <div key={t.title} className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl shrink-0">
                                    {t.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-gray-800">{t.title}</p>
                                    <p className="text-gray-400 text-xs mt-0.5">{t.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-6 text-primary text-sm font-medium hover:underline">View All Tips →</button>
                </div>

                {/* Top Instructors */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold">🏆 Top Instructors</h2>
                            <p className="text-gray-500 text-sm">Learn from the best in the industry</p>
                        </div>
                        <button className="text-primary text-sm font-medium hover:underline">View All →</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {teachers.map(teacher => (
                            <TopTeacher key={teacher.id} teacher={teacher} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PopularTeacher;
