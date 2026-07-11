import React from 'react';
import { mockMasterSkills } from '@/mocks/admin-data';
import { SkillMasterTable } from '@/components/admin/SkillMasterTable';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const SkillsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Configure Master System Skills" description="Add, remove, and manage standard system skill indices." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-3xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/admin/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Admin Console
          </Link>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              Canonical Skills Master Data
            </h1>
            <p className="text-xs text-text-muted">Maintain standard tags matched by automated screening engines.</p>
          </div>

          {/* Skill Master Component */}
          <SkillMasterTable initialSkills={mockMasterSkills} />

        </div>
      </div>
    </>
  );
};
export default SkillsPage;
