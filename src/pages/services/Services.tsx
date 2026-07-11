import React from 'react';
import { motion } from 'framer-motion';
import { mockServices } from '@/mocks/services';
import { ServiceCard } from '@/components/services/ServiceCard';
import SEOHead from '@/app/SEOHead';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Target, Zap } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const ServicesPage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const engagementModels = [
    {
      title: "Dedicated Squads",
      desc: "A fully-managed engineering team composed of a Tech Lead, Senior Developers, and a UI/UX Designer working exclusively on your product.",
      bestFor: "Building major new products or scaling core SaaS platforms over a long-term roadmap.",
      icon: <Users className="h-5 w-5 text-primary" />,
      tag: "Long-Term Velocity"
    },
    {
      title: "Project-Based (Fixed Scope)",
      desc: "A defined statement of work with concrete milestones, strict deliverables, and fixed pricing agreed upon before the start.",
      bestFor: "Exploratory MVPs, legacy migrations, or localized integrations.",
      icon: <Target className="h-5 w-5 text-info" />,
      tag: "Defined Delivery"
    },
    {
      title: "Staff Augmentation",
      desc: "Senior engineering talent that joins your existing developer stand-ups directly, reporting to your engineering management.",
      bestFor: "Quickly filling skill gaps, accelerating milestones, or handling sudden scale challenges.",
      icon: <Zap className="h-5 w-5 text-success" />,
      tag: "Rapid Team Extension"
    }
  ];

  return (
    <>
      <SEOHead title="IT Consulting Services" description="Compare our bespoke software development, cloud infrastructure operations, and AI integration services." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-20">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Enterprise Services</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Bespoke Software Consulting
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              We design, build, and deploy premium enterprise web architectures, automated cloud operations, and custom intelligence tools.
            </p>
          </div>

          {/* Grid listing core services */}
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-neutral-900 px-1 border-l-4 border-primary">
              Core Engineering Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {mockServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Engagement Models section */}
          <div className="space-y-8 pt-6 border-t border-border">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Flexible Operations</span>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-neutral-900">
                Engagement Models
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl">
                Ascope Tech offers three operational structures to match different client scopes and development roadmaps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {engagementModels.map((model, idx) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <Card className="flex flex-col justify-between h-full group hover:border-primary/20 transition-all duration-300 relative overflow-hidden bg-white">
                    {/* Top Accent Ribbon */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-primary/30 to-info/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 bg-neutral-50 border border-neutral-100 rounded-xl shadow-inner-soft shrink-0">
                          {model.icon}
                        </div>
                        <span className="text-[9px] font-bold text-primary px-2 py-0.5 rounded-full bg-primary-50 border border-primary-100/30 uppercase tracking-wider">
                          {model.tag}
                        </span>
                      </div>
                      <CardTitle className="text-base font-bold text-neutral-900 tracking-tight leading-snug">
                        {model.title}
                      </CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        {model.desc}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-4 border-t border-neutral-100/50 mt-4 bg-neutral-50/50 flex flex-col gap-2">
                      <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">Best For:</span>
                      <p className="text-xs font-semibold text-neutral-700 leading-relaxed">
                        {model.bestFor}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;
