import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockCourses } from '@/mocks/courses';
import { CourseCard } from '@/components/education/CourseCard';
import { CategoryFilterBar, type FilterState } from '@/components/education/CategoryFilterBar';
import SEOHead from '@/app/SEOHead';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button } from '@/components/ui/button';

export const CoursesPage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    categories: [],
    level: 'all',
    mode: 'all',
  });

  // Extract unique categories
  const categoriesList = useMemo(() => {
    const unique = new Map<string, string>();
    mockCourses.forEach((c) => {
      unique.set(c.categorySlug, c.categoryName);
    });
    return Array.from(unique.entries()).map(([slug, label]) => ({ label, slug }));
  }, []);

  // Handle resets
  const handleReset = () => {
    setFilters({
      search: '',
      categories: [],
      level: 'all',
      mode: 'all',
    });
  };

  // Filtered dataset
  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      // Keyword search
      const matchesSearch =
        course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.description.toLowerCase().includes(filters.search.toLowerCase());

      // Category multi-select
      const matchesCategory =
        filters.categories.length === 0 || filters.categories.includes(course.categorySlug);

      // Level selector
      const matchesLevel = filters.level === 'all' || course.level === filters.level;

      // Mode selector
      const matchesMode = filters.mode === 'all' || course.mode === filters.mode;

      return matchesSearch && matchesCategory && matchesLevel && matchesMode;
    });
  }, [filters]);

  return (
    <>
      <SEOHead title="Academy Courses" description="Explore our industry-aligned software development bootcamps and classes." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-6xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Professional Academy</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Academy Bootcamps & Courses
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Select intensive certified pathways curated by senior architects to accelerate your technical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <CategoryFilterBar
                filters={filters}
                onFiltersChange={setFilters}
                availableCategories={categoriesList}
                onReset={handleReset}
              />
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex justify-between items-center text-xs text-text-muted px-1">
                <span>
                  Showing <span className="font-semibold text-neutral-800">{filteredCourses.length}</span> courses
                </span>
              </div>

              {filteredCourses.length === 0 ? (
                <div className="p-16 border border-dashed border-border bg-white rounded-2xl text-center space-y-3">
                  <p className="text-sm font-bold text-neutral-800">No courses match those filters</p>
                  <p className="text-xs text-text-muted max-w-xs mx-auto">
                    Try adjusting your keyword query, category selections, or reset active parameters.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Reset All Filters
                  </Button>
                </div>
              ) : (
                <motion.div
                  layout={!prefersReducedMotion}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredCourses.map((course) => (
                      <motion.div
                        key={course.id}
                        layout={!prefersReducedMotion}
                        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                        transition={{ duration: prefersReducedMotion ? 0.05 : 0.25 }}
                        className="h-full"
                      >
                        <CourseCard course={course} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default CoursesPage;
