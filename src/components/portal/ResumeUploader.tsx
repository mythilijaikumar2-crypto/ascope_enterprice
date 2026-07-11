import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle2, Trash2 } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface ResumeUploaderProps {
  initialFileName: string | null;
  initialFileSize: string | null;
  onUploadComplete: (fileName: string, fileSize: string) => void;
  onRemove: () => void;
}

export const ResumeUploader: React.FC<ResumeUploaderProps> = ({
  initialFileName,
  initialFileSize,
  onUploadComplete,
  onRemove
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const simulateUpload = (fileName: string, fileSize: string) => {
    setUploading(true);
    setProgress(0);

    const duration = 1500; // 1.5 seconds
    const intervalTime = 30; // 30ms updates
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setUploading(false);
          onUploadComplete(fileName, fileSize);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const sizeStr = `${(file.size / 1024).toFixed(0)} KB`;
      simulateUpload(file.name, sizeStr);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeStr = `${(file.size / 1024).toFixed(0)} KB`;
      simulateUpload(file.name, sizeStr);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      {/* File input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* State A: Uploading */}
      {uploading && (
        <div className="p-8 border border-border bg-white rounded-2xl space-y-4 text-center">
          <FileText className="h-10 w-10 text-primary mx-auto animate-pulse" />
          <div className="space-y-1.5 max-w-xs mx-auto">
            <h4 className="text-xs font-bold text-neutral-800">Uploading Resume File...</h4>
            <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden border border-neutral-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: prefersReducedMotion ? 0.05 : 0.1 }}
                className="bg-primary h-full rounded-full"
              />
            </div>
            <span className="text-[10px] font-bold text-primary block">{progress.toFixed(0)}% uploaded</span>
          </div>
        </div>
      )}

      {/* State B: Has Uploaded File */}
      {!uploading && initialFileName && (
        <div className="p-6 border border-border bg-white rounded-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-success-50 text-success rounded-xl border border-success/15">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-neutral-800 leading-snug">{initialFileName}</h4>
              <p className="text-[10px] text-text-muted mt-0.5">{initialFileSize} &bull; Uploaded successfully</p>
            </div>
          </div>
          <button
            onClick={onRemove}
            className="p-2 border border-border hover:border-error/20 hover:bg-error-50/10 text-neutral-400 hover:text-error rounded-xl transition-all"
            aria-label="Delete uploaded resume"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* State C: Drag-Drop Zone */}
      {!uploading && !initialFileName && (
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={triggerFileInput}
          className={cn(
            "p-10 border-2 border-dashed rounded-2xl text-center space-y-4 cursor-pointer transition-all duration-200 bg-white",
            dragActive
              ? "border-primary bg-primary-50/5 scale-[1.005]"
              : "border-border hover:border-primary/40 hover:bg-neutral-50/10"
          )}
        >
          <UploadCloud className={cn("h-12 w-12 mx-auto transition-colors", dragActive ? "text-primary" : "text-neutral-400")} />
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-neutral-800">Drag & Drop Resume File</h3>
            <p className="text-[10px] text-text-light">Supports PDF, DOC, or DOCX formats (Max 5MB)</p>
          </div>
          <Button type="button" size="sm" variant="outline" className="text-xs py-1 h-8 pointer-events-none">
            Browse files
          </Button>
        </div>
      )}
    </div>
  );
};
export default ResumeUploader;
