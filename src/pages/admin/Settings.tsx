import React, { useState } from 'react';
import { defaultCompanySettings, type CompanySettings } from '@/mocks/admin-data';
import { CompanySettingsForm } from '@/components/admin/CompanySettingsForm';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<CompanySettings>(defaultCompanySettings);

  const handleSave = (updated: CompanySettings) => {
    setSettings(updated);
  };

  return (
    <>
      <SEOHead title="Configure Company Settings" description="Edit support email support lines and file retention timelines." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-3xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/admin/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Admin Console
          </Link>

          {/* Form wrapper */}
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Adjust support email paths and document retention timelines.</CardDescription>
            </CardHeader>
            <CardContent>
              <CompanySettingsForm settings={settings} onSave={handleSave} />
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
};
export default SettingsPage;
