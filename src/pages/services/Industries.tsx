import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, HeartPulse, ShoppingBag, Truck, Palmtree, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface IndustryItem {
  icon: React.ReactNode;
  name: string;
  desc: string;
  caseStudyLink: string;
  caseStudyName: string;
  features: string[];
}

export const IndustriesPage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const industries: IndustryItem[] = [
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      name: "Financial Technology (FinTech)",
      desc: "High-frequency payment processing, multi-region database replication, and secure banking portals built on React 19.",
      caseStudyLink: "/case-studies/inbind-technologies",
      caseStudyName: "Inbind Multi-Cloud Migration",
      features: ["PCI-DSS Compliance", "Real-time Audits", "Micro-second Latencies"]
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
      name: "Digital Commerce & Retail",
      desc: "Scalable multi-vendor platforms, instant product search grids, and automated inventory sync networks.",
      caseStudyLink: "/case-studies/eliteapexkart",
      caseStudyName: "EliteApexkart Modernization",
      features: ["Dynamic Cart Grids", "Flash Sale Load-balancing", "Distributed Checkout Cache"]
    },
    {
      icon: <Palmtree className="h-6 w-6 text-primary" />,
      name: "Travel & Hospitality",
      desc: "Real-time travel package bookings, global flight search API aggregations, and customized AI planner systems.",
      caseStudyLink: "/case-studies/heaven11-holidays",
      caseStudyName: "Heaven11 Holiday Portals",
      features: ["Itinerary Generators", "Edge Cache Search", "Instant Bookings API"]
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      name: "Logistics & Supply Chain",
      desc: "Centralized ERP suites, production line tracking dashboards, and stock level warning systems.",
      caseStudyLink: "/case-studies/jilla-clothing-textile",
      caseStudyName: "Jilla Textile Distributed ERP",
      features: ["Material Waste Analysis", "Automated Deliveries Tracking", "Inventory Sync"]
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-primary" />,
      name: "Healthcare & Life Sciences",
      desc: "Secure patient record management, clinical data encryption, and AI semantic document discovery.",
      caseStudyLink: "/case-studies/wanderwish-holidays",
      caseStudyName: "Wanderwish AI Itinerary Planner",
      features: ["HIPAA Standards", "Semantic Search Filters", "Encrypted Data Lakes"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.05 : 0.4, ease: 'easeOut' as const }
    }
  };

  return (
    <>
      <SEOHead title="Industries Served" description="Explore the industry verticals where we deploy bespoke software, cloud operations, and recruitment pipelines." />
      <div className="py-16 bg-surface/30 min-h-[80vh]">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Industry Verticals</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Enterprise Domains
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              We engineer custom software systems and placement strategies tailored to the unique regulatory and operational needs of major industries.
            </p>
          </div>

          {/* Grid listing */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={cardVariants}
                className="rounded-2xl bg-white border border-border p-6 shadow-premium-sm hover:shadow-premium-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary-50 rounded-xl border border-primary/10">
                      {industry.icon}
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900 tracking-tight leading-snug">
                      {industry.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-text-muted leading-relaxed">
                    {industry.desc}
                  </p>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {industry.features.map((feature) => (
                      <span key={feature} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case study callout */}
                <div className="border-t border-neutral-100/50 pt-4 mt-6 space-y-2">
                  <span className="text-[9px] text-text-light font-bold uppercase tracking-wider block">Featured Project</span>
                  <Link 
                    to={industry.caseStudyLink} 
                    className="group flex items-center justify-between text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    <span className="truncate max-w-[85%]">{industry.caseStudyName}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default IndustriesPage;
