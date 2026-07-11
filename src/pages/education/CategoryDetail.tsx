import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockCourses } from '@/mocks/courses';
import { CourseCard } from '@/components/education/CourseCard';
import SEOHead from '@/app/SEOHead';

export const CategoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Filter courses by category slug
  const { categoryName, courses } = useMemo(() => {
    const matched = mockCourses.filter((c) => c.categorySlug === slug);
    const catName = matched[0]?.categoryName || 'Category';
    return { categoryName: catName, courses: matched };
  }, [slug]);

  // If no courses matches category, redirect to courses catalog
  if (courses.length === 0) {
    return <Navigate to="/education/courses" replace />;
  }

  return (
    <>
      <SEOHead title={`${categoryName} Courses`} description={`Explore our courses catalog under the ${categoryName} category.`} />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/education/courses" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Catalog
          </Link>

          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-50 text-primary border border-primary/10 uppercase tracking-wider">
              Academy Category Catalog
            </div>
            <h1 className="text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
              {categoryName} Bootcamps
            </h1>
            <p className="text-xs text-text-muted">
              Explore specialized courses focusing on {categoryName.toLowerCase()} principles, setups, and systems.
            </p>
          </div>

          {/* Grid listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
export default CategoryDetailPage;
