import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Home, Cpu, GraduationCap, Briefcase, UserCircle2 } from 'lucide-react';
import SEOHead from '@/app/SEOHead';

export const SitemapPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Sitemap" description="Comprehensive map of all links and sections in the Ascope Tech platform." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex p-3 bg-primary-50 text-primary rounded-2xl">
              <Network className="h-6 w-6" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Platform Sitemap
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Find and navigate directly to any page, portal dashboard, educational course, or consulting service on the Ascope Tech platform.
            </p>
          </div>

          {/* Grouped Links grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            
            {/* 1. Marketing Section */}
            <div className="space-y-4 bg-white p-6 border border-border rounded-2xl shadow-premium-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-neutral-800 font-bold text-sm">
                <Home className="h-4 w-4 text-primary" />
                <span>Marketing & General</span>
              </div>
              <ul className="space-y-2.5 text-xs text-text-muted pl-6 list-disc">
                <li><Link to="/" className="hover:text-primary transition-colors">Home Page</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/vision-mission" className="hover:text-primary transition-colors">Vision & Mission</Link></li>
                <li><Link to="/leadership" className="hover:text-primary transition-colors">Leadership Team</Link></li>
                <li><Link to="/company" className="hover:text-primary transition-colors">Company Overview</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
                <li><Link to="/design-system" className="hover:text-primary transition-colors">Design System Spec</Link></li>
              </ul>
            </div>

            {/* 2. IT Services Section */}
            <div className="space-y-4 bg-white p-6 border border-border rounded-2xl shadow-premium-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-neutral-800 font-bold text-sm">
                <Cpu className="h-4 w-4 text-amber-500" />
                <span>IT Consulting</span>
              </div>
              <ul className="space-y-2.5 text-xs text-text-muted pl-6 list-disc">
                <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                <li><Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
                <li><Link to="/technologies" className="hover:text-primary transition-colors">Technologies</Link></li>
                <li><Link to="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
                <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio / Case Studies</Link></li>
                <li><Link to="/contact-sales" className="hover:text-primary transition-colors">Contact Sales</Link></li>
              </ul>
            </div>

            {/* 3. Education Section */}
            <div className="space-y-4 bg-white p-6 border border-border rounded-2xl shadow-premium-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-neutral-800 font-bold text-sm">
                <GraduationCap className="h-4 w-4 text-info" />
                <span>Education Academy</span>
              </div>
              <ul className="space-y-2.5 text-xs text-text-muted pl-6 list-disc">
                <li><Link to="/education/courses" className="hover:text-primary transition-colors">Courses Catalog</Link></li>
                <li><Link to="/education/trainers" className="hover:text-primary transition-colors">Our Trainers</Link></li>
                <li><Link to="/education/certifications" className="hover:text-primary transition-colors">Certifications</Link></li>
                <li><Link to="/education/student-success" className="hover:text-primary transition-colors">Student Success Stories</Link></li>
                <li><Link to="/education/placement" className="hover:text-primary transition-colors">Placement Statistics</Link></li>
              </ul>
            </div>

            {/* 4. Careers Section */}
            <div className="space-y-4 bg-white p-6 border border-border rounded-2xl shadow-premium-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-neutral-800 font-bold text-sm">
                <Briefcase className="h-4 w-4 text-success" />
                <span>Careers Hub</span>
              </div>
              <ul className="space-y-2.5 text-xs text-text-muted pl-6 list-disc">
                <li><Link to="/careers/jobs" className="hover:text-primary transition-colors">Open Jobs List</Link></li>
                <li><Link to="/careers/internships" className="hover:text-primary transition-colors">Internship Programs</Link></li>
                <li><Link to="/careers/campus-hiring" className="hover:text-primary transition-colors">Campus Hiring Initiatives</Link></li>
                <li><Link to="/careers/register" className="hover:text-primary transition-colors">Register Candidate Profile</Link></li>
              </ul>
            </div>

            {/* 5. User & Admin Portals */}
            <div className="space-y-4 bg-white p-6 border border-border rounded-2xl shadow-premium-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-neutral-800 font-bold text-sm">
                <UserCircle2 className="h-4 w-4 text-purple-500" />
                <span>Platform Portals</span>
              </div>
              <ul className="space-y-2.5 text-xs text-text-muted pl-6 list-disc">
                <li><Link to="/portal/dashboard" className="hover:text-primary transition-colors">Candidate Dashboard</Link></li>
                <li><Link to="/hr/dashboard" className="hover:text-primary transition-colors">HR Dashboard</Link></li>
                <li><Link to="/recruiter/dashboard" className="hover:text-primary transition-colors">Recruiter Dashboard</Link></li>
                <li><Link to="/admin/dashboard" className="hover:text-primary transition-colors">Admin Dashboard</Link></li>
              </ul>
            </div>

            {/* 6. Legal & Guidelines */}
            <div className="space-y-4 bg-white p-6 border border-border rounded-2xl shadow-premium-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-neutral-800 font-bold text-sm">
                <Network className="h-4 w-4 text-neutral-500" />
                <span>Legal & Support</span>
              </div>
              <ul className="space-y-2.5 text-xs text-text-muted pl-6 list-disc">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/500" className="hover:text-primary transition-colors">Trigger Error Test Page</Link></li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default SitemapPage;
