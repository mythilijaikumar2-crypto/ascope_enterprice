import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Layout, Sparkles, Database, ShieldAlert, Cpu, BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Skeleton, SkeletonCard, SkeletonText } from '@/components/ui/skeleton';
import SEOHead from '@/app/SEOHead';

interface ModulePreview {
  moduleName: string;
  phase: string;
  objectives: string[];
  mockupDescription: string;
  icon: React.ReactNode;
}

export const FutureModulePlaceholder: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine which module handles this path
  const getModuleInfo = (pathname: string): ModulePreview => {
    if (pathname.startsWith('/education')) {
      return {
        moduleName: "Module 4 — Education Academy",
        phase: "Phase 4 (Academy Catalog & Course Details)",
        icon: <Layout className="h-8 w-8 text-info" />,
        mockupDescription: "Planned course bootcamps list with category filter panels, curriculums accordions, and trainer rosters.",
        objectives: [
          "Dynamic client-side category and keyword search filters.",
          "Curriculum timelines and direct enroll inquiries.",
          "Trainers profile grids and verified certificate registries."
        ]
      };
    }
    if (pathname.startsWith('/services') || pathname.startsWith('/solutions') || pathname.startsWith('/technologies') || pathname.startsWith('/portfolio') || pathname.startsWith('/case-studies') || pathname.startsWith('/contact-sales')) {
      return {
        moduleName: "Module 5 — IT Services Consulting",
        phase: "Phase 5 (B2B Services Showcase)",
        icon: <Cpu className="h-8 w-8 text-amber-500" />,
        mockupDescription: "Planned custom software services list, technology grid, filterable portfolio case studies, and multi-step sales qualifiers.",
        objectives: [
          "Case studies layouts featuring quantified customer success ratios.",
          "Categorized capability cards (Cloud, Custom Soft, DevOps).",
          "Interactive contact forms collecting company size, budget, and scope."
        ]
      };
    }
    if (pathname.startsWith('/careers') || pathname.startsWith('/register')) {
      return {
        moduleName: "Module 6 — Careers Hub",
        phase: "Phase 6 (Recruitment Search & Reg Gateway)",
        icon: <Layout className="h-8 w-8 text-success" />,
        mockupDescription: "Planned jobs search filters, requirements disclosures, internship details, and candidate registrations forms.",
        objectives: [
          "Real-time location, experience, and department filter sidebars.",
          "Debounced search entries matching active listings.",
          "Registrations routing directly to authenticated candidate dashboard portal."
        ]
      };
    }
    if (pathname.startsWith('/portal')) {
      return {
        moduleName: "Module 7 — Candidate Portal Workspace",
        phase: "Phase 7 (Candidate Workspace & Resumes)",
        icon: <Database className="h-8 w-8 text-primary" />,
        mockupDescription: "Planned applicant workspace with profiles fields, upload drag-zones, and stepper trackers.",
        objectives: [
          "Recalculating completeness meter bars updating on save.",
          "Timeline visualizers representing candidate experience.",
          "Progress trackers matching applied state updates."
        ]
      };
    }
    if (pathname.startsWith('/hr') || pathname.startsWith('/recruiter')) {
      return {
        moduleName: "Module 8 — HR & Recruiter Space",
        phase: "Phase 8 (Recruitment Management)",
        icon: <Sparkles className="h-8 w-8 text-purple-500" />,
        mockupDescription: "Planned staffing dashboards detailing pipelines, applications review boards, resume previews, and calendar slots.",
        objectives: [
          "Candidate application evaluation cards listing screening scores.",
          "Conflict-check calendar slots preventing schedule overlaps.",
          "Funnel reports showing conversion analytics."
        ]
      };
    }
    if (pathname.startsWith('/admin')) {
      return {
        moduleName: "Module 9 — Admin Operations Panel",
        phase: "Phase 9 (Control & Governance)",
        icon: <CompassIcon className="h-8 w-8 text-neutral-700" />,
        mockupDescription: "Planned administrative controls including matrix role permissions, nesting department trees, and master catalogs.",
        objectives: [
          "User status changes and batch action triggers.",
          "Expand/collapse department tree hierarchies.",
          "Canonical skill dictionary configurations."
        ]
      };
    }
    if (pathname.startsWith('/hr/ai') || pathname.includes('/ai/')) {
      return {
        moduleName: "Module 10 — AI Assistant Matcher",
        phase: "Phase 10 (AI Decisioning Previews)",
        icon: <BrainIcon className="h-8 w-8 text-rose-500" />,
        mockupDescription: "Planned mock match scores radial meters, candidate rankings tables, and skill analysis spider charts.",
        objectives: [
          "Resume match percentage overlays detailing sub-indices.",
          "Ranking lists comparing applicant match scores.",
          "AI recommendation cards prompting action suggestions."
        ]
      };
    }
    if (pathname.startsWith('/analytics')) {
      return {
        moduleName: "Module 11 — Enterprise Analytics Dashboards",
        phase: "Phase 11 (Analytics Insight Overviews)",
        icon: <BarChart3 className="h-8 w-8 text-rose-500" />,
        mockupDescription: "Planned company performance dashboards with date filter selectors, line enrollment trends, and hiring funnels.",
        objectives: [
          "Key Performance Indicator (KPI) metrics showing trend directions.",
          "Visual charts mapping academy courses popularity.",
          "PDF/CSV mock export action triggers."
        ]
      };
    }

    return {
      moduleName: "Upcoming Feature Space",
      phase: "General Roadmap Space",
      icon: <Layout className="h-8 w-8 text-neutral-500" />,
      mockupDescription: "Planned platform view designed to implement key portal systems.",
      objectives: ["User action handlers.", "Aesthetic card configurations.", "Design token style integrations."]
    };
  };

  const info = getModuleInfo(path);

  return (
    <>
      <SEOHead title="Roadmap Preview" description="Live high-fidelity mockup wireframe detailing upcoming feature modules." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header Link */}
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Platform Explorer
          </Link>

          {/* Module Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border/80 shadow-premium-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neutral-50 border border-neutral-100 rounded-2xl shadow-inner-soft">
                {info.icon}
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-50 text-primary border border-primary/10">
                  {info.phase}
                </div>
                <h1 className="text-xl sm:text-2xl font-display font-extrabold text-neutral-900 tracking-tight">
                  {info.moduleName}
                </h1>
              </div>
            </div>
            <div className="text-[10px] font-bold text-neutral-400 bg-neutral-50 border border-border px-3 py-1.5 rounded-lg shrink-0">
              Mockup Preview Route: {path}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Wireframe Mockup Cards */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-neutral-800">
                    <Layout className="h-4.5 w-4.5 text-primary" />
                    High-Fidelity Wireframe Mockup
                  </CardTitle>
                  <CardDescription>
                    {info.mockupDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Mock Skeletons simulating the planned screen */}
                  <div className="flex gap-4 items-center">
                    <Skeleton className="h-10 w-10 rounded-xl" />
                    <div className="space-y-1.5 flex-1">
                      <Skeleton className="h-4 w-1/4 rounded" />
                      <Skeleton className="h-3 w-1/3 rounded" />
                    </div>
                  </div>
                  <SkeletonText lines={3} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SkeletonCard />
                    <SkeletonCard />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Information panel */}
            <div className="space-y-6">
              <Card variant="premium">
                <CardHeader>
                  <CardTitle>Module Deliverables</CardTitle>
                  <CardDescription>Technical objectives scheduled for this implementation block.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3.5 text-xs text-neutral-700 leading-relaxed font-medium">
                    {info.objectives.map((obj, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-primary-100/60 border border-primary/20 text-primary font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Status Alert */}
              <div className="p-4 border border-warning/20 bg-warning-50/10 rounded-2xl flex gap-3 text-xs leading-relaxed">
                <ShieldAlert className="h-5 w-5 text-warning shrink-0" />
                <div>
                  <h4 className="font-bold text-neutral-800 mb-0.5">Under Construction</h4>
                  <p className="text-text-muted">
                    This path handles features mapped to future deliverables. The routes are active to test full end-to-end user navigation flows immediately.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

// Helpers
const CompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const BrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 6v12" />
    <path d="M8 10c0-2.21 1.79-4 4-4s4 1.79 4 4" />
    <path d="M12 14c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4" />
  </svg>
);

export default FutureModulePlaceholder;
