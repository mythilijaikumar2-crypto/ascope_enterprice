import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import SEOHead from './SEOHead';

// Keep HomePage static so it loads instantly
import HomePage from '@/pages/marketing/Home';

// Lazy load marketing pages
const CompanyPage = React.lazy(() => import('@/pages/marketing/Company'));
const AboutPage = React.lazy(() => import('@/pages/marketing/About'));
const VisionMissionPage = React.lazy(() => import('@/pages/marketing/VisionMission'));
const LeadershipPage = React.lazy(() => import('@/pages/marketing/Leadership'));
const ContactPage = React.lazy(() => import('@/pages/marketing/Contact'));
const PrivacyPage = React.lazy(() => import('@/pages/marketing/Privacy'));
const TermsPage = React.lazy(() => import('@/pages/marketing/Terms'));
const SitemapPage = React.lazy(() => import('@/pages/marketing/Sitemap'));
const DesignSystemPage = React.lazy(() => import('@/pages/DesignSystem'));

// Academy pages
const CoursesPage = React.lazy(() => import('@/pages/education/Courses'));
const CategoryDetailPage = React.lazy(() => import('@/pages/education/CategoryDetail'));
const CourseDetailPage = React.lazy(() => import('@/pages/education/CourseDetail'));
const TrainersPage = React.lazy(() => import('@/pages/education/Trainers'));
const CertificationsPage = React.lazy(() => import('@/pages/education/Certifications'));
const StudentSuccessPage = React.lazy(() => import('@/pages/education/StudentSuccess'));
const PlacementPage = React.lazy(() => import('@/pages/education/Placement'));

// Services consulting pages
const ServicesPage = React.lazy(() => import('@/pages/services/Services'));
const SolutionsPage = React.lazy(() => import('@/pages/services/Solutions'));
const TechnologiesPage = React.lazy(() => import('@/pages/services/Technologies'));
const PortfolioPage = React.lazy(() => import('@/pages/services/Portfolio'));
const IndustriesPage = React.lazy(() => import('@/pages/services/Industries'));
const CaseStudyDetailPage = React.lazy(() => import('@/pages/services/CaseStudyDetail'));
const ContactSalesPage = React.lazy(() => import('@/pages/services/ContactSales'));

// Careers pages
const JobsPage = React.lazy(() => import('@/pages/careers/Jobs'));
const JobDetailPage = React.lazy(() => import('@/pages/careers/JobDetail'));
const InternshipsPage = React.lazy(() => import('@/pages/careers/Internships'));
const CampusHiringPage = React.lazy(() => import('@/pages/careers/CampusHiring'));
const RegisterPage = React.lazy(() => import('@/pages/careers/Register'));

// Candidate Portal pages
const DashboardPage = React.lazy(() => import('@/pages/portal/Dashboard'));
const ProfilePage = React.lazy(() => import('@/pages/portal/Profile'));
const ResumePage = React.lazy(() => import('@/pages/portal/Resume'));
const SkillsPage = React.lazy(() => import('@/pages/portal/Skills'));
const ApplicationsPage = React.lazy(() => import('@/pages/portal/Applications'));

// HR and Recruiter pages
const HRDashboardPage = React.lazy(() => import('@/pages/hr/Dashboard'));
const RecruiterDashboardPage = React.lazy(() => import('@/pages/hr/RecruiterDashboard'));
const HRJobsPage = React.lazy(() => import('@/pages/hr/Jobs'));
const CandidatesPage = React.lazy(() => import('@/pages/hr/Candidates'));
const CandidateDetailPage = React.lazy(() => import('@/pages/hr/CandidateDetail'));
const InterviewsPage = React.lazy(() => import('@/pages/hr/Interviews'));

// HR Admin pages
const AdminDashboardPage = React.lazy(() => import('@/pages/admin/AdminDashboard'));
const UsersPage = React.lazy(() => import('@/pages/admin/Users'));
const RolesPage = React.lazy(() => import('@/pages/admin/Roles'));
const DepartmentsPage = React.lazy(() => import('@/pages/admin/Departments'));
const AdminSkillsPage = React.lazy(() => import('@/pages/admin/Skills'));
const SettingsPage = React.lazy(() => import('@/pages/admin/Settings'));
const ReportsPage = React.lazy(() => import('@/pages/admin/Reports'));

// AI Mock page views
const ResumeMatchPage = React.lazy(() => import('@/pages/hr/ai/ResumeMatch'));
const CandidateRankingPage = React.lazy(() => import('@/pages/hr/ai/CandidateRanking'));
const SkillAnalysisPage = React.lazy(() => import('@/pages/hr/ai/SkillAnalysis'));

// Analytics pages
const OverviewPage = React.lazy(() => import('@/pages/analytics/Overview'));
const HiringPage = React.lazy(() => import('@/pages/analytics/Hiring'));
const EducationPage = React.lazy(() => import('@/pages/analytics/Education'));
const AnalyticsServicesPage = React.lazy(() => import('@/pages/analytics/Services'));

// Local Not Found (404) Page
export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center space-y-10">

          {/* Icon + Message */}
          <div className="space-y-4">
            <div className="inline-flex p-4 bg-warning/10 text-warning rounded-2xl">
              <AlertTriangle className="h-12 w-12" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
                404 — Page Not Found
              </h1>
              <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">
                We couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be typoed.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-premium-sm transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Home
            </Link>
          </div>

          {/* Quick nav links */}
          <div className="space-y-3 text-left">
            <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider text-center">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {[
                { label: "Courses Catalog", path: "/education/courses" },
                { label: "Open Jobs Board", path: "/careers/jobs" },
                { label: "IT Services", path: "/services" },
                { label: "Candidate Portal", path: "/portal/dashboard" },
                { label: "HR Dashboard", path: "/hr/dashboard" },
                { label: "Analytics Console", path: "/analytics/overview" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="p-3 border border-border hover:border-primary/20 bg-white hover:bg-surface text-neutral-700 hover:text-primary rounded-xl font-semibold transition-all text-center shadow-premium-sm focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

// Local simulated crash (500) Page
export const TriggerErrorPage: React.FC = () => {
  const [shouldCrash, setShouldCrash] = React.useState(false);

  if (shouldCrash) {
    throw new Error(
      "Simulated Exception: This is an intentional runtime error triggered to demonstrate that the RouteErrorBoundary component catches layout crashes and displays the 500 error page."
    );
  }

  return (
    <>
      <SEOHead title="Simulate 500 Error" description="Test the application boundary error fallback UI." />
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 bg-surface/50">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 border border-border rounded-2xl shadow-premium-md">
          <div className="inline-flex p-4 bg-error/10 text-error rounded-2xl">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-neutral-900">Simulate Runtime Exception</h2>
            <p className="text-xs text-text-muted leading-relaxed">
              Click the button below to crash the rendering process. This will test if the global `RouteErrorBoundary` catches the crash and displays the `/500` error view instead of a blank screen.
            </p>
          </div>
          <button
            onClick={() => setShouldCrash(true)}
            className="w-full bg-error hover:bg-error/90 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-premium-sm transition-all"
          >
            Trigger Layout Crash (500 Error)
          </button>
        </div>
      </div>
    </>
  );
};

// Define Route Configurations
export const appRoutes = [
  // Marketing pages
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/company',
    element: <CompanyPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/vision-mission',
    element: <VisionMissionPage />,
  },
  {
    path: '/leadership',
    element: <LeadershipPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/design-system',
    element: <DesignSystemPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '/sitemap',
    element: <SitemapPage />,
  },
  {
    path: '/500',
    element: <TriggerErrorPage />,
  },

  // Services Consulting pages
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/solutions',
    element: <SolutionsPage />,
  },
  {
    path: '/technologies',
    element: <TechnologiesPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/industries',
    element: <IndustriesPage />,
  },
  {
    path: '/case-studies/:slug',
    element: <CaseStudyDetailPage />,
  },
  {
    path: '/contact-sales',
    element: <ContactSalesPage />,
  },
  // Education Academy pages
  {
    path: '/education/courses',
    element: <CoursesPage />,
  },
  {
    path: '/education/categories/:slug',
    element: <CategoryDetailPage />,
  },
  {
    path: '/education/courses/:slug',
    element: <CourseDetailPage />,
  },
  {
    path: '/education/trainers',
    element: <TrainersPage />,
  },
  {
    path: '/education/certifications',
    element: <CertificationsPage />,
  },
  {
    path: '/education/student-success',
    element: <StudentSuccessPage />,
  },
  {
    path: '/education/placement',
    element: <PlacementPage />,
  },
  // Careers pages
  {
    path: '/careers/jobs',
    element: <JobsPage />,
  },
  {
    path: '/careers/jobs/:slug',
    element: <JobDetailPage />,
  },
  {
    path: '/careers/internships',
    element: <InternshipsPage />,
  },
  {
    path: '/careers/campus-hiring',
    element: <CampusHiringPage />,
  },
  {
    path: '/careers/register',
    element: <RegisterPage />,
  },
  // Candidate Portal pages
  {
    path: '/portal/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/portal/profile',
    element: <ProfilePage />,
  },
  {
    path: '/portal/resume',
    element: <ResumePage />,
  },
  {
    path: '/portal/skills',
    element: <SkillsPage />,
  },
  {
    path: '/portal/applications',
    element: <ApplicationsPage />,
  },
  // HR and Recruiter pages
  {
    path: '/hr/dashboard',
    element: <HRDashboardPage />,
  },
  {
    path: '/recruiter/dashboard',
    element: <RecruiterDashboardPage />,
  },
  {
    path: '/hr/jobs',
    element: <HRJobsPage />,
  },
  {
    path: '/hr/candidates',
    element: <CandidatesPage />,
  },
  {
    path: '/hr/candidates/:id',
    element: <CandidateDetailPage />,
  },
  {
    path: '/hr/interviews',
    element: <InterviewsPage />,
  },
  // HR Admin pages
  {
    path: '/admin/dashboard',
    element: <AdminDashboardPage />,
  },
  {
    path: '/admin/users',
    element: <UsersPage />,
  },
  {
    path: '/admin/roles',
    element: <RolesPage />,
  },
  {
    path: '/admin/departments',
    element: <DepartmentsPage />,
  },
  {
    path: '/admin/skills',
    element: <AdminSkillsPage />,
  },
  {
    path: '/admin/settings',
    element: <SettingsPage />,
  },
  {
    path: '/admin/reports',
    element: <ReportsPage />,
  },
  // AI Mock page views
  {
    path: '/hr/ai/resume-match/:jobId',
    element: <ResumeMatchPage />,
  },
  {
    path: '/hr/ai/candidate-ranking/:jobId',
    element: <CandidateRankingPage />,
  },
  {
    path: '/hr/ai/skill-analysis/:candidateId',
    element: <SkillAnalysisPage />,
  },
  // Analytics pages
  {
    path: '/analytics/overview',
    element: <OverviewPage />,
  },
  {
    path: '/analytics/hiring',
    element: <HiringPage />,
  },
  {
    path: '/analytics/education',
    element: <EducationPage />,
  },
  {
    path: '/analytics/services',
    element: <AnalyticsServicesPage />,
  },

  // 404 handler
  {
    path: '/404',
    element: <NotFoundPage />,
  },
  // Catch-all route mapping to 404
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
];
export default appRoutes;
