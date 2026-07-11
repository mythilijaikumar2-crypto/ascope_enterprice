import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Database, Cpu, Server } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import heroBgVideo from '@/assets/56209-479197484.mp4';
import { cn } from '@/lib/utils';

interface TypingHeadingProps {
  text1: string;
  text2: string;
  prefersReducedMotion: boolean;
}

const TypingHeading: React.FC<TypingHeadingProps> = ({ text1, text2, prefersReducedMotion }) => {
  if (prefersReducedMotion) {
    return (
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold rainbow-text-animate tracking-tight leading-[1.1]">
        {text1} {text2}
      </h1>
    );
  }

  const chars1 = text1.split("");
  const chars2 = text2.split("");

  const container1 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      }
    }
  };

  const container2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: chars1.length * 0.03 + 0.1,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold rainbow-text-animate tracking-tight leading-[1.1]">
      <motion.span variants={container1} initial="hidden" animate="visible" style={{ display: 'inline' }}>
        {chars1.map((char, index) => (
          <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
            {char}
          </motion.span>
        ))}
      </motion.span>{' '}
      <motion.span
        variants={container2}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline' }}
      >
        {chars2.map((char, index) => (
          <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  );
};

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [videoSrc, setVideoSrc] = React.useState<string | undefined>(undefined);
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  React.useEffect(() => {
    // Load the heavy video source asynchronously after mount to prevent blocking page load
    const timer = setTimeout(() => {
      setVideoSrc(heroBgVideo);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.05 : 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const cards = [
    {
      phase: "Planning",
      title: "Architecture Design",
      desc: "Robust diagrams before code. We specify schemas and load limits first.",
      color: "from-blue-600/20 to-sky-500/20 border-blue-500/30 text-blue-400",
      icon: <Database className="h-5 w-5 text-blue-400" />
    },
    {
      phase: "Execution",
      title: "Elite Development",
      desc: "Senior TypeScript developers writing clean, strict-typed React components.",
      color: "from-violet-600/20 to-purple-500/20 border-violet-500/30 text-violet-400",
      icon: <Cpu className="h-5 w-5 text-violet-400" />
    },
    {
      phase: "DevOps",
      title: "CI/CD & Kubernetes",
      desc: "Automated scaling infrastructures built for high uptime and cost-efficiency.",
      color: "from-emerald-600/20 to-green-500/20 border-emerald-500/30 text-emerald-400",
      icon: <Server className="h-5 w-5 text-emerald-400" />
    }
  ];

  return (
    <div className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-24 -mt-24 bg-transparent isolate">
      {/* Background Video */}
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-20 animate-in fade-in duration-500"
        />
      )}
      {/* Dark overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/60 -z-10" />
      
      {/* Drifting Glow Circles */}
      <motion.div
        animate={prefersReducedMotion ? {} : {
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={prefersReducedMotion ? {} : {
          x: [0, -30, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-info-500/10 rounded-full blur-3xl -z-10"
      />

      <div className="app-container max-w-6xl z-10 pt-16 sm:pt-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary-500/20 text-xs font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Enterprise IT Consulting
            </motion.div>

            {/* Headline */}
            <TypingHeading 
              text1="Engineering Scalable Software" 
              text2="for Ambitious Businesses" 
              prefersReducedMotion={prefersReducedMotion} 
            />

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-xl"
            >
              We design, build, and deploy elite digital products for ambitious enterprises. Transform your business workflows with high-performance engineering.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <Link
                to="/contact-sales"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-premium-md hover:shadow-premium-lg hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-white"
              >
                <Play className="h-4 w-4 fill-current text-neutral-300" />
                See our work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column (Interactive Stacked Cards Deck) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative h-[360px] sm:h-[400px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[340px] h-full flex flex-col justify-center select-none">
              {cards.map((card, idx) => {
                const isHovered = hoveredCard === idx;
                const isAnyHovered = hoveredCard !== null;

                return (
                  <motion.div
                    key={idx}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    animate={{
                      y: isHovered ? -35 : (idx - 1) * 75,
                      x: isHovered ? -15 : 0,
                      scale: isHovered ? 1.05 : (isAnyHovered ? 0.94 : 1),
                      rotate: isHovered ? 0 : (idx - 1) * 3,
                      zIndex: isHovered ? 30 : 10 + idx,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className={cn(
                      "absolute inset-x-0 mx-auto p-5 rounded-2xl border bg-neutral-950/85 backdrop-blur-md shadow-premium-lg flex gap-4 text-left transition-colors duration-300 cursor-pointer",
                      isHovered ? "border-primary/50 shadow-primary/10" : "border-white/10"
                    )}
                  >
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit h-fit shrink-0">
                      {card.icon}
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">
                        {card.phase}
                      </span>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-[10px] text-neutral-300 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
