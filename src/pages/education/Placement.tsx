import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '@/app/SEOHead';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  Award, 
  Building2, 
  Briefcase, 
  CheckCircle2 
} from 'lucide-react';
import { mockSuccessStories } from '@/mocks/success-stories';
import { cn } from '@/lib/utils';

// Import SVG partner logos from assets/partners
import tcsLogo from '@/assets/partners/tcs.svg';
import infosysLogo from '@/assets/partners/infosys.svg';
import wiproLogo from '@/assets/partners/wipro.svg';
import hclLogo from '@/assets/partners/hcl.svg';
import cognizantLogo from '@/assets/partners/cognizant.svg';
import zohoLogo from '@/assets/partners/zoho.svg';
import hexawareLogo from '@/assets/partners/hexaware.svg';
import capgeminiLogo from '@/assets/partners/capgemini.svg';
import accentureLogo from '@/assets/partners/accenture.svg';
import ltimindtreeLogo from '@/assets/partners/ltimindtree.svg';

export const PlacementPage: React.FC = () => {
  // 10 Global Hiring Partners mapping to imported SVGs
  const partners = [
    { name: "TCS", logo: tcsLogo, className: "h-7 w-auto" },
    { name: "Infosys", logo: infosysLogo, className: "h-6 w-auto" },
    { name: "Wipro", logo: wiproLogo, className: "h-8 w-auto" },
    { name: "HCLTech", logo: hclLogo, className: "h-5 w-auto" },
    { name: "Cognizant", logo: cognizantLogo, className: "h-6 w-auto" },
    { name: "Zoho", logo: zohoLogo, className: "h-5 w-auto" },
    { name: "Hexaware", logo: hexawareLogo, className: "h-6 w-auto" },
    { name: "Capgemini", logo: capgeminiLogo, className: "h-7 w-auto" },
    { name: "Accenture", logo: accentureLogo, className: "h-5 w-auto" },
    { name: "LTI Mindtree", logo: ltimindtreeLogo, className: "h-7 w-auto" }
  ];

  const marqueePartners = [...partners, ...partners, ...partners];

  // Salary progress bars
  const salaryBenchmarks = [
    { domain: "Full Stack Development", range: "₹6 - ₹12 LPA", percent: 80, color: "bg-primary" },
    { domain: "Data Science & Machine Learning", range: "₹8 - ₹15 LPA", percent: 90, color: "bg-info" },
    { domain: "UI/UX Design Specialist", range: "₹5 - ₹10 LPA", percent: 70, color: "bg-warning" },
    { domain: "Cyber Security & Ethical Hacking", range: "₹7 - ₹14 LPA", percent: 85, color: "bg-success" }
  ];

  const [story1, story2, story3, story4, story5] = mockSuccessStories;

  return (
    <>
      <SEOHead title="Placement Statistics" description="Understand graduation placement rates and salary growth stats." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Academy Placements</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Placement Statistics & Outcomes
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Our placement funnel links graduates directly to hiring partners. Compare our career progression metrics below.
            </p>
          </div>

          {/* Core Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <Card className="p-5 flex flex-col justify-between text-xs bg-white border border-border shadow-premium-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Placement Rate</span>
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div className="mt-4">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">95%</span>
                <p className="text-[10px] text-text-muted mt-1 leading-normal">Graduates placed within 180 days</p>
              </div>
            </Card>

            <Card className="p-5 flex flex-col justify-between text-xs bg-white border border-border shadow-premium-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Highest Package</span>
                <Award className="h-4 w-4 text-warning" />
              </div>
              <div className="mt-4">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">₹12 LPA</span>
                <p className="text-[10px] text-text-muted mt-1 leading-normal">Highest salary package secured</p>
              </div>
            </Card>

            <Card className="p-5 flex flex-col justify-between text-xs bg-white border border-border shadow-premium-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Hiring Partners</span>
                <Building2 className="h-4 w-4 text-success" />
              </div>
              <div className="mt-4">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">20+</span>
                <p className="text-[10px] text-text-muted mt-1 leading-normal">Recruiter networks partnered</p>
              </div>
            </Card>

            <Card className="p-5 flex flex-col justify-between text-xs bg-white border border-border shadow-premium-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Average Salary</span>
                <Briefcase className="h-4 w-4 text-info" />
              </div>
              <div className="mt-4">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">₹3.5 LPA</span>
                <p className="text-[10px] text-text-muted mt-1 leading-normal">Average entry-level package bounds</p>
              </div>
            </Card>
          </div>

          {/* Global Hiring Partners Marquee */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-bold text-neutral-800 px-1 text-center sm:text-left">Global Hiring Partners</h3>
            <div className="w-full overflow-hidden py-6 border-y border-border bg-white rounded-2xl relative shadow-inner-soft">
              {/* Fades */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              <motion.div
                className="flex gap-20 items-center w-max px-4"
                animate={{ x: [0, -1400] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 32,
                    ease: "linear",
                  },
                }}
              >
                {marqueePartners.map((partner, idx) => (
                  <div key={idx} className="flex items-center justify-center shrink-0 w-28 h-10">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`} 
                      className={cn(
                        "max-h-full max-w-full object-contain filter grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300", 
                        partner.className
                      )} 
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Interactive Progress Bars */}
          <div className="bg-white border border-border p-6 sm:p-8 rounded-3xl shadow-premium-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-neutral-900">Salary Benchmarks & ROI</h3>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Compares the entry-level package bounds across different engineering domains (based on 2000+ placements).
              </p>
            </div>
            <div className="space-y-5 pt-2">
              {salaryBenchmarks.map((bench) => (
                <div key={bench.domain} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-neutral-800">{bench.domain}</span>
                    <span className="text-primary font-bold">{bench.range}</span>
                  </div>
                  <div className="h-2.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bench.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={cn("h-full rounded-full", bench.color)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories Bento Grid */}
          <div className="space-y-6 pt-4">
            <div>
              <h3 className="text-base font-bold text-neutral-900 px-1">Success Stories</h3>
              <p className="text-xs text-text-muted mt-1 px-1">Discover real student outcomes across top technology sectors.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Story 1 (Arun Prakash) - Large highlight bento card */}
              {story1 && (
                <div className="md:col-span-2 md:row-span-2 bg-neutral-950 text-white p-8 border border-white/10 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-premium-xl group hover:border-white/20 transition-all duration-300">
                  {/* Glowing background */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-info/10 rounded-full blur-3xl pointer-events-none -z-10" />

                  <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-sm text-white font-display">
                          {story1.avatar}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white leading-none">{story1.studentName}</h4>
                          <p className="text-[10px] text-neutral-400 mt-1">
                            {story1.placedRole} @ <span className="text-white font-semibold">{story1.placedCompany}</span>
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1 bg-green-500/10 text-green-400 border border-green-500/20 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        <CheckCircle2 className="h-3 w-3 shrink-0" />
                        <span>Verified Hire</span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed italic">
                      &ldquo;{story1.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-end relative z-10">
                    <div>
                      <span className="text-[9px] text-neutral-400 uppercase tracking-wider block">Course Completed</span>
                      <span className="text-xs font-semibold text-neutral-200 mt-0.5 block">{story1.courseTitle}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-neutral-400 uppercase tracking-wider block">Salary Package</span>
                      <span className="text-lg font-extrabold text-green-400 mt-0.5 block">{story1.salaryIncrease}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Story 2 (Priya Nair) */}
              {story2 && (
                <div className="bg-white border border-border p-6 rounded-3xl flex flex-col justify-between shadow-premium-sm hover:border-primary/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary font-display">
                        {story2.avatar}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900 leading-none">{story2.studentName}</h4>
                        <p className="text-[10px] text-text-muted mt-1 leading-none">
                          {story2.placedRole} @ <span className="text-neutral-800 font-semibold">{story2.placedCompany}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                      &ldquo;{story2.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-100 mt-4 flex justify-between items-end">
                    <div>
                      <span className="text-[9px] text-neutral-400 uppercase tracking-wider block leading-none">Salary Package</span>
                      <span className="text-xs font-bold text-primary mt-1 block leading-none">{story2.salaryIncrease}</span>
                    </div>
                    <span className="text-[9px] text-neutral-400 font-medium">{story2.courseTitle}</span>
                  </div>
                </div>
              )}

              {/* Story 3 (Karthik Sundar) */}
              {story3 && (
                <div className="bg-white border border-border p-6 rounded-3xl flex flex-col justify-between shadow-premium-sm hover:border-primary/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary font-display">
                        {story3.avatar}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900 leading-none">{story3.studentName}</h4>
                        <p className="text-[10px] text-text-muted mt-1 leading-none">
                          {story3.placedRole} @ <span className="text-neutral-800 font-semibold">{story3.placedCompany}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                      &ldquo;{story3.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-100 mt-4 flex justify-between items-end">
                    <div>
                      <span className="text-[9px] text-neutral-400 uppercase tracking-wider block leading-none">Salary Package</span>
                      <span className="text-xs font-bold text-primary mt-1 block leading-none">{story3.salaryIncrease}</span>
                    </div>
                    <span className="text-[9px] text-neutral-400 font-medium">{story3.courseTitle}</span>
                  </div>
                </div>
              )}

              {/* Story 4 (Dinesh Raj) */}
              {story4 && (
                <div className="bg-white border border-border p-6 rounded-3xl flex flex-col justify-between shadow-premium-sm hover:border-primary/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary font-display">
                        {story4.avatar}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900 leading-none">{story4.studentName}</h4>
                        <p className="text-[10px] text-text-muted mt-1 leading-none">
                          {story4.placedRole} @ <span className="text-neutral-800 font-semibold">{story4.placedCompany}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                      &ldquo;{story4.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-100 mt-4 flex justify-between items-end">
                    <div>
                      <span className="text-[9px] text-neutral-400 uppercase tracking-wider block leading-none">Salary Package</span>
                      <span className="text-xs font-bold text-primary mt-1 block leading-none">{story4.salaryIncrease}</span>
                    </div>
                    <span className="text-[9px] text-neutral-400 font-medium">{story4.courseTitle}</span>
                  </div>
                </div>
              )}

              {/* Story 5 (Saranya Kumar) */}
              {story5 && (
                <div className="bg-white border border-border p-6 rounded-3xl flex flex-col justify-between shadow-premium-sm hover:border-primary/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary font-display">
                        {story5.avatar}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900 leading-none">{story5.studentName}</h4>
                        <p className="text-[10px] text-text-muted mt-1 leading-none">
                          {story5.placedRole} @ <span className="text-neutral-800 font-semibold">{story5.placedCompany}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                      &ldquo;{story5.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-100 mt-4 flex justify-between items-end">
                    <div>
                      <span className="text-[9px] text-neutral-400 uppercase tracking-wider block leading-none">Salary Package</span>
                      <span className="text-xs font-bold text-primary mt-1 block leading-none">{story5.salaryIncrease}</span>
                    </div>
                    <span className="text-[9px] text-neutral-400 font-medium">{story5.courseTitle}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PlacementPage;
