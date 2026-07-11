import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Input, useToast } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

export interface SkillMasterTableProps {
  initialSkills: string[];
}

export const SkillMasterTable: React.FC<SkillMasterTableProps> = ({ initialSkills }) => {
  const { toast } = useToast();
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newSkill.trim();
    if (!trimmed) return;

    if (skills.includes(trimmed)) {
      toast({
        title: "Skill Exists",
        description: `"${trimmed}" is already in the master skill directory.`,
        variant: "warning"
      });
      return;
    }

    setSkills((prev) => [...prev, trimmed]);
    setNewSkill('');
    toast({
      title: "Skill Added",
      description: `"${trimmed}" added successfully to system master data.`,
      variant: "success"
    });
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills((prev) => prev.filter((s) => s !== skillToRemove));
    toast({
      title: "Skill Removed",
      description: `"${skillToRemove}" deleted from master records.`,
      variant: "info"
    });
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        
        {/* Add Skill Form */}
        <form onSubmit={handleAddSkill} className="space-y-2">
          <label htmlFor="master-skill-input" className="text-xs font-bold text-neutral-700 block">
            Add Master System Skill
          </label>
          <div className="flex gap-2">
            <Input
              id="master-skill-input"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="e.g. GraphQL, SvelteKit..."
              className="h-9.5 text-xs"
            />
            <button
              type="submit"
              className="px-4 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors shrink-0"
            >
              <Plus className="h-4 w-4" />
              Add Skill
            </button>
          </div>
        </form>

        {/* Roster Table Grid */}
        <div className="border border-border rounded-xl overflow-hidden bg-white shadow-premium-sm">
          <table className="w-full border-collapse text-left text-xs font-semibold text-neutral-700">
            <thead className="bg-surface text-neutral-600 border-b border-border">
              <tr>
                <th className="px-5 py-3 w-10 text-center">#</th>
                <th className="px-5 py-3">Skill Tag Name</th>
                <th className="px-5 py-3 w-20 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {skills.map((skill, idx) => (
                <tr key={skill} className="hover:bg-surface/30 transition-colors">
                  <td className="px-5 py-3 text-center text-text-light font-bold">
                    {idx + 1}
                  </td>
                  <td className="px-5 py-3 text-neutral-800 text-xs font-bold">
                    {skill}
                  </td>
                  <td className="px-5 py-3 text-center">
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="p-1.5 border border-border hover:border-error/20 hover:bg-error-50/10 text-neutral-400 hover:text-error rounded-lg transition-all"
                      aria-label={`Delete skill ${skill} from master database`}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </CardContent>
    </Card>
  );
};
export default SkillMasterTable;
