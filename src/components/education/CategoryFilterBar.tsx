import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input, Select, Checkbox } from '@/components/ui';

export interface FilterState {
  search: string;
  categories: string[];
  level: string;
  mode: string;
}

export interface CategoryFilterBarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  availableCategories: { label: string; slug: string }[];
  onReset: () => void;
}

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  filters,
  onFiltersChange,
  availableCategories,
  onReset,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, search: e.target.value });
  };

  const handleCategoryToggle = (slug: string) => {
    const isSelected = filters.categories.includes(slug);
    const updatedCategories = isSelected
      ? filters.categories.filter((c) => c !== slug)
      : [...filters.categories, slug];
    onFiltersChange({ ...filters, categories: updatedCategories });
  };

  const handleSelectChange = (key: 'level' | 'mode', value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white border border-border p-6 rounded-2xl shadow-premium-sm space-y-6">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
        <h3 className="text-sm font-bold text-neutral-800 flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Filter Catalog
        </h3>
        <button
          onClick={onReset}
          className="text-[10px] font-bold text-neutral-400 hover:text-primary transition-colors"
        >
          Reset Filters
        </button>
      </div>

      {/* Search Input */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-neutral-700">Keyword Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search bootcamps..."
            className="pl-9 h-9 text-xs"
          />
        </div>
      </div>

      {/* Category Multi-Select Checkboxes */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-neutral-700 block">Category</label>
        <div className="flex flex-col gap-2.5">
          {availableCategories.map((cat) => (
            <Checkbox
              key={cat.slug}
              checked={filters.categories.includes(cat.slug)}
              onChange={() => handleCategoryToggle(cat.slug)}
              label={cat.label}
              className="h-3.5 w-3.5"
            />
          ))}
        </div>
      </div>

      {/* Dropdown Filters */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-neutral-700 block">Course Level</label>
          <Select
            value={filters.level}
            onChange={(e) => handleSelectChange('level', e.target.value)}
            className="h-8.5 text-xs py-1 px-2"
          >
            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-neutral-700 block">Study Mode</label>
          <Select
            value={filters.mode}
            onChange={(e) => handleSelectChange('mode', e.target.value)}
            className="h-8.5 text-xs py-1 px-2"
          >
            <option value="all">All Modes</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </Select>
        </div>
      </div>
    </div>
  );
};
export default CategoryFilterBar;
