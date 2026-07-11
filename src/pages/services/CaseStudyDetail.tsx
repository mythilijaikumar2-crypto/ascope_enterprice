import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import { mockCaseStudies } from '@/mocks/case-studies';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import SEOHead from '@/app/SEOHead';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find case study
  const study = useMemo(() => {
    return mockCaseStudies.find((cs) => cs.slug === slug);
  }, [slug]);

  if (!study) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-neutral-800">Case Study Not Found</h2>
        <p className="text-xs text-text-muted">The requested case study path does not exist.</p>
        <Link to="/portfolio" className="text-xs font-bold text-primary">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={`${study.title} Details`} description={study.summary} />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-4xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          {/* Header */}
          <div className="space-y-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-50 text-primary border border-primary/20 uppercase tracking-wider">
              {study.category} Case Study
            </span>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight">
              {study.title}
            </h1>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Client: <strong className="text-neutral-800">{study.clientName}</strong>
            </p>
          </div>

          {/* Metrics Spotlight Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 bg-linear-to-br from-primary-950 via-primary-900 to-neutral-950 text-white rounded-3xl shadow-premium-xl text-center">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1 my-auto">
                <span className="font-display font-extrabold text-3xl sm:text-4xl block tracking-tight text-white leading-none">
                  {metric.value}
                </span>
                <span className="text-[10px] text-primary-200 uppercase tracking-wider block font-bold">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Details splits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-4">
            
            {/* Challenge and Solution */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-neutral-900 tracking-tight flex items-center gap-2">
                      <Zap className="h-4.5 w-4.5 text-warning" />
                      The Challenge
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-neutral-100 pt-6">
                    <h3 className="text-base font-bold text-neutral-900 tracking-tight flex items-center gap-2">
                      <CheckCircle2 className="h-4.5 w-4.5 text-success" />
                      Our Implementation
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar outcomes */}
            <div className="space-y-6">
              <Card variant="premium">
                <CardHeader>
                  <CardTitle className="text-sm">Partnership Scope</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs text-text-muted leading-relaxed">
                    This project was delivered under our Tier 2 Dedicated Scrum Pod engagement model within 90 days of sales scope approval.
                  </p>
                  <Link to="/contact-sales" className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2 px-4 rounded-xl shadow-premium-sm transition-all text-center">
                    Consult with Sales
                  </Link>
                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default CaseStudyDetailPage;
