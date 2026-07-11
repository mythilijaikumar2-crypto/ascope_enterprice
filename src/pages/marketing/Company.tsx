import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe, Briefcase } from 'lucide-react';
import SEOHead from '@/app/SEOHead';
import { Card } from '@/components/ui/card';

export const CompanyPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Our Company" description="Learn about Ascope Tech, our enterprise services, training academies, and recruitment match platforms." />
      <div className="py-16 space-y-16 bg-surface/30">
        
        {/* Banner Section */}
        <section className="app-container max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary">
            Platform Capabilities
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
            Integrated Technology & Talent Partner
          </h1>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
            Ascope Tech operates at the intersection of bespoke software consulting, immersive professional academies, and automated recruiter matching.
          </p>
        </section>

        {/* Pillars Detail */}
        <section className="app-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-neutral-900 tracking-tight">
              Enterprise B2B Software Engineering
            </h2>
            <p className="text-xs text-text-muted leading-relaxed">
              We design and construct modular, cloud-resilient software systems tailored for scaling companies. From architectural reviews to full product releases, our team handles all design and code complexities.
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-success shrink-0" />
                Cloud-native architecture and serverless migration.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-success shrink-0" />
                Custom enterprise software, API integrations, and dashboards.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-success shrink-0" />
                Dedicated agile development teams and consulting engineers.
              </li>
            </ul>
            <div className="pt-2">
              <Link to="/contact-sales" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover">
                Consult with sales
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card variant="outline" className="p-5 flex flex-col justify-between">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-800">Secure by Design</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Encapsulating encryption, audit trails, and strict role permissions.</p>
              </div>
            </Card>
            <Card variant="outline" className="p-5 flex flex-col justify-between">
              <Zap className="h-8 w-8 text-info mb-3" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-800">High Performance</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Leveraging caching strategies, React SSR, and edge deployments.</p>
              </div>
            </Card>
            <Card variant="outline" className="p-5 flex flex-col justify-between">
              <Globe className="h-8 w-8 text-success mb-3" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-800">Global Scaling</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Systems running across multiregional clusters with load balances.</p>
              </div>
            </Card>
            <Card variant="outline" className="p-5 flex flex-col justify-between">
              <Briefcase className="h-8 w-8 text-warning mb-3" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-neutral-800">Agile Operations</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Weekly standups, visual boards, and continuous integrations.</p>
              </div>
            </Card>
          </div>
        </section>

      </div>
    </>
  );
};
export default CompanyPage;
