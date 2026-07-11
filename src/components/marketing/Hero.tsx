import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import heroBgVideo from '@/assets/56209-479197484.mp4';

interface TypingHeadingProps {
  text1: string;
  text2: string;
  prefersReducedMotion: boolean;
}

const TypingHeading: React.FC<TypingHeadingProps> = ({ text1, text2, prefersReducedMotion }) => {
  if (prefersReducedMotion) {
    return (
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold rainbow-text-animate tracking-tight leading-[1.05]">
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
    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold rainbow-text-animate tracking-tight leading-[1.05]">
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.05 : 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 -mt-24 bg-transparent isolate">
      {/* Background Video */}
      <video
        src={heroBgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      {/* Dark overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/55 -z-10" />
      
      {/* Drifting Glow Circles */}
      <motion.div
        animate={prefersReducedMotion ? {} : {
          x: [0, 50, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/10 w-120 h-120 bg-primary-100/25 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={prefersReducedMotion ? {} : {
          x: [0, -40, 30, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/10 w-120 h-120 bg-info-100/15 rounded-full blur-3xl -z-10"
      />



      <div className="app-container max-w-5xl text-center z-10 pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Animated Tagline Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100/50 text-xs font-semibold text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Empowering Modern Tech Ecosystems
          </motion.div>

          {/* Heading with Letters Typing Effect */}
          <TypingHeading 
            text1="One Platform to Build" 
            text2="Systems & Careers" 
            prefersReducedMotion={prefersReducedMotion} 
          />

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-200 leading-relaxed"
          >
            Ascope Tech integrates bespoke enterprise IT consulting, professional education bootcamps, and candidate talent pipelines on a single unified platform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              to="/careers/jobs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-premium-md hover:shadow-premium-lg hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact-sales"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border bg-white hover:bg-surface text-neutral-700 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Play className="h-4 w-4 fill-current" />
              Contact Sales
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
