import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Star } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/mocks/testimonials';

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Setup autoplay timer
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  const activeTestimonial = testimonials[currentIndex];
  if (!activeTestimonial) return null;

  return (
    <div
      className="relative max-w-3xl mx-auto bg-white border border-border p-8 sm:p-12 rounded-3xl shadow-premium-md overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onFocus={() => setIsPlaying(false)}
      onBlur={() => setIsPlaying(true)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Customer Reviews Slider"
    >
      <div className="absolute top-4 right-6 flex items-center gap-2">
        {/* Play/Pause Control */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 rounded-lg border border-border text-neutral-400 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={isPlaying ? "Pause autoplay reviews" : "Play autoplay reviews"}
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
        </button>
      </div>

      <div className="min-h-[220px] flex flex-col justify-between space-y-6">
        {/* Quote & Stars */}
        <div className="space-y-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={cn(
                  "h-4 w-4 shrink-0",
                  idx < activeTestimonial.rating
                    ? "text-warning fill-warning"
                    : "text-neutral-200"
                )}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -5 }}
              transition={{ duration: prefersReducedMotion ? 0.05 : 0.2 }}
              className="text-sm sm:text-base font-display font-medium text-neutral-800 leading-relaxed italic"
            >
              &ldquo;{activeTestimonial.quote}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* User Card */}
        <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-xs text-primary font-display">
              {activeTestimonial.avatar}
            </div>
            <div>
              <h4 className="text-xs font-bold text-neutral-900 leading-none">
                {activeTestimonial.name}
              </h4>
              <p className="text-[10px] text-text-muted mt-1 leading-none">
                {activeTestimonial.role}, <span className="font-semibold">{activeTestimonial.company}</span>
              </p>
            </div>
          </div>

          {/* Slider Nav Buttons */}
          <div className="flex gap-1.5">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl border border-border text-neutral-600 hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl border border-border text-neutral-600 hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCarousel;
