import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '@/components/ui';

export interface RegisterInputs {
  name: string;
  email: string;
  passwordConfirm: string;
  skillsOutline: string;
}

export interface CandidateRegisterFormProps {
  onRegisterSuccess: (data: RegisterInputs) => void;
}

export const CandidateRegisterForm: React.FC<CandidateRegisterFormProps> = ({
  onRegisterSuccess
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterInputs>({
    defaultValues: { name: '', email: '', passwordConfirm: '', skillsOutline: '' }
  });

  return (
    <form onSubmit={handleSubmit(onRegisterSuccess)} className="space-y-4 pt-2">
      
      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="reg-name" className="text-xs font-bold text-neutral-700">Full Name *</label>
        <Input
          id="reg-name"
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
        <label htmlFor="reg-email" className="text-xs font-bold text-neutral-700">Email Address *</label>
        <Input
          id="reg-email"
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

      {/* Skills */}
      <div className="space-y-1.5">
        <label htmlFor="reg-skills" className="text-xs font-bold text-neutral-700">Primary Skills (Comma separated) *</label>
        <Input
          id="reg-skills"
          placeholder="e.g. React 19, TypeScript, Docker, Kubernetes"
          hasError={!!errors.skillsOutline}
          {...register('skillsOutline', { required: 'Skills tags are required' })}
        />
        {errors.skillsOutline && (
          <p className="text-[10px] text-error font-medium">{errors.skillsOutline.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label htmlFor="reg-password" className="text-xs font-bold text-neutral-700">Secure Access Password *</label>
        <Input
          id="reg-password"
          type="password"
          placeholder="••••••••"
          hasError={!!errors.passwordConfirm}
          {...register('passwordConfirm', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          })}
        />
        {errors.passwordConfirm && (
          <p className="text-[10px] text-error font-medium">{errors.passwordConfirm.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full mt-4" isLoading={isSubmitting}>
        Create Candidate Profile & Login
      </Button>
    </form>
  );
};
export default CandidateRegisterForm;
