import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockJobs } from '@/mocks/jobs';
import { JobCard } from '@/components/careers/JobCard';
import { JobFilterSidebar, type JobFilters } from '@/components/careers/JobFilterSidebar';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SEOHead from '@/app/SEOHead';
import { Button } from '@/components/ui';

export const JobsPage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    departments: [],
    experienceLevel: 'all',
    mode: 'all',
  });

  // Extract unique departments list
  const departmentsList = useMemo(() => {
    const depts = new Set<string>();
    mockJobs.forEach((job) => depts.add(job.department));
    return Array.from(depts);
  }, []);

  const handleReset = () => {
    setFilters({
      search: '',
      departments: [],
      experienceLevel: 'all',
      mode: 'all',
    });
  };

  // Filtered dataset
  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      // Keyword search
      const matchesSearch =
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());

      // Department checklist
      const matchesDept =
        filters.departments.length === 0 || filters.departments.includes(job.department);

      // Experience Level
      const matchesExp = filters.experienceLevel === 'all' || job.experienceLevel === filters.experienceLevel;

      // Mode
      const matchesMode = filters.mode === 'all' || job.mode === filters.mode;

      return matchesSearch && matchesDept && matchesExp && matchesMode;
    });
  }, [filters]);

  return (
    <>
      <SEOHead title="Careers Open Positions" description="Explore open engineering, product, and design roles at Ascope Tech." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-6xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Join Ascope Tech</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Open Career Opportunities
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Work alongside senior software consulting leads to scale enterprise platforms or build custom AI networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <JobFilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                availableDepartments={departmentsList}
                onReset={handleReset}
              />
            </div>

            {/* Jobs list grid */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex justify-between items-center text-xs text-text-muted px-1">
                <span>
                  Showing <span className="font-semibold text-neutral-800">{filteredJobs.length}</span> positions
                </span>
              </div>

              {filteredJobs.length === 0 ? (
                <div className="p-16 border border-dashed border-border bg-white rounded-2xl text-center space-y-3">
                  <p className="text-sm font-bold text-neutral-800">No positions match those filters</p>
                  <p className="text-xs text-text-muted max-w-xs mx-auto">
                    Try adjusting your keyword query, department checkbox selections, or reset active parameters.
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
                    {filteredJobs.map((job) => (
                      <motion.div
                        key={job.id}
                        layout={!prefersReducedMotion}
                        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                        transition={{ duration: prefersReducedMotion ? 0.05 : 0.25 }}
                        className="h-full"
                      >
                        <JobCard job={job} />
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
export default JobsPage;
