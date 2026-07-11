import React from 'react';
import { Calendar } from 'lucide-react';
import { Select } from '@/components/ui';

export interface DateRangeFilterProps {
  value: 'last-7' | 'last-30';
  onChange: (value: 'last-7' | 'last-30') => void;
}

export const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Calendar className="h-4 w-4 text-neutral-400 shrink-0" />
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value as 'last-7' | 'last-30')}
        className="h-9 text-xs py-1 px-2.5 min-w-[140px]"
        aria-label="Select report date range preset"
      >
        <option value="last-7">Last 7 Days</option>
        <option value="last-30">Last 30 Days</option>
      </Select>
    </div>
  );
};
export default DateRangeFilter;
