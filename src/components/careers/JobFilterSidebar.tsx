import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input, Select, Checkbox, Radio } from '@/components/ui';

export interface JobFilters {
  search: string;
  departments: string[];
  experienceLevel: string;
  mode: string;
}

export interface JobFilterSidebarProps {
  filters: JobFilters;
  onFiltersChange: (filters: JobFilters) => void;
  availableDepartments: string[];
  onReset: () => void;
}

export const JobFilterSidebar: React.FC<JobFilterSidebarProps> = ({
  filters,
  onFiltersChange,
  availableDepartments,
  onReset,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, search: e.target.value });
  };

  const handleDeptToggle = (dept: string) => {
    const isSelected = filters.departments.includes(dept);
    const updated = isSelected
      ? filters.departments.filter((d) => d !== dept)
      : [...filters.departments, dept];
    onFiltersChange({ ...filters, departments: updated });
  };

  const handleSelectChange = (key: 'experienceLevel' | 'mode', value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white border border-border p-6 rounded-2xl shadow-premium-sm space-y-6">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
        <h3 className="text-sm font-bold text-neutral-800 flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Filter Positions
        </h3>
        <button
          onClick={onReset}
          className="text-[10px] font-bold text-neutral-400 hover:text-primary transition-colors"
        >
          Reset Filters
        </button>
      </div>

      {/* Keyword Search */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-neutral-700">Keyword Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search job roles..."
            className="pl-9 h-9 text-xs"
          />
        </div>
      </div>

      {/* Department Checklist */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-neutral-700 block">Department</label>
        <div className="flex flex-col gap-2.5">
          {availableDepartments.map((dept) => (
            <Checkbox
              key={dept}
              checked={filters.departments.includes(dept)}
              onChange={() => handleDeptToggle(dept)}
              label={dept}
              className="h-3.5 w-3.5"
            />
          ))}
        </div>
      </div>

      {/* Experience Select */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-neutral-700 block">Experience Level</label>
        <Select
          value={filters.experienceLevel}
          onChange={(e) => handleSelectChange('experienceLevel', e.target.value)}
          className="h-8.5 text-xs py-1 px-2"
        >
          <option value="all">All Experience Levels</option>
          <option value="Entry">Entry Level</option>
          <option value="Mid">Mid Level</option>
          <option value="Senior">Senior Level</option>
          <option value="Lead">Lead Level</option>
        </Select>
      </div>

      {/* Mode Radios */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-neutral-700 block">Workplace Mode</label>
        <div className="flex flex-col gap-2.5 text-xs">
          <Radio
            checked={filters.mode === 'all'}
            onChange={() => handleSelectChange('mode', 'all')}
            label="All Modes"
            name="job-mode"
          />
          <Radio
            checked={filters.mode === 'Remote'}
            onChange={() => handleSelectChange('mode', 'Remote')}
            label="Remote Only"
            name="job-mode"
          />
          <Radio
            checked={filters.mode === 'On-site'}
            onChange={() => handleSelectChange('mode', 'On-site')}
            label="On-site Only"
            name="job-mode"
          />
          <Radio
            checked={filters.mode === 'Hybrid'}
            onChange={() => handleSelectChange('mode', 'Hybrid')}
            label="Hybrid Only"
            name="job-mode"
          />
        </div>
      </div>
    </div>
  );
};
export default JobFilterSidebar;
