import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  GraduationCap,
  Briefcase,
  Cpu,
  UserCheck,
  Building,
  BrainCircuit,
  ExternalLink,
  X,
  Check,
  Sparkles
} from 'lucide-react';
import { Hero } from '@/components/marketing/Hero';
import { ValuePropGrid } from '@/components/marketing/ValuePropGrid';
import { StatsCounter } from '@/components/marketing/StatsCounter';
import { TestimonialCarousel } from '@/components/marketing/TestimonialCarousel';
import { CTASection } from '@/components/marketing/CTASection';
import { mockCompanyStats } from '@/mocks/company-stats';
import { mockTestimonials } from '@/mocks/testimonials';
import { cn } from '@/lib/utils';

interface RouteItem {
  label: string;
  path: string;
  module: string;
  desc: string;
  features?: string[];
}

interface SitemapCategory {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  routes: RouteItem[];
}

export const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('public');
  const [selectedRoute, setSelectedRoute] = useState<(RouteItem & { categoryKey: string }) | null>(null);

  // Route groupings by category/persona
  const sitemapCategories: Record<string, SitemapCategory> = {
    public: {
      title: "Public Visitors",
      icon: <Globe className="h-4 w-4" />,
      colorClass: "border-primary text-primary bg-primary-50/5",
      routes: [
        { 
          label: "Home Page", 
          path: "/", 
          module: "Module 1 & 3", 
          desc: "Hero, testimonials, and platform explorer",
          features: ["Typewriter animation", "3D mouse parallax", "Dynamic layout capsule", "Local video backdrop"]
        },
        { 
          label: "About Us", 
          path: "/about", 
          module: "Module 3", 
          desc: "Origin philosophy and core values",
          features: ["Core team mission", "Corporate value list", "Brand timeline display"]
        },
        { 
          label: "Our Company", 
          path: "/company", 
          module: "Module 3", 
          desc: "Capability grid and business overview",
          features: ["Capability cards", "Partner logo grid", "Consultancy metrics overview"]
        },
        { 
          label: "Vision & Mission", 
          path: "/vision-mission", 
          module: "Module 3", 
          desc: "Corporate ethics and future outlook",
          features: ["Corporate ethic cards", "Timeline objectives", "Social responsibility log"]
        },
        { 
          label: "Leadership Team", 
          path: "/leadership", 
          module: "Module 3", 
          desc: "Executive biographies",
          features: ["Executive grid profiles", "LinkedIn contact triggers", "Bio content slide-ins"]
        },
        { 
          label: "Contact Us", 
          path: "/contact", 
          module: "Module 3", 
          desc: "General support request forms",
          features: ["Reactive validation fields", "General inquiry hooks", "Interactive map widget"]
        },
        { 
          label: "Design System Showcase", 
          path: "/design-system", 
          module: "Module 2", 
          desc: "Button, table, form, modal showcases",
          features: ["CSS custom property tokens", "UI component library testing", "Modal drawer sandbox"]
        },
      ]
    },
    education: {
      title: "Academy & Courses",
      icon: <GraduationCap className="h-4 w-4" />,
      colorClass: "border-info text-info bg-info-50/5",
      routes: [
        { 
          label: "Academy Courses Catalog", 
          path: "/education/courses", 
          module: "Module 4", 
          desc: "Bootcamp listings and levels",
          features: ["Course grid categories", "Level search filters", "Quick apply buttons"]
        },
        { 
          label: "Course Category Detail", 
          path: "/education/categories/web-development", 
          module: "Module 4", 
          desc: "Specific category landing page",
          features: ["Category statistics indicator", "Target careers list", "Prerequisites dashboard"]
        },
        { 
          label: "Course Specific Detail", 
          path: "/education/courses/react-19-bootcamp", 
          module: "Module 4", 
          desc: "Curriculums and enroll inquiries",
          features: ["Syllabus accordion expander", "Pricing cards", "Seat countdown alert"]
        },
        { 
          label: "Academy Trainers", 
          path: "/education/trainers", 
          module: "Module 4", 
          desc: "Instructor profiles",
          features: ["Trainer card profiles", "Subject categories", "Student score metrics"]
        },
        { 
          label: "Placement Statistics", 
          path: "/education/placement", 
          module: "Module 4", 
          desc: "Hiring ratios and salary scales",
          features: ["Average package calculator", "Partner recruiter logos", "Graduation success tracker"]
        },
        { 
          label: "Student Success Stories", 
          path: "/education/student-success", 
          module: "Module 4", 
          desc: "Alumni interviews",
          features: ["Video interview triggers", "Salary jump comparisons", "Portfolio case logs"]
        },
        { 
          label: "Certifications", 
          path: "/education/certifications", 
          module: "Module 4", 
          desc: "Verify course certificates",
          features: ["Certificate code lookup", "PDF print/share hooks", "Encryption tag signatures"]
        }
      ]
    },
    careers: {
      title: "Careers & Candidates",
      icon: <Briefcase className="h-4 w-4" />,
      colorClass: "border-success text-success bg-success-50/5",
      routes: [
        { 
          label: "Jobs Search Board", 
          path: "/careers/jobs", 
          module: "Module 6", 
          desc: "Explore open job positions",
          features: ["Text search filters", "Category tags selections", "Salary slider scale"]
        },
        { 
          label: "Job Specific Detail", 
          path: "/careers/jobs/senior-frontend-engineer", 
          module: "Module 6", 
          desc: "Requirements and application CTA",
          features: ["Apply slide-over panel", "Job description list", "Salary/equity breakdown"]
        },
        { 
          label: "Internship Programs", 
          path: "/careers/internships", 
          module: "Module 6", 
          desc: "Student internships",
          features: ["College partnership badges", "Internship tracks catalog", "Quick apply form"]
        },
        { 
          label: "Campus Hiring", 
          path: "/careers/campus-hiring", 
          module: "Module 6", 
          desc: "Fresh graduate placements",
          features: ["College scheduler calendar", "Hiring drive timelines", "Student registration portal"]
        },
        { 
          label: "Candidate Register", 
          path: "/careers/register", 
          module: "Module 6", 
          desc: "Account sign-up gate to portal",
          features: ["Candidate metadata form", "Email code check", "Profile setup wizard"]
        },
        { 
          label: "Portal Dashboard", 
          path: "/portal/dashboard", 
          module: "Module 7", 
          desc: "Application counts and completion meter",
          features: ["Job apply statistics counter", "Resume completeness progress bar", "Notifications panel"]
        },
        { 
          label: "Candidate Profile Form", 
          path: "/portal/profile", 
          module: "Module 7", 
          desc: "Core demographic and contacts",
          features: ["Reactive form bindings", "Contact tags details", "Profile photo upload mock"]
        },
        { 
          label: "Resume Upload", 
          path: "/portal/resume", 
          module: "Module 7", 
          desc: "Drag-drop resume manager",
          features: ["Drag and drop dropzone", "File validation scripts", "Parsed resume profile mock"]
        },
        { 
          label: "Skills Tag Editor", 
          path: "/portal/skills", 
          module: "Module 7", 
          desc: "Self-assessed skills tags",
          features: ["Dynamic search tags adder", "Level star ratings", "Skills radar graph preview"]
        },
        { 
          label: "Portal Applications", 
          path: "/portal/applications", 
          module: "Module 7", 
          desc: "Active stepper pipeline progress tracker",
          features: ["Animated step indicators", "Framer motion path drawing", "Status banner colors"]
        }
      ]
    },
    it_services: {
      title: "IT Services",
      icon: <Cpu className="h-4 w-4" />,
      colorClass: "border-amber-500 text-amber-500 bg-amber-500-50/5",
      routes: [
        { 
          label: "IT Services Overview", 
          path: "/services", 
          module: "Module 5", 
          desc: "Capabilities list for enterprise clients",
          features: ["Service outline blocks", "Consultation timelines", "System security list"]
        },
        { 
          label: "Solutions Details", 
          path: "/solutions", 
          module: "Module 5", 
          desc: "Cloud migrations, systems and security",
          features: ["Cloud stack checklist", "DevOps delivery map", "Enterprise scaling metrics"]
        },
        { 
          label: "Technology Stack Matrix", 
          path: "/technologies", 
          module: "Module 5", 
          desc: "Grouped tech capabilities",
          features: ["Hover grid stack", "Database capability list", "Infrastructure framework icons"]
        },
        { 
          label: "Portfolio Grid", 
          path: "/portfolio", 
          module: "Module 5", 
          desc: "Filtered case studies grid",
          features: ["Industry category tags", "Case summary cards", "Outcomes highlight badges"]
        },
        { 
          label: "Case Study Detail", 
          path: "/case-studies/eliteapexkart", 
          module: "Module 5", 
          desc: "Problem-solution-quantified outcomes",
          features: ["Problem-solution columns", "Metric stats counters", "Systems architecture blueprint"]
        },
        { 
          label: "Sales Qualified Form", 
          path: "/contact-sales", 
          module: "Module 5", 
          desc: "B2B multi-step sales request",
          features: ["AnimatePresence slide steps", "Step border layout anims", "Budget range slider"]
        }
      ]
    },
    hr_recruiter: {
      title: "HR & Recruitment Spaces",
      icon: <UserCheck className="h-4 w-4" />,
      colorClass: "border-purple-500 text-purple-500 bg-purple-500-50/5",
      routes: [
        { 
          label: "HR Admin Dashboard", 
          path: "/hr/dashboard", 
          module: "Module 8", 
          desc: "HR pipeline cards and graphs",
          features: ["Active vacancy gauges", "Overall offer count chart", "Alert activities feed"]
        },
        { 
          label: "Recruiter Dashboard", 
          path: "/recruiter/dashboard", 
          module: "Module 8", 
          desc: "Active candidate interview funnels",
          features: ["Candidate interview grid", "Screening load slider", "Upcoming interviews logs"]
        },
        { 
          label: "Job Postings Management", 
          path: "/hr/jobs", 
          module: "Module 8", 
          desc: "Inline toggles and postings list",
          features: ["Job status state toggles", "Post new vacancy forms", "Total application tallies"]
        },
        { 
          label: "Candidates Tracker Table", 
          path: "/hr/candidates", 
          module: "Module 8", 
          desc: "DataTable candidate applications list",
          features: ["Candidate search bar", "Filter by department", "Status color badges"]
        },
        { 
          label: "Candidate Detail Profile", 
          path: "/hr/candidates/cand-1", 
          module: "Module 8", 
          desc: "Recruiter-side resume previewer",
          features: ["Candidate resume layout", "Recruiter screening score", "Interview scheduler button"]
        },
        { 
          label: "Interview Scheduler", 
          path: "/hr/interviews", 
          module: "Module 8", 
          desc: "Slots conflict-check calendar",
          features: ["Weekly calendar grid", "Candidate drag slots", "Conflict check indicator"]
        },
      ]
    },
    admin_portal: {
      title: "Admin Controls",
      icon: <Building className="h-4 w-4" />,
      colorClass: "border-neutral-700 text-neutral-700 bg-neutral-50/5",
      routes: [
        { 
          label: "Admin Core Dashboard", 
          path: "/admin/dashboard", 
          module: "Module 9", 
          desc: "Platform usage and log metrics",
          features: ["Active user gauges", "Platform error telemetry log", "Database latency checks"]
        },
        { 
          label: "User Management Table", 
          path: "/admin/users", 
          module: "Module 9", 
          desc: "Bulk status actions and roles",
          features: ["Multi-select bulk statuses", "Role picker dropdowns", "Active/Banned indicators"]
        },
        { 
          label: "User Roles Matrix", 
          path: "/admin/roles", 
          module: "Module 9", 
          desc: "Grid-based permissions manager",
          features: ["Permission toggle grids", "Custom role creator", "Inheritance config map"]
        },
        { 
          label: "Departments Hierarchy", 
          path: "/admin/departments", 
          module: "Module 9", 
          desc: "Nested tree layout organizer",
          features: ["Organisational tree visualizer", "Drag drop node structures", "Manager tags setter"]
        },
        { 
          label: "Master Skills Catalog", 
          path: "/admin/skills", 
          module: "Module 9", 
          desc: "Canonical skills list editor",
          features: ["Skills tag management", "Parent category assignments", "Popularity meters"]
        },
        { 
          label: "Company Global Settings", 
          path: "/admin/settings", 
          module: "Module 9", 
          desc: "Metadata options and configs",
          features: ["Platform logo toggles", "Auth provider switches", "B2B contact details"]
        },
        { 
          label: "System Telemetry Reports", 
          path: "/admin/reports", 
          module: "Module 9", 
          desc: "Server KPI area charts",
          features: ["Daily latency charts", "Bandwidth area indicators", "Log exporter scripts"]
        }
      ]
    },
    ai_analytics: {
      title: "AI & Analytics Insights",
      icon: <BrainCircuit className="h-4 w-4" />,
      colorClass: "border-rose-500 text-rose-500 bg-rose-500-50/5",
      routes: [
        { 
          label: "Resume AI Match Detail", 
          path: "/hr/ai/resume-match/1", 
          module: "Module 10", 
          desc: "Match rating percentages",
          features: ["Parsed skills radar overlay", "AI evaluation descriptions", "Compatibility stats indicator"]
        },
        { 
          label: "Candidate AI Ranking", 
          path: "/hr/ai/candidate-ranking/1", 
          module: "Module 10", 
          desc: "Sorted applicant lists",
          features: ["AI score comparison", "Filter by score bands", "Bulk shortlist triggers"]
        },
        { 
          label: "Skills Radar Chart", 
          path: "/hr/ai/skill-analysis/sarah-connor", 
          module: "Module 10", 
          desc: "Visual spider chart comparisons",
          features: ["Radar canvas graph", "Required vs Candidate skills", "Gap analysis highlights"]
        },
        { 
          label: "Metrics Overview Hub", 
          path: "/analytics/overview", 
          module: "Module 11", 
          desc: "KPI summaries and trend charts",
          features: ["KPI trend gauges", "Dynamic filters lists", "Historical comparisons charts"]
        },
        { 
          label: "Recruiter Funnel Stats", 
          path: "/analytics/hiring", 
          module: "Module 11", 
          desc: "Aggregated pipeline chart",
          features: ["Screening funnel area", "Time to hire lines", "Source efficiency bars"]
        },
        { 
          label: "Academy Course Analytics", 
          path: "/analytics/education", 
          module: "Module 11", 
          desc: "Enrollments and placement ratios",
          features: ["Course capacity gauges", "Placement ratio trends", "Skills graduation scores"]
        },
        { 
          label: "IT Services Performance", 
          path: "/analytics/services", 
          module: "Module 11", 
          desc: "Client projects engagement stats",
          features: ["Billable hours bars", "Milestone success trends", "Client feedback ratings"]
        }
      ]
    }
  };

  const currentCategory = sitemapCategories[activeCategory];

  // Helper to render customized interactive wireframes in the drawer
  const renderMockup = (categoryKey: string) => {
    switch (categoryKey) {
      case 'public':
        return (
          <div className="border border-dashed border-neutral-300 rounded-xl p-4 bg-neutral-50/55 space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
              <span className="w-12 h-3 bg-neutral-300 rounded animate-pulse" />
              <div className="flex gap-2">
                <span className="w-6 h-2 bg-neutral-200 rounded" />
                <span className="w-6 h-2 bg-neutral-200 rounded" />
                <span className="w-6 h-2 bg-neutral-200 rounded" />
              </div>
            </div>
            <div className="text-center py-6 space-y-2">
              <div className="w-3/4 h-4 bg-neutral-300 rounded mx-auto animate-pulse" />
              <div className="w-1/2 h-2.5 bg-neutral-200 rounded mx-auto" />
              <div className="flex gap-2 justify-center pt-2">
                <span className="w-16 h-6 bg-primary/20 border border-primary/25 rounded-md" />
                <span className="w-16 h-6 bg-neutral-200 rounded-md" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-10 bg-white border border-neutral-200 rounded p-1.5 space-y-1">
                <div className="w-1/2 h-1.5 bg-neutral-300 rounded" />
                <div className="w-3/4 h-1 bg-neutral-200 rounded" />
              </div>
              <div className="h-10 bg-white border border-neutral-200 rounded p-1.5 space-y-1">
                <div className="w-1/2 h-1.5 bg-neutral-300 rounded" />
                <div className="w-3/4 h-1 bg-neutral-200 rounded" />
              </div>
              <div className="h-10 bg-white border border-neutral-200 rounded p-1.5 space-y-1">
                <div className="w-1/2 h-1.5 bg-neutral-300 rounded" />
                <div className="w-3/4 h-1 bg-neutral-200 rounded" />
              </div>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="border border-dashed border-neutral-300 rounded-xl p-4 bg-neutral-50/55 space-y-3">
            <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-neutral-200">
              <div className="space-y-1">
                <span className="text-[10px] text-neutral-400 font-bold block">CURRENT COURSE</span>
                <span className="text-xs font-bold text-neutral-800 block">React 19 Advanced Bootcamp</span>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center font-bold text-xs text-primary bg-primary-50">
                75%
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] text-neutral-400 font-bold block">SYLLABUS PROGRESS</span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                  <Check className="h-3 w-3 text-success shrink-0" />
                  <span>React Server Components (RSC)</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                  <Check className="h-3 w-3 text-success shrink-0" />
                  <span>The new `use` hook and action transitions</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                  <div className="h-3 w-3 rounded-full border border-neutral-300 animate-ping shrink-0" />
                  <span className="font-semibold text-neutral-800">Advanced Server Actions & Optimistic UI</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'careers':
        return (
          <div className="border border-dashed border-neutral-300 rounded-xl p-4 bg-neutral-50/55 space-y-3">
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-lg border border-neutral-200">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success font-bold text-xs">
                SC
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-neutral-800 block">Sarah Connor</span>
                <span className="text-[9px] text-neutral-500 block">Applied for Senior Frontend Engineer</span>
              </div>
            </div>
            <div className="space-y-2 pt-1">
              <span className="text-[9px] text-neutral-400 font-bold block">APPLICANT STAGE</span>
              <div className="flex items-center justify-between gap-1 text-[9px] font-bold text-neutral-500 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 -translate-y-1/2 -z-10" />
                <span className="bg-success text-white px-1.5 py-0.5 rounded">Applied</span>
                <span className="bg-success text-white px-1.5 py-0.5 rounded">Screening</span>
                <span className="bg-primary text-white px-1.5 py-0.5 rounded animate-pulse">Interview</span>
                <span className="bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded text-neutral-400">Offer</span>
              </div>
            </div>
          </div>
        );
      case 'it_services':
        return (
          <div className="border border-dashed border-neutral-300 rounded-xl p-4 bg-neutral-50/55 space-y-3">
            <div className="space-y-1.5">
              <span className="text-[9px] text-neutral-400 font-bold block">B2B CLIENT PROJECT METRICS</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white border border-neutral-200 p-2 rounded space-y-1">
                  <span className="text-[9px] text-neutral-400 block">Active Blueprints</span>
                  <span className="text-sm font-bold text-neutral-800 block">4 Projects</span>
                </div>
                <div className="bg-white border border-neutral-200 p-2 rounded space-y-1">
                  <span className="text-[9px] text-neutral-400 block">Uptime Latency</span>
                  <span className="text-sm font-bold text-success block">99.98%</span>
                </div>
              </div>
            </div>
            <div className="space-y-1 bg-white border border-neutral-200 p-2 rounded">
              <div className="flex justify-between text-[10px] text-neutral-600">
                <span>Migration Blueprint Phase 2</span>
                <span className="font-semibold text-neutral-800">80%</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-amber-500 rounded-full" />
              </div>
            </div>
          </div>
        );
      case 'hr_recruiter':
        return (
          <div className="border border-dashed border-neutral-300 rounded-xl p-4 bg-neutral-50/55 space-y-3">
            <div className="space-y-1.5">
              <span className="text-[9px] text-neutral-400 font-bold block">ACTIVE INTERVIEW PIPELINES</span>
              <div className="bg-white border border-neutral-200 rounded p-2.5 divide-y divide-neutral-100 text-[10px]">
                <div className="py-1.5 flex justify-between">
                  <span className="text-neutral-700">Web Dev Bootcamp Inbound</span>
                  <span className="bg-primary/10 text-primary font-bold px-1.5 py-0.2 rounded">18 Active</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span className="text-neutral-700">Senior Cloud Architect Funnel</span>
                  <span className="bg-purple-100 text-purple-700 font-bold px-1.5 py-0.2 rounded">4 Active</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span className="text-neutral-700">Intern Placement Drive</span>
                  <span className="bg-success/10 text-success font-bold px-1.5 py-0.2 rounded">42 Active</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'admin_portal':
        return (
          <div className="border border-dashed border-neutral-300 rounded-xl p-4 bg-neutral-50/55 space-y-3">
            <span className="text-[9px] text-neutral-400 font-bold block">USER PERMISSION MATRIX</span>
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
              <div className="p-2 flex items-center justify-between text-[10px]">
                <span className="font-semibold text-neutral-800">Edit Academies Curriculum</span>
                <div className="w-7 h-4 bg-primary rounded-full p-0.5 flex justify-end">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              <div className="p-2 flex items-center justify-between text-[10px]">
                <span className="font-semibold text-neutral-800">Access Global Billing Reports</span>
                <div className="w-7 h-4 bg-neutral-200 rounded-full p-0.5 flex justify-start">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              <div className="p-2 flex items-center justify-between text-[10px]">
                <span className="font-semibold text-neutral-800">Wipe System Audit Logs</span>
                <div className="w-7 h-4 bg-neutral-200 rounded-full p-0.5 flex justify-start">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'ai_analytics':
        return (
          <div className="border border-dashed border-neutral-300 rounded-xl p-4 bg-neutral-50/55 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-neutral-400 font-bold block">AI MATCH ANALYSIS</span>
              <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded">94% Fit</span>
            </div>
            <div className="h-20 flex items-end justify-between gap-1 pt-2">
              <div className="w-full bg-rose-500 h-[94%] rounded-t animate-in slide-in-from-bottom duration-500 delay-75 fill-mode-both" />
              <div className="w-full bg-rose-300 h-[70%] rounded-t animate-in slide-in-from-bottom duration-500 delay-100 fill-mode-both" />
              <div className="w-full bg-rose-400 h-[85%] rounded-t animate-in slide-in-from-bottom duration-500 delay-150 fill-mode-both" />
              <div className="w-full bg-neutral-200 h-[45%] rounded-t animate-in slide-in-from-bottom duration-500 delay-200 fill-mode-both" />
              <div className="w-full bg-rose-500 h-[90%] rounded-t animate-in slide-in-from-bottom duration-500 delay-300 fill-mode-both" />
            </div>
            <div className="flex justify-between text-[8px] text-neutral-400 font-semibold px-0.5">
              <span>React</span>
              <span>Node</span>
              <span>TS</span>
              <span>CSS</span>
              <span>SQL</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Hero Block */}
      <Hero />

      {/* Trust Marquee / Logos */}
      <div className="w-full overflow-hidden py-8 border-y border-neutral-100 bg-neutral-50/30 -mt-8 relative">
        <div className="app-container max-w-5xl space-y-4 text-center">
          <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
            ENGINEERING BACKGROUNDS FROM LEADING ORGANIZATIONS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 pt-1">
            {["Google", "Microsoft", "AWS", "Stripe", "Airbnb", "HubSpot", "Shopify"].map((brand) => (
              <span key={brand} className="text-xs sm:text-sm font-display font-extrabold text-neutral-400 select-none tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Value Props Grid */}
      <motion.section 
        id="value-props-section" 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="app-container max-w-6xl space-y-12"
      >
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Circular Ecosystem</span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
            Integrated Services, Training, and Placement
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
            We operate custom software consulting divisions, developer academies, and talent pipelines to solve recruitment and engineering in one ecosystem.
          </p>
        </div>
        <ValuePropGrid />
      </motion.section>

      {/* 3. Company Statistics Counter */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="app-container max-w-5xl"
      >
        <StatsCounter stats={mockCompanyStats} />
      </motion.section>

      {/* 4. Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="app-container max-w-5xl space-y-10"
      >
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Client Reviews</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 tracking-tight">
            What our partners and graduates say
          </h2>
        </div>
        <TestimonialCarousel testimonials={mockTestimonials} />
      </motion.section>

      {/* 5. USER EXPLICIT REQUEST: Sitemap Route Navigator Explorer */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="app-container max-w-5xl space-y-8 border-t border-border pt-16"
      >
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            User Request Feature
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
            Interactive Platform Explorer
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-lg mx-auto">
            Explore and test all pages across the 12-module roadmap. Click on any card below to launch an interactive, high-fidelity wireframe preview with live feature breakdowns.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-border overflow-x-auto gap-2 pb-px scrollbar-none justify-start md:justify-center">
          {Object.entries(sitemapCategories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold border-b-2 transition-all whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-t-lg",
                activeCategory === key
                  ? "border-primary text-primary bg-primary-50/5"
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              )}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories routes display */}
        {currentCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 animate-in fade-in duration-200">
            {currentCategory.routes.map((route, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedRoute({ ...route, categoryKey: activeCategory })}
                className="p-4 rounded-xl border border-border bg-white hover:border-primary/30 hover:shadow-premium-sm transition-all flex flex-col justify-between group cursor-pointer focus-visible:ring-2 focus-visible:ring-primary text-left"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-neutral-800 group-hover:text-primary transition-colors">
                      {route.label}
                    </span>
                    <Link 
                      to={route.path}
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 hover:bg-neutral-50 rounded transition-colors"
                      title="Launch live page directly"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-neutral-400 hover:text-primary transition-colors" />
                    </Link>
                  </div>
                  <p className="text-[10px] text-text-muted leading-relaxed">
                    {route.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-50 mt-2.5 flex items-center justify-between text-[9px] font-bold text-neutral-400">
                  <span>{route.module}</span>
                  <span className="bg-neutral-50 border border-neutral-200 px-1.5 py-0.5 rounded text-neutral-500 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                    Launch Preview
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.section>

      {/* 6. General CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="app-container max-w-5xl"
      >
        <CTASection />
      </motion.section>

      {/* Interactive Page Previewer Drawer Sheet */}
      <AnimatePresence>
        {selectedRoute && (
          <>
            {/* Backdrop Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRoute(null)}
              className="fixed inset-0 bg-neutral-950/40 backdrop-blur-xs z-50"
            />
            {/* Slide-over Drawer Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-premium-2xl border-l border-border z-50 flex flex-col p-6 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-neutral-100 pb-4 mb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                    {selectedRoute.module}
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-neutral-900">
                    {selectedRoute.label}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedRoute(null)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="flex-1 space-y-6">
                {/* Description */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Overview</span>
                  <p className="text-xs text-neutral-600 leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                    {selectedRoute.desc}. This module is built using React 19, Tailwind CSS, and custom spring animations to serve production B2B workflows.
                  </p>
                </div>

                {/* Live Wireframe Mockup */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                    <Sparkles className="h-3 w-3 text-primary animate-pulse" />
                    <span>Live Interactive Mockup</span>
                  </div>
                  {renderMockup(selectedRoute.categoryKey)}
                </div>

                {/* Key Technical Features */}
                {selectedRoute.features && selectedRoute.features.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Key Technical Specifications</span>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedRoute.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 bg-white border border-neutral-200/60 p-2.5 rounded-lg">
                          <Check className="h-4 w-4 text-success shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="border-t border-neutral-100 pt-5 mt-6 flex gap-3">
                <button
                  onClick={() => setSelectedRoute(null)}
                  className="flex-1 text-center text-xs font-bold py-3 border border-border rounded-xl text-neutral-600 hover:bg-neutral-50 transition-colors"
                >
                  Close Preview
                </button>
                <Link
                  to={selectedRoute.path}
                  onClick={() => setSelectedRoute(null)}
                  className="flex-1 text-center bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3 rounded-xl shadow-premium-md hover:shadow-premium-lg transition-all flex items-center justify-center gap-1.5"
                >
                  Launch Live Page
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
