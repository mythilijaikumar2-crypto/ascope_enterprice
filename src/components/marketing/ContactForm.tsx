import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Textarea, Select, Button, useToast } from '@/components/ui';

interface ContactInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: 'general',
      message: '',
    },
  });

  const onSubmit = async (data: ContactInputs) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Inquiry submitted:', data);
    
    toast({
      title: "Inquiry Sent",
      description: `Thank you, ${data.name}. We've received your request and will respond shortly.`,
      variant: "success",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="text-xs font-bold text-neutral-700">
          Your Name *
        </label>
        <Input
          id="contact-name"
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
        <label htmlFor="contact-email" className="text-xs font-bold text-neutral-700">
          Email Address *
        </label>
        <Input
          id="contact-email"
          type="email"
          placeholder="e.g. john.watson@bakerstreet.com"
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
          <p className="text-[10px] text-error font-medium">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="contact-subject" className="text-xs font-bold text-neutral-700">
          Topic of Inquiry
        </label>
        <Select
          id="contact-subject"
          options={[
            { value: 'general', label: 'General Inquiry' },
            { value: 'it-services', label: 'B2B Software Services' },
            { value: 'academy', label: 'Bootcamp & Courses' },
            { value: 'careers', label: 'Talent Recruitment' },
          ]}
          {...register('subject')}
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-xs font-bold text-neutral-700">
          Message *
        </label>
        <Textarea
          id="contact-message"
          placeholder="Enter details about your inquiry..."
          rows={4}
          hasError={!!errors.message}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && (
          <p className="text-[10px] text-error font-medium">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Send Inquiry Message
      </Button>
    </form>
  );
};
export default ContactForm;
