import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, Switch, useToast } from '@/components/ui';
import type { CompanySettings } from '@/mocks/admin-data';

export interface CompanySettingsFormProps {
  settings: CompanySettings;
  onSave: (updated: CompanySettings) => void;
}

export const CompanySettingsForm: React.FC<CompanySettingsFormProps> = ({ settings, onSave }) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<CompanySettings>({
    defaultValues: settings
  });

  const aiActive = watch('aiScreenerActive');

  const onSubmit = async (data: CompanySettings) => {
    // Simulate optimistic UI save update
    onSave(data);
    toast({
      title: "Settings Saved Optimistically",
      description: "Company parameters have been synced and applied app-wide.",
      variant: "success"
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Company Name */}
        <div className="space-y-1.5">
          <label htmlFor="set-company" className="text-xs font-bold text-neutral-700">Company Brand Name *</label>
          <Input
            id="set-company"
            placeholder="e.g. Ascope Tech"
            hasError={!!errors.companyName}
            {...register('companyName', { required: 'Company name is required' })}
          />
          {errors.companyName && (
            <p className="text-[10px] text-error font-medium">{errors.companyName.message}</p>
          )}
        </div>

        {/* Support Email */}
        <div className="space-y-1.5">
          <label htmlFor="set-email" className="text-xs font-bold text-neutral-700">Corporate Support Email *</label>
          <Input
            id="set-email"
            type="email"
            placeholder="e.g. support@ascope.tech"
            hasError={!!errors.supportEmail}
            {...register('supportEmail', {
              required: 'Support email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.supportEmail && (
            <p className="text-[10px] text-error font-medium">{errors.supportEmail.message}</p>
          )}
        </div>

        {/* Domain Url */}
        <div className="space-y-1.5">
          <label htmlFor="set-domain" className="text-xs font-bold text-neutral-700">System Domain URL *</label>
          <Input
            id="set-domain"
            placeholder="e.g. https://ascope.tech"
            hasError={!!errors.domainUrl}
            {...register('domainUrl', { required: 'Domain URL is required' })}
          />
          {errors.domainUrl && (
            <p className="text-[10px] text-error font-medium">{errors.domainUrl.message}</p>
          )}
        </div>

        {/* Retention Days */}
        <div className="space-y-1.5">
          <label htmlFor="set-retention" className="text-xs font-bold text-neutral-700">CV Data Retention Period (Days) *</label>
          <Input
            id="set-retention"
            type="number"
            placeholder="e.g. 90"
            hasError={!!errors.retentionDays}
            {...register('retentionDays', { required: 'Retention limit is required' })}
          />
          {errors.retentionDays && (
            <p className="text-[10px] text-error font-medium">{errors.retentionDays.message}</p>
          )}
        </div>
      </div>

      {/* AI Screener Switch */}
      <div className="p-4 bg-neutral-50/50 border border-neutral-100 rounded-xl flex items-center justify-between gap-4 mt-2">
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-neutral-800 block">AI Screening Match Indexing</span>
          <p className="text-[10px] text-text-light">Auto-assess incoming candidate CV vectors against active job specifications.</p>
        </div>
        <Switch
          checked={aiActive}
          onCheckedChange={(checked) => setValue('aiScreenerActive', checked)}
          className="h-5 w-9 shrink-0"
          aria-label="Toggle AI screening match indexing"
        />
      </div>

      <div className="pt-2 border-t border-neutral-100 flex justify-end">
        <Button type="submit" isLoading={isSubmitting}>
          Save Settings Configuration
        </Button>
      </div>
    </form>
  );
};
export default CompanySettingsForm;
