import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCandidates, type CandidateRecord } from '@/mocks/candidates';
import { DataTable, type Column } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';
import { Select } from '@/components/ui';
import { cn } from '@/lib/utils';
import SEOHead from '@/app/SEOHead';

export const CandidatesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState<string>('all');

  // Filter dataset by department first, then pass to DataTable which handles keyword searching
  const filteredCandidates = useMemo(() => {
    if (selectedDept === 'all') return mockCandidates;
    return mockCandidates.filter((c) => c.department === selectedDept);
  }, [selectedDept]);

  // Define Columns
  const columns: Column<CandidateRecord>[] = useMemo(() => [
    {
      header: "Candidate Name",
      accessorKey: "name",
      sortable: true,
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-display font-extrabold text-[11px] text-neutral-600 shrink-0">
            {row.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <span className="font-bold text-neutral-900 block leading-tight">{row.name}</span>
            <span className="text-[10px] text-text-light">{row.email}</span>
          </div>
        </div>
      )
    },
    {
      header: "Role Headline",
      accessorKey: "title",
      sortable: true
    },
    {
      header: "Department",
      accessorKey: "department",
      sortable: true
    },
    {
      header: "Stage",
      accessorKey: "status",
      sortable: true,
      cell: (row) => {
        const colors = {
          Applied: "bg-neutral-100 text-neutral-600 border-neutral-200",
          Screening: "bg-info-50 text-info border-info/15",
          Interviewing: "bg-primary-50 text-primary border-primary/15",
          Offered: "bg-success-50 text-success border-success/15",
          Closed: "bg-error-50 text-error border-error/15"
        };
        return (
          <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border", colors[row.status])}>
            {row.status}
          </span>
        );
      }
    },
    {
      header: "AI Match Score",
      accessorKey: "score",
      sortable: true,
      cell: (row) => (
        <span className={cn(
          "font-display font-bold text-xs",
          row.score >= 90 ? "text-success" : row.score >= 80 ? "text-primary" : "text-neutral-500"
        )}>
          {row.score}%
        </span>
      )
    }
  ], []);

  const handleRowClick = (candidate: CandidateRecord) => {
    navigate(`/hr/candidates/${candidate.id}`);
  };

  return (
    <>
      <SEOHead title="Candidate Directory" description="Search, filter, and review active candidate tracking applications." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-6xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Candidate Feeds</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
                Candidate Tracker
              </h1>
              <p className="text-xs text-text-muted">Manage active applicant records and filter by departments.</p>
            </div>
            {/* Department Filter toolbar */}
            <div className="flex items-center gap-2 shrink-0">
              <label htmlFor="cand-dept-filter" className="text-xs font-bold text-neutral-500 whitespace-nowrap">Filter Dept:</label>
              <Select
                id="cand-dept-filter"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="h-9.5 text-xs py-1.5 px-3 min-w-[140px]"
              >
                <option value="all">All Departments</option>
                <option value="Engineering">Engineering Only</option>
                <option value="Design">Design Only</option>
                <option value="Product">Product Only</option>
                <option value="Marketing">Marketing Only</option>
              </Select>
            </div>
          </div>

          {/* Table Card */}
          <Card>
            <CardContent className="p-6">
              <DataTable<CandidateRecord>
                data={filteredCandidates}
                columns={columns}
                pageSize={6}
                searchKey="name"
                searchPlaceholder="Search candidates by name..."
                onRowClick={handleRowClick}
              />
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
};
export default CandidatesPage;
