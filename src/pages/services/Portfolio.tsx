import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockCaseStudies } from '@/mocks/case-studies';
import { CaseStudyOutcomeCard } from '@/components/services/CaseStudyOutcomeCard';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SEOHead from '@/app/SEOHead';
import { cn } from '@/lib/utils';

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web' | 'Cloud' | 'AI' | 'Enterprise'>('All');
  const prefersReducedMotion = useReducedMotion();

  // Category filters lists
  const filterTags: ('All' | 'Web' | 'Cloud' | 'AI' | 'Enterprise')[] = ['All', 'Web', 'Cloud', 'AI', 'Enterprise'];

  // Filtered dataset
  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return mockCaseStudies;
    return mockCaseStudies.filter((cs) => cs.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEOHead title="Case Studies Portfolio" description="Explore client success stories, cloud migrations, and software outcomes." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Client Success</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Project Case Studies
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Explore how we have engineered systems architectures and helped partners scale operations.
            </p>
          </div>

          {/* Filter Bar tags */}
          <div className="flex border-b border-border overflow-x-auto gap-2 pb-px justify-start md:justify-center scrollbar-none">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={cn(
                  "px-4 py-2.5 text-xs font-semibold border-b-2 transition-all outline-none rounded-t-lg",
                  activeFilter === tag
                    ? "border-primary text-primary bg-primary-50/5"
                    : "border-transparent text-neutral-500 hover:text-neutral-800"
                )}
              >
                {tag} Projects
              </button>
            ))}
          </div>

          {/* Grid results */}
          {filteredStudies.length === 0 ? (
            <div className="p-16 border border-dashed border-border bg-white rounded-2xl text-center space-y-2">
              <p className="text-sm font-bold text-neutral-800">No projects under this category</p>
              <p className="text-xs text-text-muted">Check back soon as we document more client engagements.</p>
            </div>
          ) : (
            <motion.div
              layout={!prefersReducedMotion}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    layout={!prefersReducedMotion}
                    initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                    transition={{ duration: prefersReducedMotion ? 0.05 : 0.25 }}
                    className="h-full"
                  >
                    <CaseStudyOutcomeCard study={study} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </div>
    </>
  );
};
export default PortfolioPage;
