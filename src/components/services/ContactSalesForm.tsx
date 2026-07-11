import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Input, Textarea, Select, Button, useToast } from '@/components/ui';
import { ChevronRight, ChevronLeft, Send, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SalesInputs {
  name: string;
  email: string;
  companyName: string;
  companySize: string;
  budget: string;
  description: string;
  timeline: string;
}

export const ContactSalesForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const prefersReducedMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<SalesInputs>({
    defaultValues: {
      name: '',
      email: '',
      companyName: '',
      companySize: '1-10',
      budget: '10k-50k',
      description: '',
      timeline: 'immediate'
    }
  });

  const nextStep = async () => {
    let fieldsToValidate: ('name' | 'email' | 'companyName' | 'description')[] = [];
    if (step === 1) {
      fieldsToValidate = ['name', 'email', 'companyName'];
    }
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const onSubmit = async (data: SalesInputs) => {
    const isValid = await trigger(['description']);
    if (!isValid) return;

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('B2B Sales Qualifier Submitted:', data);

    toast({
      title: "Project Scope Submitted",
      description: `Thank you, ${data.name}. An enterprise sales manager will reach out within 4 business hours.`,
      variant: "success"
    });
    reset();
    setStep(1);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 15 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: prefersReducedMotion ? 0 : -15 }
  };

  return (
    <div className="space-y-6">
      {/* Step Indicators Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center gap-2">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-xs border transition-all relative",
                  step === num
                    ? "bg-primary border-primary text-white shadow-premium-sm"
                    : step > num
                    ? "bg-success border-success text-white"
                    : "border-border text-neutral-400 bg-white"
                )}
              >
                {step > num ? (
                  <motion.div
                    initial={prefersReducedMotion ? {} : { scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    <Check className="h-4.5 w-4.5" />
                  </motion.div>
                ) : (
                  num
                )}
                {step === num && !prefersReducedMotion && (
                  <motion.div
                    layoutId="activeStepCircle"
                    className="absolute inset-[-3px] rounded-full border border-primary/40 -z-10"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block",
                  step === num ? "text-neutral-800" : "text-neutral-400"
                )}
              >
                {num === 1 ? "Contacts" : num === 2 ? "Scale & Budget" : "Requirements"}
              </span>
            </div>
          ))}
        </div>
        <span className="text-[10px] font-bold text-neutral-400">Step {step} of 3</span>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="space-y-4"
            >
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="sales-name" className="text-xs font-bold text-neutral-700">Your Full Name *</label>
                <Input
                  id="sales-name"
                  placeholder="e.g. John Watson"
                  hasError={!!errors.name}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="text-[10px] text-error font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="sales-email" className="text-xs font-bold text-neutral-700">Corporate Email Address *</label>
                <Input
                  id="sales-email"
                  type="email"
                  placeholder="e.g. john@helius.com"
                  hasError={!!errors.email}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-[10px] text-error font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="space-y-1.5">
                <label htmlFor="sales-company" className="text-xs font-bold text-neutral-700">Company Name *</label>
                <Input
                  id="sales-company"
                  placeholder="e.g. Helius Technologies"
                  hasError={!!errors.companyName}
                  {...register('companyName', { required: 'Company name is required' })}
                />
                {errors.companyName && (
                  <p className="text-[10px] text-error font-medium">{errors.companyName.message}</p>
                )}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="space-y-4"
            >
              {/* Company Size */}
              <div className="space-y-1.5">
                <label htmlFor="sales-size" className="text-xs font-bold text-neutral-700">Company Operations Size</label>
                <Select id="sales-size" {...register('companySize')}>
                  <option value="1-10">1-10 Employees (Startup)</option>
                  <option value="11-50">11-50 Employees (Growth)</option>
                  <option value="51-200">51-200 Employees (Scaleup)</option>
                  <option value="200+">200+ Employees (Enterprise)</option>
                </Select>
              </div>

              {/* Project Budget */}
              <div className="space-y-1.5">
                <label htmlFor="sales-budget" className="text-xs font-bold text-neutral-700">Estimated Project Budget</label>
                <Select id="sales-budget" {...register('budget')}>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-150k">$50,000 - $150,000</option>
                  <option value="150k+">$150,000+ (Enterprise Scope)</option>
                </Select>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="space-y-4"
            >
              {/* Project Timeline */}
              <div className="space-y-1.5">
                <label htmlFor="sales-timeline" className="text-xs font-bold text-neutral-700">Estimated Project Start Timeline</label>
                <Select id="sales-timeline" {...register('timeline')}>
                  <option value="immediate">Immediate (Within 30 days)</option>
                  <option value="quarterly">Quarterly (Within 90 days)</option>
                  <option value="flexible">Flexible / Exploratory</option>
                </Select>
              </div>

              {/* Project Requirements description */}
              <div className="space-y-1.5">
                <label htmlFor="sales-desc" className="text-xs font-bold text-neutral-700">Briefly Outline Project Scope *</label>
                <Textarea
                  id="sales-desc"
                  placeholder="Mention target stack requirements, scaling targets, or AI capabilities needed..."
                  rows={5}
                  hasError={!!errors.description}
                  {...register('description', { required: 'Project description is required' })}
                />
                {errors.description && (
                  <p className="text-[10px] text-error font-medium">{errors.description.message}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons Action Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100/50 mt-6">
          {step > 1 ? (
            <Button type="button" variant="outline" size="sm" onClick={prevStep} className="flex items-center gap-1.5">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <Button type="button" size="sm" onClick={nextStep} className="flex items-center gap-1.5">
              Next Step
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" size="sm" isLoading={isSubmitting} className="flex items-center gap-1.5 bg-success hover:bg-success-hover">
              Submit Scope
              <Send className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactSalesForm;
