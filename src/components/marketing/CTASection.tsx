import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBgVideo from '@/assets/56209-479197484.mp4';

export const CTASection: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Load the heavy video source asynchronously after mount to prevent blocking page load
    const timer = setTimeout(() => {
      setVideoSrc(heroBgVideo);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden bg-neutral-950/75 backdrop-blur-xl border border-white/10 p-8 sm:p-16 text-center text-white shadow-premium-2xl">
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
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-neutral-950/65 -z-10" />

      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-info-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto space-y-6 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
          Ready to engineer your next software solution?
        </h2>
        <p className="text-sm text-primary-100/80 leading-relaxed max-w-xl mx-auto">
          We align senior developers, rigorous design frameworks, and agile management to scale your operations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/contact-sales"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-premium-md hover:scale-[1.01] transition-all"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact-sales"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl border border-white/10 text-sm font-semibold transition-all"
          >
            Consult with Sales
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
