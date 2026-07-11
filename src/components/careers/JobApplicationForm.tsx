import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Textarea, Button } from '@/components/ui';

export interface ApplicationInputs {
  name: string;
  email: string;
  phone: string;
  resumeText: string;
}

export interface JobApplicationFormProps {
  jobTitle: string;
  onSubmitSuccess: (data: ApplicationInputs) => void;
  onCancel: () => void;
}

export const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  jobTitle,
  onSubmitSuccess,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationInputs>({
    defaultValues: { name: '', email: '', phone: '', resumeText: '' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmitSuccess)} className="space-y-4 pt-2">
      <p className="text-xs text-text-muted">
        Fill out details below to submit your application for <strong className="text-neutral-800">{jobTitle}</strong>.
      </p>

      <div className="space-y-1.5">
        <label htmlFor="app-name" className="text-[10px] font-bold text-neutral-700">Full Name *</label>
        <Input
          id="app-name"
          placeholder="e.g. John Watson"
          hasError={!!errors.name}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="text-[9px] text-error font-medium">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="app-email" className="text-[10px] font-bold text-neutral-700">Email Address *</label>
        <Input
          id="app-email"
          type="email"
          placeholder="e.g. john@bakerstreet.com"
          hasError={!!errors.email}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <p className="text-[9px] text-error font-medium">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="app-phone" className="text-[10px] font-bold text-neutral-700">Phone Number *</label>
        <Input
          id="app-phone"
          placeholder="e.g. +1 555 9876"
          hasError={!!errors.phone}
          {...register('phone', { required: 'Phone number is required' })}
        />
        {errors.phone && (
          <p className="text-[9px] text-error font-medium">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="app-resume" className="text-[10px] font-bold text-neutral-700">Resume / Cover Letter Details *</label>
        <Textarea
          id="app-resume"
          placeholder="Outline your commercial experience, previous roles, or portfolio URLs..."
          rows={4}
          hasError={!!errors.resumeText}
          {...register('resumeText', { required: 'Resume details are required' })}
        />
        {errors.resumeText && (
          <p className="text-[9px] text-error font-medium">{errors.resumeText.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-2 pt-2 border-t border-neutral-100">
        <Button type="button" variant="outline" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" size="sm" isLoading={isSubmitting}>
          Submit Application
        </Button>
      </div>
    </form>
  );
};
export default JobApplicationForm;
