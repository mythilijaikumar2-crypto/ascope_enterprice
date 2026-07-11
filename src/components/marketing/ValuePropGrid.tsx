import React from 'react';
import { Cpu, GraduationCap, Users2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ValuePropGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* 1. IT Services */}
      <div className="p-8 rounded-2xl bg-white border border-border/80 shadow-premium-sm hover:shadow-premium-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
        <div className="space-y-4">
          <div className="p-3 bg-primary-50 text-primary w-fit rounded-2xl shadow-premium-sm">
            <Cpu className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-display font-bold text-neutral-900 tracking-tight">
              Bespoke IT Services
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We design, build, and deploy premium custom software, cloud infrastructures, and AI/ML system integrations to scale your enterprise business.
            </p>
          </div>
        </div>
        <div className="pt-6 border-t border-neutral-100/50 mt-6 flex items-center justify-between">
          <Link to="/services" className="text-xs font-semibold text-primary flex items-center gap-1 hover:text-primary-hover transition-colors">
            Explore Services
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. Professional Education */}
      <div className="p-8 rounded-2xl bg-white border border-border/80 shadow-premium-sm hover:shadow-premium-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
        <div className="space-y-4">
          <div className="p-3 bg-info-50 text-info w-fit rounded-2xl shadow-premium-sm">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-display font-bold text-neutral-900 tracking-tight">
              Professional Academy
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Industry-aligned tech bootcamps in software development, cloud technologies, and AI. Led by senior engineers with guaranteed career placement programs.
            </p>
          </div>
        </div>
        <div className="pt-6 border-t border-neutral-100/50 mt-6 flex items-center justify-between">
          <Link to="/education/courses" className="text-xs font-semibold text-info flex items-center gap-1 hover:text-info-hover transition-colors">
            Browse Academy
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 3. Recruitment matching */}
      <div className="p-8 rounded-2xl bg-white border border-border/80 shadow-premium-sm hover:shadow-premium-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
        <div className="space-y-4">
          <div className="p-3 bg-success-50 text-success w-fit rounded-2xl shadow-premium-sm">
            <Users2 className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-display font-bold text-neutral-900 tracking-tight">
              Recruitment Matching
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Skip traditional hiring cycles. Our talent matching portal maps verified academy alumni and active candidates to open roles instantly.
            </p>
          </div>
        </div>
        <div className="pt-6 border-t border-neutral-100/50 mt-6 flex items-center justify-between">
          <Link to="/careers/jobs" className="text-xs font-semibold text-success flex items-center gap-1 hover:text-success-hover transition-colors">
            Search Careers
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ValuePropGrid;
