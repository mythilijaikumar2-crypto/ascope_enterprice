import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Github, Linkedin, Twitter, Youtube, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { mockSiteConfig } from '@/mocks/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import logoImg from '@/assets/assope tech.png';
import { LoadingFallback } from '@/components/ui';

export const AppLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setDesktopDropdownOpen(null);
  }, [location.pathname]);

  // Handle header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Icon lookup for footer socials
  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5" />;
      default:
        return null;
    }
  };

  // Motion variants for pages
  const pageVariants = {
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 8,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.05 : 0.25,
        ease: 'easeOut' as const,
      },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -8,
      transition: {
        duration: prefersReducedMotion ? 0.05 : 0.2,
        ease: 'easeIn' as const,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main">
      {/* Keyboard Accessibility Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Persistent Floating Capsule Header */}
      <header
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[92%] max-w-6xl rounded-2xl glass border",
          scrolled 
            ? "top-2 py-2.5 shadow-premium-lg border-border bg-white/85" 
            : "top-4 py-3.5 shadow-premium-md border-white/20 bg-white/60"
        )}
      >
        <div className="w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-md">
            <img src={logoImg} alt="Ascope Tech" className="h-14 -my-2 w-auto rounded-lg object-contain group-hover:scale-105 transition-transform duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Main Navigation">
            {mockSiteConfig.navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <div 
                  key={item.label} 
                  className="relative group py-1"
                  onMouseEnter={() => setDesktopDropdownOpen(item.label)}
                  onMouseLeave={() => setDesktopDropdownOpen(null)}
                >
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => setDesktopDropdownOpen(desktopDropdownOpen === item.label ? null : item.label)}
                        className={cn(
                          "flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider transition-all py-1.5 px-3.5 rounded-lg text-neutral-600 hover:text-primary hover:bg-neutral-50/50 border border-transparent group-hover:bg-neutral-50/50 group-hover:text-primary focus-visible:ring-2 focus-visible:ring-primary outline-none",
                          desktopDropdownOpen === item.label && "bg-neutral-50/50 text-primary"
                        )}
                        aria-haspopup="true"
                        aria-expanded={desktopDropdownOpen === item.label}
                      >
                        {item.label}
                        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180", desktopDropdownOpen === item.label && "rotate-180")} />
                      </button>

                      {/* Dropdown Menu with Smooth Transition */}
                      <AnimatePresence>
                        {desktopDropdownOpen === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-xl bg-white border border-border p-2 shadow-premium-lg z-50"
                          >
                            {item.children?.map((subItem) => (
                              <NavLink
                                key={subItem.label}
                                to={subItem.href}
                                onClick={() => setDesktopDropdownOpen(null)}
                                className={({ isActive }) =>
                                  cn(
                                    "group/item flex items-center gap-2 text-xs font-semibold py-2 px-3 rounded-lg hover:bg-surface hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none",
                                    isActive ? "bg-primary-50 text-primary" : "text-neutral-600"
                                  )
                                }
                              >
                                <span className="flex-1 min-w-0 truncate">{subItem.label}</span>
                                <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150" />
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          "text-[11px] font-bold uppercase tracking-wider transition-all py-1.5 px-3.5 rounded-lg focus-visible:ring-2 focus-visible:ring-primary outline-none block border",
                          isActive 
                            ? "bg-primary-50/70 border-primary/20 text-primary font-extrabold shadow-inner-soft" 
                            : "text-neutral-600 hover:text-primary hover:bg-neutral-50/50 border-transparent"
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/portal/dashboard"
              className="text-xs font-bold text-neutral-600 hover:text-primary hover:bg-neutral-50/50 border border-transparent py-1.5 px-3.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
            >
              Sign In
            </Link>
            <Link
              to="/contact-sales"
              className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-premium-sm transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-primary hover:bg-surface rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-dialog"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-950/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              id="mobile-nav-dialog"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white border-l border-border shadow-premium-xl z-40 lg:hidden flex flex-col p-6 pt-24"
            >
              <nav className="flex-1 flex flex-col gap-4 overflow-y-auto" aria-label="Mobile Navigation">
                {mockSiteConfig.navItems.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  return (
                    <div key={item.label} className="border-b border-neutral-100 pb-2">
                      {hasChildren ? (
                        <div className="flex flex-col">
                          <button
                            onClick={() => handleDropdownToggle(item.label)}
                            className="flex items-center justify-between text-sm font-semibold py-2 text-neutral-800 hover:text-primary w-full text-left"
                          >
                            {item.label}
                            <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeDropdown === item.label && "rotate-180")} />
                          </button>
                          <AnimatePresence initial={false}>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="flex flex-col pl-4 gap-2.5 mt-2 overflow-hidden"
                              >
                                {item.children?.map((subItem) => (
                                  <NavLink
                                    key={subItem.label}
                                    to={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                      cn(
                                        "text-xs py-1.5 transition-colors hover:text-primary block",
                                        isActive ? "text-primary font-semibold" : "text-neutral-500"
                                      )
                                    }
                                  >
                                    {subItem.label}
                                  </NavLink>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <NavLink
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              "text-sm font-semibold py-2 block transition-colors hover:text-primary",
                              isActive ? "text-primary" : "text-neutral-800"
                            )
                          }
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-3 mt-auto pt-6">
                <Link
                  to="/portal/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-medium py-2.5 border border-border rounded-lg text-neutral-700 hover:bg-surface transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/contact-sales"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold py-2.5 rounded-lg shadow-premium-sm transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Outlet with Animated Page Transition */}
      <main id="main-content" className="grow pt-24" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="w-full h-full"
          >
            <React.Suspense fallback={<LoadingFallback />}>
              <Outlet />
            </React.Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <footer className="bg-surface border-t border-border mt-auto pt-16 pb-8" role="contentinfo">
        <div className="app-container">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
              <Link to="/" className="flex items-center rounded-md focus-visible:ring-2 focus-visible:ring-primary w-fit">
                <img src={logoImg} alt="Ascope Tech" className="h-20 w-auto rounded-lg object-contain" />
              </Link>
              <p className="text-xs text-text-muted leading-relaxed max-w-sm">
                Next-generation IT services, high-end technical training, and modern recruitment matching on one unified enterprise platform.
              </p>
              
              {/* Contact Details */}
              <div className="flex flex-col gap-2 mt-1 text-[11px] text-text-muted">
                <a href="mailto:ascopetech@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-3.5 w-3.5 text-neutral-400" />
                  <span>ascopetech@gmail.com</span>
                </a>
                <a href="tel:+917418240526" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-3.5 w-3.5 text-neutral-400" />
                  <span>+91 74182 40526</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Ascope Tech, 5th floor, SBRR Square, Anna Nagar, Trichy – 620017</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3.5 mt-2">
                {mockSiteConfig.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-neutral-200 text-neutral-500 hover:text-primary hover:border-primary/30 hover:bg-primary-50/20 transition-all focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`Follow Ascope Tech on ${social.platform}`}
                  >
                    {renderSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Sections */}
            {mockSiteConfig.footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-xs font-bold text-neutral-800 tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-xs text-text-muted hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-light">
              &copy; {new Date().getFullYear()} Ascope Tech Enterprise Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-text-light hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary">
                Privacy
              </Link>
              <Link to="/terms" className="text-xs text-text-light hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary">
                Terms
              </Link>
              <Link to="/sitemap" className="text-xs text-text-light hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default AppLayout;
