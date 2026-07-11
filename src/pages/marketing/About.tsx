import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '@/app/SEOHead';
import { Card } from '@/components/ui/card';
import { mockLeadership } from '@/mocks/leadership';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Shield, Eye, Heart, Calendar, Briefcase, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const values = [
    {
      title: "Rigorous Standards",
      desc: "We don't cut corners. Our code compiles under strict types and goes through exhaustive regression tests.",
      icon: <Shield className="h-5 w-5 text-primary" />
    },
    {
      title: "Radical Transparency",
      desc: "Clients have access to our direct Jira boards, Slack channels, and code repositories from day one.",
      icon: <Eye className="h-5 w-5 text-info" />
    },
    {
      title: "Client Success First",
      desc: "We measure our engineering performance by the business results and uptime delivered to clients.",
      icon: <Heart className="h-5 w-5 text-success" />
    }
  ];

  const timelineEvents = [
    {
      year: "2021",
      title: "Ascope Tech Founded",
      desc: "Started operations with 3 senior engineers targeting high-load SaaS platforms and corporate network optimizations."
    },
    {
      year: "2023",
      title: "Scaling Operations",
      desc: "Expanded the team to over 30 engineers and designers, establishing dedicated UI/UX Design and DevOps departments."
    },
    {
      year: "2025",
      title: "Global Footprint",
      desc: "Opened new international engineering delivery hubs in California and Eastern Europe to scale support grids."
    }
  ];

  return (
    <>
      <SEOHead title="About Us - Ascope Tech" description="Learn about Ascope Tech's foundations, executive leadership, timeline, and core values." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-20">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Our Mission & Vision</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              About Ascope Tech
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-2xl mx-auto">
              We align senior software engineers, rigorous design frameworks, and agile management to scale client operations.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-white border border-border shadow-premium-sm p-6 sm:p-8 space-y-4">
                <div className="inline-flex p-3 bg-primary/10 rounded-2xl">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-neutral-900">Our Mission</h2>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  To build high-performance software systems that empower ambitious businesses to scale. We deliver clean architecture, clear documentation, and bulletproof deployment pipelines.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-white border border-border shadow-premium-sm p-6 sm:p-8 space-y-4">
                <div className="inline-flex p-3 bg-info/10 rounded-2xl">
                  <Eye className="h-6 w-6 text-info" />
                </div>
                <h2 className="text-xl font-bold text-neutral-900">Our Vision</h2>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  To become the global standard for custom product development—known for engineering rigor, transparent project workflows, and outstanding visual execution.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className="space-y-8 pt-6 border-t border-border">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Our Principles</span>
              <h2 className="text-2xl font-display font-extrabold text-neutral-900">Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white border border-border p-6 shadow-premium-sm space-y-4">
                    <div className="p-2.5 bg-neutral-50 border border-neutral-100 rounded-xl w-fit shadow-inner-soft">
                      {val.icon}
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900">{val.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{val.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="space-y-8 pt-6 border-t border-border">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Expert Staff</span>
              <h2 className="text-2xl font-display font-extrabold text-neutral-900">Executive Leadership</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockLeadership.map((leader, idx) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white border border-border p-6 shadow-premium-sm flex flex-col justify-between group hover:border-primary/20 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-extrabold text-primary text-sm shadow-inner-soft shrink-0">
                          {leader.avatar}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-neutral-900 leading-none">{leader.name}</h4>
                          <p className="text-[10px] text-primary font-semibold mt-1 leading-none">{leader.role}</p>
                        </div>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">{leader.bio}</p>
                    </div>
                    <div className="pt-4 border-t border-neutral-100/50 mt-4">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-neutral-400 hover:text-primary transition-colors flex items-center gap-1.5"
                      >
                        <Briefcase className="h-3.5 w-3.5" />
                        <span>View Credentials</span>
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-8 pt-6 border-t border-border">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Our History</span>
              <h2 className="text-2xl font-display font-extrabold text-neutral-900">Company Timeline</h2>
            </div>
            
            <div className="relative border-l border-border ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-3 md:gap-8 pt-4 space-y-8 md:space-y-0">
              {timelineEvents.map((evt, idx) => (
                <motion.div
                  key={evt.year}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative pl-6 md:pl-0 md:text-center space-y-3"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-1.5 -left-1.5 md:left-1/2 md:-translate-x-1.5 w-3.5 h-3.5 rounded-full bg-primary border-4 border-white shadow-premium-sm" />
                  
                  <div className="text-lg font-extrabold text-primary font-display flex items-center md:justify-center gap-1">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>{evt.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">{evt.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed max-w-xs md:mx-auto">{evt.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutPage;
