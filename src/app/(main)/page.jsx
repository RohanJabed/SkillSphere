import Hero from '@/components/Homepage/Hero';
import PopularCourses from '@/components/Homepage/PopularCourses';
import PopularTeacher from '@/components/Homepage/PopularTeacher';
import TrendingCourses from '@/components/Homepage/TrendingCourses';

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularCourses />
      <PopularTeacher />
      <TrendingCourses />
    </div>
  );
}
