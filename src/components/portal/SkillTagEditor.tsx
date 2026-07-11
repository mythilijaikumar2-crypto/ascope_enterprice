import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { Input, useToast } from '@/components/ui';

export interface SkillTagEditorProps {
  skills: string[];
  onChange: (updatedSkills: string[]) => void;
}

const BRAND_SUGGESTIONS = [
  "React 19", "Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion",
  "Node.js", "Express", "Docker", "Kubernetes", "AWS", "Terraform",
  "PyTorch", "Python", "Vector Databases", "LLM Fine-Tuning"
];

export const SkillTagEditor: React.FC<SkillTagEditorProps> = ({ skills, onChange }) => {
  const { toast } = useToast();
  const [inputValue, setInputValue] = useState('');

  const handleAddSkill = (skillName: string) => {
    const trimmed = skillName.trim();
    if (!trimmed) return;

    if (skills.includes(trimmed)) {
      toast({
        title: "Skill Exists",
        description: `"${trimmed}" is already added to your profile.`,
        variant: "warning"
      });
      return;
    }

    const updated = [...skills, trimmed];
    onChange(updated);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill(inputValue);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updated = skills.filter((s) => s !== skillToRemove);
    onChange(updated);
  };

  return (
    <div className="space-y-6 bg-white border border-border p-6 rounded-2xl shadow-premium-sm">
      {/* Input controls */}
      <div className="space-y-2">
        <label htmlFor="skill-input" className="text-xs font-bold text-neutral-700 block">
          Add Custom Skills (Press Enter to Add)
        </label>
        <div className="flex gap-2">
          <Input
            id="skill-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. Next.js"
            className="h-9.5 text-xs"
          />
          <button
            type="button"
            onClick={() => handleAddSkill(inputValue)}
            className="px-3 bg-primary hover:bg-primary-hover text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <Plus className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>

      {/* Active Tags list */}
      <div className="space-y-2">
        <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">Active Profile Skills ({skills.length})</span>
        {skills.length === 0 ? (
          <p className="text-xs text-text-light italic">No skills listed yet. Add skills or select suggestions below.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 bg-primary-50 border border-primary/20 text-primary font-bold text-xs px-2.5 py-1 rounded-xl shadow-premium-sm"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="hover:bg-primary-100 rounded p-0.5"
                  aria-label={`Remove skill tag ${skill}`}
                >
                  <X className="h-3 w-3 shrink-0" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Suggestions block */}
      <div className="space-y-3 pt-4 border-t border-neutral-100">
        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
          Brand Recommended Skill Suggestions
        </span>
        <div className="flex flex-wrap gap-1.5">
          {BRAND_SUGGESTIONS.map((sug) => {
            const isAdded = skills.includes(sug);
            return (
              <button
                key={sug}
                type="button"
                disabled={isAdded}
                onClick={() => handleAddSkill(sug)}
                className={`text-[10px] font-bold border px-2.5 py-1 rounded-lg transition-colors focus-visible:outline-none ${
                  isAdded
                    ? "bg-neutral-50 text-neutral-300 border-neutral-200 cursor-not-allowed"
                    : "bg-white text-neutral-500 border-border hover:border-primary/30 hover:text-primary"
                }`}
              >
                {sug}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
export default SkillTagEditor;
