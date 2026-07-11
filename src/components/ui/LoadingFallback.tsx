import React from 'react';

export const LoadingFallback: React.FC = () => {
  return (
    <div className="min-h-[50vh] w-full flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-300">
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="absolute w-12 h-12 rounded-full border-4 border-primary/20 animate-ping duration-1000" />
        {/* Inner spinner */}
        <div className="w-8 h-8 rounded-full border-4 border-neutral-200 border-t-primary animate-spin" />
      </div>
      <p className="text-[10px] text-text-light font-bold uppercase tracking-widest animate-pulse">
        Loading Page
      </p>
    </div>
  );
};

export default LoadingFallback;
