import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Textarea, Button, useToast } from '@/components/ui';
import type { CandidateProfile } from '@/mocks/candidate-profile';

export interface ProfileFormProps {
  profile: CandidateProfile;
  onSave: (updated: CandidateProfile) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ profile, onSave }) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CandidateProfile>({
    defaultValues: profile
  });

  const onSubmit = async (data: CandidateProfile) => {
    // Simulate save request
    await new Promise((resolve) => setTimeout(resolve, 800));
    onSave(data);
    toast({
      title: "Profile Saved",
      description: "Your contact preferences and bio details have been updated.",
      variant: "success"
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="prof-name" className="text-xs font-bold text-neutral-700">Full Name *</label>
          <Input
            id="prof-name"
            placeholder="e.g. Sarah Connor"
            hasError={!!errors.name}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="text-[10px] text-error font-medium">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="prof-email" className="text-xs font-bold text-neutral-700">Email Address *</label>
          <Input
            id="prof-email"
            type="email"
            placeholder="e.g. sarah@cyberdyne.com"
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

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="prof-phone" className="text-xs font-bold text-neutral-700">Phone Number *</label>
          <Input
            id="prof-phone"
            placeholder="e.g. +1 (555) 0199"
            hasError={!!errors.phone}
            {...register('phone', { required: 'Phone is required' })}
          />
          {errors.phone && (
            <p className="text-[10px] text-error font-medium">{errors.phone.message}</p>
          )}
        </div>

        {/* Job Title */}
        <div className="space-y-1.5">
          <label htmlFor="prof-title" className="text-xs font-bold text-neutral-700">Professional Title *</label>
          <Input
            id="prof-title"
            placeholder="e.g. Full-Stack Software Engineer"
            hasError={!!errors.title}
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && (
            <p className="text-[10px] text-error font-medium">{errors.title.message}</p>
          )}
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-1.5">
        <label htmlFor="prof-bio" className="text-xs font-bold text-neutral-700">Short Biography *</label>
        <Textarea
          id="prof-bio"
          placeholder="Describe your engineering focus, previous roles, or code accomplishments..."
          rows={4}
          hasError={!!errors.bio}
          {...register('bio', { required: 'Biography is required' })}
        />
        {errors.bio && (
          <p className="text-[10px] text-error font-medium">{errors.bio.message}</p>
        )}
      </div>

      <div className="pt-2 border-t border-neutral-100 flex justify-end">
        <Button type="submit" isLoading={isSubmitting}>
          Save Contact Profile
        </Button>
      </div>
    </form>
  );
};
export default ProfileForm;
