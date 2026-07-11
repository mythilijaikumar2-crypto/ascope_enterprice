import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable, type Column } from '@/components/ui';
import type { AIMatchScore } from '@/mocks/ai-match-scores';
import { cn } from '@/lib/utils';

export interface CandidateRankingTableProps {
  rankings: AIMatchScore[];
}

export const CandidateRankingTable: React.FC<CandidateRankingTableProps> = ({ rankings }) => {
  const navigate = useNavigate();

  // Define table column mapping
  const columns: Column<AIMatchScore>[] = useMemo(() => [
    {
      header: "Rank",
      accessorKey: "rank",
      cell: (_, idx?: number) => (
        <span className="font-display font-extrabold text-neutral-400 text-xs">
          #{idx !== undefined ? idx + 1 : "?"}
        </span>
      )
    },
    {
      header: "Candidate Name",
      accessorKey: "candidateName",
      sortable: true,
      cell: (row) => (
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-display font-extrabold text-[10px] text-neutral-600 shrink-0">
            {row.candidateName.split(' ').map((n) => n[0]).join('')}
          </div>
          <span className="font-bold text-neutral-900 block leading-tight">{row.candidateName}</span>
        </div>
      )
    },
    {
      header: "Skills Match",
      accessorKey: "skillsScore",
      sortable: true,
      cell: (row) => <span>{row.skillsScore}%</span>
    },
    {
      header: "Experience Match",
      accessorKey: "experienceScore",
      sortable: true,
      cell: (row) => <span>{row.experienceScore}%</span>
    },
    {
      header: "AI Match Score",
      accessorKey: "overallScore",
      sortable: true,
      cell: (row) => (
        <span className={cn(
          "font-display font-extrabold text-xs",
          row.overallScore >= 90 ? "text-success" : row.overallScore >= 80 ? "text-primary" : "text-neutral-500"
        )}>
          {row.overallScore}%
        </span>
      )
    }
  ], []);

  // Sort rankings by overall score descending initially
  const sortedRankings = useMemo(() => {
    return [...rankings].sort((a, b) => b.overallScore - a.overallScore);
  }, [rankings]);

  const handleRowClick = (row: AIMatchScore) => {
    navigate(`/hr/candidates/${row.candidateId}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-[10px] text-text-light px-1 font-bold uppercase tracking-wider">
        <span>Applicant Score Comparisons</span>
        <span>Sorted by Match Index</span>
      </div>
      <DataTable<AIMatchScore>
        data={sortedRankings}
        columns={columns}
        pageSize={5}
        searchKey="candidateName"
        searchPlaceholder="Search rank list by name..."
        onRowClick={handleRowClick}
      />
    </div>
  );
};
export default CandidateRankingTable;
