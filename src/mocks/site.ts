import type { SiteConfig } from './types';

export const mockSiteConfig: SiteConfig = {
  name: "Ascope Tech",
  description: "IT services, professional education, and global talent recruitment enterprise platform.",
  logo: "/logo.svg",
  navItems: [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "IT Services",
      href: "/services",
      children: [
        { label: "Our Services", href: "/services" },
        { label: "Solutions", href: "/solutions" },
        { label: "Technologies", href: "/technologies" },
        { label: "Industries", href: "/industries" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact Sales", href: "/contact-sales" }
      ]
    },
    {
      label: "Education",
      href: "/education/courses",
      children: [
        { label: "Courses & Bootcamps", href: "/education/courses" },
        { label: "Trainers", href: "/education/trainers" },
        { label: "Certifications", href: "/education/certifications" },
        { label: "Student Success", href: "/education/student-success" },
        { label: "Placement Statistics", href: "/education/placement" }
      ]
    },
    {
      label: "Careers",
      href: "/careers/jobs",
      children: [
        { label: "Explore Jobs", href: "/careers/jobs" },
        { label: "Internships", href: "/careers/internships" },
        { label: "Campus Hiring", href: "/careers/campus-hiring" },
        { label: "Join the Talent Pool", href: "/careers/register" }
      ]
    },
    {
      label: "Company",
      href: "/company",
      children: [
        { label: "About Us", href: "/about" },
        { label: "Vision & Mission", href: "/vision-mission" },
        { label: "Leadership Team", href: "/leadership" },
        { label: "Contact Us", href: "/contact" }
      ]
    },
    {
      label: "Portals",
      href: "#",
      children: [
        { label: "Candidate Portal", href: "/portal/dashboard" },
        { label: "HR Portal", href: "/hr/dashboard" },
        { label: "Recruiter Portal", href: "/recruiter/dashboard" },
        { label: "Admin Portal", href: "/admin/dashboard" },
        { label: "Design System Showcase", href: "/design-system" }
      ]
    }
  ],
  footerSections: [
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Software", href: "/services" },
        { label: "Cloud Migration", href: "/services" },
        { label: "Cybersecurity Systems", href: "/services" },
        { label: "AI & ML Integration", href: "/services" },
        { label: "Resource Augmentation", href: "/services" }
      ]
    },
    {
      title: "Education",
      links: [
        { label: "Web Development Bootcamp", href: "/education/courses" },
        { label: "Cloud & DevOps Engineering", href: "/education/courses" },
        { label: "AI Specialist Training", href: "/education/courses" },
        { label: "Certifications", href: "/education/certifications" },
        { label: "Placement Programs", href: "/education/placement" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Ascope Tech", href: "/about" },
        { label: "Vision & Goals", href: "/vision-mission" },
        { label: "Leadership Board", href: "/leadership" },
        { label: "Career Openings", href: "/careers/jobs" },
        { label: "Contact Support", href: "/contact" }
      ]
    },
    {
      title: "Legal & Portals",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Candidate Portal", href: "/portal/dashboard" },
        { label: "Recruiter Space", href: "/recruiter/dashboard" },
        { label: "Admin Controls", href: "/admin/dashboard" }
      ]
    }
  ],
  socialLinks: [
    { platform: "GitHub", href: "https://github.com", icon: "github" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/search/results/all/?keywords=Ascope%20Tech%20Private%20Limited&origin=ENTITY_SEARCH_HOME_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A113022421&position=0", icon: "linkedin" },
    { platform: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { platform: "YouTube", href: "https://youtube.com", icon: "youtube" }
  ]
};
