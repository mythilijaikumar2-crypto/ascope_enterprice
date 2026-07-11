import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Clock } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { CourseModule } from '@/mocks/courses';
import { cn } from '@/lib/utils';

export interface CourseCurriculumAccordionProps {
  syllabus: CourseModule[];
}

export const CourseCurriculumAccordion: React.FC<CourseCurriculumAccordionProps> = ({ syllabus }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {syllabus.length === 0 ? (
        <div className="p-6 border border-dashed border-border rounded-2xl bg-surface/30 text-center text-xs text-text-light">
          Syllabus is being configured. Check back soon!
        </div>
      ) : (
        syllabus.map((module, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border border-border rounded-xl bg-white overflow-hidden shadow-premium-sm">
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-between p-4 text-left select-none outline-none focus-visible:bg-neutral-50/50"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-50 text-primary rounded-lg shrink-0">
                    <BookOpen className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-800 tracking-tight leading-snug">
                      {module.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-neutral-400">
                    <Clock className="h-3.5 w-3.5" />
                    {module.duration}
                  </span>
                  <ChevronDown className={cn("h-4 w-4 text-neutral-400 transition-transform duration-200", isOpen && "rotate-180")} />
                </div>
              </button>

              {/* Accordion Content Outlet */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0.05 : 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-14 pb-4 pt-1 border-t border-neutral-100/50">
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lIdx) => (
                          <li key={lIdx} className="text-xs text-text-muted list-disc marker:text-primary leading-relaxed">
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })
      )}
    </div>
  );
};
export default CourseCurriculumAccordion;
