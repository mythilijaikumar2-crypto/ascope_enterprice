import React, { useState } from 'react';
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import type { LeaderProfile } from '@/mocks/leadership';
import { cn } from '@/lib/utils';

export interface LeadershipCardProps {
  member: LeaderProfile;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 rounded-2xl bg-white border border-border/80 shadow-premium-sm hover:shadow-premium-md transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Profile Avatar Header */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-display font-extrabold text-lg shadow-inner-soft">
            {member.avatar}
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-900 leading-snug">
              {member.name}
            </h3>
            <p className="text-[11px] text-primary font-semibold leading-none mt-1">
              {member.role}
            </p>
          </div>
        </div>

        {/* Truncated Bio */}
        <div>
          <p
            className={cn(
              "text-xs text-text-muted leading-relaxed transition-all duration-200",
              !expanded && "line-clamp-2"
            )}
          >
            {member.bio}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1.5 inline-flex items-center gap-0.5 text-[10px] font-bold text-primary hover:text-primary-hover focus-visible:outline-none"
            aria-expanded={expanded}
          >
            {expanded ? (
              <>
                Read Less
                <ChevronUp className="h-3 w-3" />
              </>
            ) : (
              <>
                Read Bio
                <ChevronDown className="h-3 w-3" />
              </>
            )}
          </button>
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-100/50 mt-4 flex items-center justify-between">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary p-1 rounded-md"
          aria-label={`Visit ${member.name}'s LinkedIn profile`}
        >
          <Linkedin className="h-4.5 w-4.5" />
        </a>
      </div>
    </div>
  );
};
export default LeadershipCard;
