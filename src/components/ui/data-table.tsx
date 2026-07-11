import * as React from 'react';
import { ChevronLeft, ChevronRight, ChevronsUpDown, ArrowUp, ArrowDown, Search } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { EmptyState } from './empty-state';
import { cn } from '@/lib/utils';

export interface Column<T> {
  header: string;
  accessorKey: keyof T | string;
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  searchPlaceholder?: string;
  searchKey?: keyof T;
  onRowClick?: (row: T) => void;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pageSize = 5,
  searchPlaceholder = "Search...",
  searchKey,
  onRowClick,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortKey, setSortKey] = React.useState<keyof T | string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc' | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);

  // Reset pagination on search
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Handle search filtering
  const filteredData = React.useMemo(() => {
    if (!searchTerm || !searchKey) return data;
    return data.filter((row) => {
      const value = row[searchKey];
      if (value === undefined || value === null) return false;
      return String(value).toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm, searchKey]);

  // Handle sorting
  const sortedData = React.useMemo(() => {
    if (!sortKey || !sortDirection) return filteredData;

    return [...filteredData].sort((a, b) => {
      let valA = a[sortKey];
      let valB = b[sortKey];

      // Handle null/undefined
      if (valA === undefined || valA === null) return 1;
      if (valB === undefined || valB === null) return -1;

      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortDirection === 'asc'
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      return sortDirection === 'asc'
        ? Number(valA) - Number(valB)
        : Number(valB) - Number(valA);
    });
  }, [filteredData, sortKey, sortDirection]);

  // Handle pagination
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = (key: keyof T | string) => {
    if (sortKey === key) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortKey(null);
        setSortDirection(null);
      }
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const getCellValue = (row: T, column: Column<T>) => {
    if (column.cell) {
      return column.cell(row);
    }
    return row[column.accessorKey];
  };

  return (
    <div className="space-y-4">
      {/* Filtering Toolbar */}
      {searchKey && (
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchPlaceholder}
            className="pl-9 h-9"
          />
        </div>
      )}

      {/* Grid view below sm / Table view above sm */}
      {paginatedData.length === 0 ? (
        <EmptyState
          title="No results found"
          description="Try adjusting your keywords or filters to locate the desired record."
        />
      ) : (
        <>
          {/* Mobile Stacked Card View */}
          <div className="block sm:hidden space-y-3">
            {paginatedData.map((row, rIdx) => (
              <div
                key={rIdx}
                onClick={() => onRowClick?.(row)}
                className={cn(
                  "p-4 border border-border bg-white rounded-xl shadow-premium-sm space-y-2",
                  onRowClick && "cursor-pointer hover:border-primary/30 active:scale-[0.99] transition-all"
                )}
              >
                {columns.map((col, cIdx) => (
                  <div key={cIdx} className="flex justify-between items-start gap-2 text-xs">
                    <span className="font-bold text-neutral-500 uppercase tracking-wider text-[10px]">
                      {col.header}
                    </span>
                    <span className="text-neutral-800 font-medium text-right">
                      {getCellValue(row, col)}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block border border-border rounded-2xl overflow-hidden bg-white shadow-premium-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm text-neutral-700">
                <thead className="bg-surface text-neutral-600 border-b border-border">
                  <tr>
                    {columns.map((col) => (
                      <th
                        key={col.header}
                        className={cn(
                          "px-6 py-3.5 text-xs font-bold uppercase tracking-wider",
                          col.sortable && "select-none cursor-pointer hover:bg-neutral-100/50 hover:text-primary transition-colors"
                        )}
                        onClick={() => col.sortable && handleSort(col.accessorKey)}
                      >
                        <div className="flex items-center gap-1.5">
                          {col.header}
                          {col.sortable && (
                            <span className="text-neutral-400">
                              {sortKey === col.accessorKey ? (
                                sortDirection === 'asc' ? (
                                  <ArrowUp className="h-3.5 w-3.5 text-primary" />
                                ) : (
                                  <ArrowDown className="h-3.5 w-3.5 text-primary" />
                                )
                              ) : (
                                <ChevronsUpDown className="h-3.5 w-3.5" />
                              )}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {paginatedData.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      onClick={() => onRowClick?.(row)}
                      className={cn(
                        "hover:bg-surface/30 transition-colors",
                        onRowClick && "cursor-pointer"
                      )}
                    >
                      {columns.map((col, cIdx) => (
                        <td key={cIdx} className="px-6 py-4 text-neutral-800 font-medium whitespace-nowrap">
                          {getCellValue(row, col)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-neutral-100 pt-4 px-1">
              <span className="text-xs text-text-muted">
                Page <span className="font-semibold text-neutral-700">{currentPage}</span> of{' '}
                <span className="font-semibold text-neutral-700">{totalPages}</span>
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="h-8 px-2.5"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="h-8 px-2.5"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
