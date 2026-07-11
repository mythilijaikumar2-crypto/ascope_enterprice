import React from 'react';
import * as Lucide from 'lucide-react';
import type { Trainer } from '@/mocks/trainers';
import { cn } from '@/lib/utils';

export interface TrainerCardProps {
  trainer: Trainer;
}

const renderLucideIcon = (name: string, className?: string) => {
  const IconComponent = (Lucide as any)[name];
  if (!IconComponent) {
    const camelName = name.charAt(0).toUpperCase() + name.slice(1);
    const FallbackComponent = (Lucide as any)[camelName];
    if (FallbackComponent) return <FallbackComponent className={className} />;
    return <Lucide.Code className={className} />;
  }
  return <IconComponent className={className} />;
};

const getAvatarIcon = (slug: string) => {
  switch (slug) {
    case 'code':
      return <Lucide.Code className="h-7 w-7 text-white animate-pulse" />;
    case 'server':
      return <Lucide.Server className="h-7 w-7 text-white" />;
    case 'palette':
      return <Lucide.Palette className="h-7 w-7 text-white" />;
    case 'trending-up':
      return <Lucide.TrendingUp className="h-7 w-7 text-white" />;
    case 'brain':
      return <Lucide.Brain className="h-7 w-7 text-white" />;
    case 'shield':
      return <Lucide.Shield className="h-7 w-7 text-white" />;
    default:
      return <Lucide.User className="h-7 w-7 text-white" />;
  }
};

export const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  return (
    <div className="group rounded-2xl bg-white border border-border shadow-premium-sm hover:shadow-premium-md transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
      <div className="space-y-4">
        {/* Banner Section with Floating Icons */}
        <div className={cn("h-24 w-full relative overflow-hidden flex items-center justify-between px-6 isolate", trainer.bgClass)}>
          {/* Floating background shapes / overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent -z-10" />
          
          {/* Render 4 floating icons absolute positioned */}
          {trainer.floatingIcons.map((icon, idx) => {
            const positions = [
              "top-2 left-6",
              "top-4 right-10",
              "bottom-3 left-1/3",
              "bottom-4 right-6"
            ];
            const animationClasses = [
              "animate-float-icon-1",
              "animate-float-icon-2",
              "animate-float-icon-3",
              "animate-float-icon-4"
            ];
            return (
              <div 
                key={idx} 
                className={cn("absolute text-white/20 pointer-events-none -z-10", positions[idx], animationClasses[idx])}
              >
                {renderLucideIcon(icon, "h-5 w-5")}
              </div>
            );
          })}

          <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">
            Ascope Faculty
          </span>
        </div>

        {/* Card Content Wrapper */}
        <div className="px-6 pb-2 space-y-4 -mt-10 relative z-10">
          {/* Profile & Avatar Row */}
          <div className="flex items-end gap-3.5">
            {/* Central Rotating Avatar */}
            <div className={cn(
              "w-16 h-16 rounded-full border-4 border-white shadow-premium-md flex items-center justify-center transition-transform duration-700 group-hover:rotate-360 shrink-0",
              trainer.bgClass
            )}>
              {getAvatarIcon(trainer.avatarIcon)}
            </div>
            <div className="pb-1">
              <h3 className="text-base font-bold text-neutral-900 leading-snug tracking-tight">
                {trainer.name}
              </h3>
              <p className="text-xs font-semibold text-primary mt-0.5 leading-none">
                {trainer.role}
              </p>
            </div>
          </div>

          {/* Affiliation info */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-50 border border-neutral-100 text-[10px] font-semibold text-neutral-500">
            <Lucide.Briefcase className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
            <span>{trainer.affiliation}</span>
          </div>

          {/* Bio */}
          <p className="text-xs text-text-muted leading-relaxed">
            {trainer.bio}
          </p>

          {/* Skills Tag List */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {trainer.skills.map((skill) => (
              <span
                key={skill}
                className="text-[9px] font-bold bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded text-neutral-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-neutral-100/50 mt-4 flex items-center justify-between bg-neutral-50/50">
        <a
          href={trainer.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary p-1 rounded-md flex items-center gap-1.5 text-xs font-bold"
          aria-label={`Visit ${trainer.name}'s LinkedIn profile`}
        >
          <Lucide.Linkedin className="h-4.5 w-4.5" />
          <span>Connect</span>
        </a>
      </div>
    </div>
  );
};

export default TrainerCard;
