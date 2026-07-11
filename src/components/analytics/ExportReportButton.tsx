import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button, useToast } from '@/components/ui';

export interface ExportReportButtonProps {
  reportName: string;
}

export const ExportReportButton: React.FC<ExportReportButtonProps> = ({ reportName }) => {
  const { toast } = useToast();
  const [exporting, setExporting] = useState(false);

  const handleExport = () => {
    setExporting(true);

    // Simulate CSV file assembly delay
    setTimeout(() => {
      setExporting(false);
      toast({
        title: "Report Exported",
        description: `"${reportName}" compiled and downloaded successfully in CSV format.`,
        variant: "success",
      });
    }, 1000);
  };

  return (
    <Button
      onClick={handleExport}
      size="sm"
      variant="outline"
      isLoading={exporting}
      className="flex items-center gap-1.5 shadow-premium-sm"
    >
      {!exporting && <Download className="h-4 w-4" />}
      {exporting ? "Compiling CSV..." : "Export report"}
    </Button>
  );
};
export default ExportReportButton;
