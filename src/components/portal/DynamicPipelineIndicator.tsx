import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ApplicationStep } from '@/mocks/candidate-applications';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface DynamicPipelineIndicatorProps {
  currentStatus: ApplicationStep;
}

const PIPELINE_STEPS: ApplicationStep[] = ['Applied', 'Screening', 'Interviewing', 'Offered'];

export const DynamicPipelineIndicator: React.FC<DynamicPipelineIndicatorProps> = ({ currentStatus }) => {
  const isClosed = currentStatus === 'Closed';
  const prefersReducedMotion = useReducedMotion();
  
  // Calculate active indexes
  const currentStepIndex = PIPELINE_STEPS.indexOf(isClosed ? 'Applied' : currentStatus);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.05 : 0.4,
        ease: 'easeOut' as const,
      }
    }
  };

  return (
    <div className="bg-neutral-50/50 border border-neutral-100 p-6 rounded-2xl shadow-inner-soft space-y-4">
      {isClosed ? (
        <div className="flex items-center gap-3 p-4 border border-error/20 bg-error-50/10 text-error rounded-xl text-xs leading-relaxed">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <div>
            <h4 className="font-bold">Application Closed</h4>
            <p className="opacity-90">This position application is no longer active. We thank you for your interest and hope to connect on future openings.</p>
          </div>
        </div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          {PIPELINE_STEPS.map((step, idx) => {
            const isCompleted = idx < currentStepIndex;
            const isActive = idx === currentStepIndex;

            return (
              <motion.div 
                key={step} 
                variants={itemVariants}
                className="flex-1 w-full relative flex items-center gap-3"
              >
                {/* Connector Line */}
                {idx > 0 && (
                  <div className="hidden sm:block absolute left-[-50%] right-[50%] top-4 h-[2px] -z-10 bg-neutral-200">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isCompleted ? 1 : 0 }}
                      transition={{ 
                        duration: prefersReducedMotion ? 0.05 : 0.5, 
                        ease: "easeInOut",
                        delay: prefersReducedMotion ? 0 : idx * 0.12 
                      }}
                      style={{ originX: 0 }}
                      className="h-full w-full bg-success"
                    />
                  </div>
                )}

                {/* Circle Container (for active pulsing alignment) */}
                <div className="relative flex items-center justify-center shrink-0">
                  {/* Step Circle */}
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center font-display font-bold text-xs shrink-0 transition-all z-10",
                      isCompleted
                        ? "bg-success border-success text-white"
                        : isActive
                        ? "bg-primary border-primary text-white shadow-premium-sm"
                        : "bg-white border-neutral-200 text-neutral-400"
                    )}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={prefersReducedMotion ? {} : { scale: 0, rotate: -30 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Check className="h-4.5 w-4.5" />
                      </motion.div>
                    ) : (
                      idx + 1
                    )}
                  </div>

                  {/* Pulsing Glow Ring for active step */}
                  {isActive && !prefersReducedMotion && (
                    <motion.div
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.6, 0, 0.6]
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute w-12 h-12 rounded-full border border-primary/30 bg-primary/5 z-0 pointer-events-none"
                    />
                  )}
                </div>

                {/* Label */}
                <div className="space-y-0.5">
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-wider block leading-none",
                      isActive ? "text-primary" : "text-neutral-500"
                    )}
                  >
                    {step}
                  </span>
                  <span className="text-[9px] text-text-light block leading-none">
                    {step === 'Applied'
                      ? "Details Received"
                      : step === 'Screening'
                      ? "CV Evaluation"
                      : step === 'Interviewing'
                      ? "Review & Panels"
                      : "Job Offer Details"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default DynamicPipelineIndicator;
