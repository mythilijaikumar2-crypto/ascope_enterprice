import React from 'react';
import type { CandidateRecord } from '@/mocks/candidates';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { FileText, Download, Mail, Phone, Calendar, User } from 'lucide-react';

export interface CandidateDetailViewProps {
  candidate: CandidateRecord;
}

export const CandidateDetailView: React.FC<CandidateDetailViewProps> = ({ candidate }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      
      {/* Details contact panel */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-4 border-b border-neutral-100 pb-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-display font-extrabold text-lg shadow-inner-soft">
                {candidate.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-neutral-900 tracking-tight leading-none">
                  {candidate.name}
                </h3>
                <p className="text-xs text-text-muted mt-0.5">{candidate.title}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs font-medium text-neutral-700">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-neutral-400 shrink-0" />
                <a href={`mailto:${candidate.email}`} className="hover:text-primary transition-colors">
                  {candidate.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-neutral-400 shrink-0" />
                <span>{candidate.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 border-t border-neutral-100 pt-4">
                <Calendar className="h-4.5 w-4.5 text-neutral-400 shrink-0" />
                <span>Applied: {candidate.appliedDate}</span>
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-4 space-y-2">
              <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">Assessed Candidate Skills</span>
              <div className="flex flex-wrap gap-1.5">
                {candidate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] font-bold bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded text-neutral-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* PDF resume viewer */}
      <div className="lg:col-span-3 space-y-6">
        <Card>
          <CardHeader className="border-b border-neutral-100 pb-3 flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="text-sm">Candidate Resume PDF</CardTitle>
              <CardDescription className="text-[10px]">{candidate.resumeFileName} ({candidate.resumeFileSize})</CardDescription>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Simulating resume file download: ${candidate.resumeFileName}`);
              }}
              className="inline-flex items-center gap-1 text-[10px] font-bold text-neutral-600 hover:text-primary border border-border bg-white px-2.5 py-1.5 rounded-lg shadow-premium-sm transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
          </CardHeader>
          <CardContent className="p-0">
            {/* Styled PDF wireframe skeleton */}
            <div className="bg-neutral-50/50 p-8 min-h-[400px] flex items-center justify-center">
              <div className="w-full max-w-md bg-white border border-border rounded-xl shadow-premium-md p-6 space-y-6 select-none opacity-80 relative overflow-hidden">
                {/* PDF overlay indicator */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/10 to-white/60 flex items-end justify-center pb-6">
                  <div className="bg-neutral-900 text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-premium-md">
                    <FileText className="h-3.5 w-3.5" />
                    Mock PDF Document Layout Viewer
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
                  <User className="h-8 w-8 text-neutral-300" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-4 bg-neutral-100 w-1/3 rounded" />
                    <div className="h-3 bg-neutral-100 w-1/2 rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-100 w-full rounded" />
                  <div className="h-3 bg-neutral-100 w-full rounded" />
                  <div className="h-3 bg-neutral-100 w-2/3 rounded" />
                </div>
                <div className="space-y-2 border-t border-neutral-100 pt-4">
                  <div className="h-3.5 bg-neutral-100 w-1/4 rounded" />
                  <div className="h-3 bg-neutral-100 w-full rounded" />
                  <div className="h-3 bg-neutral-100 w-5/6 rounded" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};
export default CandidateDetailView;
