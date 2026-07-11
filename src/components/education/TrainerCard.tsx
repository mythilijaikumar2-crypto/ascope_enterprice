import React from 'react';
import { Linkedin } from 'lucide-react';
import type { Trainer } from '@/mocks/trainers';

export interface TrainerCardProps {
  trainer: Trainer;
}

export const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  return (
    <div className="p-6 rounded-2xl bg-white border border-border shadow-premium-sm hover:shadow-premium-md transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-display font-extrabold text-lg shadow-inner-soft">
            {trainer.avatar}
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-900 leading-snug">
              {trainer.name}
            </h3>
            <p className="text-[11px] text-primary font-semibold leading-none mt-1">
              {trainer.role}
            </p>
          </div>
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

      <div className="pt-4 border-t border-neutral-100/50 mt-4 flex items-center justify-between">
        <a
          href={trainer.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary p-1 rounded-md"
          aria-label={`Visit ${trainer.name}'s LinkedIn profile`}
        >
          <Linkedin className="h-4.5 w-4.5" />
        </a>
      </div>
    </div>
  );
};
export default TrainerCard;
