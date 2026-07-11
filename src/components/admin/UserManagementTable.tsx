import React, { useState } from 'react';
import { Trash2, ShieldAlert } from 'lucide-react';
import { Checkbox, useToast } from '@/components/ui';
import type { PlatformUser } from '@/mocks/admin-data';
import { cn } from '@/lib/utils';

export interface UserManagementTableProps {
  initialUsers: PlatformUser[];
}

export const UserManagementTable: React.FC<UserManagementTableProps> = ({ initialUsers }) => {
  const { toast } = useToast();
  const [users, setUsers] = useState<PlatformUser[]>(initialUsers);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Toggle single user select checkbox
  const handleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggle select all checkbox
  const handleSelectAll = () => {
    if (selectedIds.length === users.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(users.map((u) => u.id));
    }
  };

  // Bulk Actions Handlers
  const handleBulkDeactivate = () => {
    setUsers((prev) =>
      prev.map((u) => (selectedIds.includes(u.id) ? { ...u, status: 'Inactive' } : u))
    );
    toast({
      title: "Bulk Status Updated",
      description: `Deactivated ${selectedIds.length} selected users successfully.`,
      variant: "success"
    });
    setSelectedIds([]);
  };

  const handleBulkAssignRole = (newRole: PlatformUser['role']) => {
    setUsers((prev) =>
      prev.map((u) => (selectedIds.includes(u.id) ? { ...u, role: newRole } : u))
    );
    toast({
      title: "Bulk Roles Assigned",
      description: `Assigned role "${newRole}" to ${selectedIds.length} users.`,
      variant: "success"
    });
    setSelectedIds([]);
  };

  return (
    <div className="space-y-4">
      
      {/* Bulk action toolbar with live announcements */}
      {selectedIds.length > 0 && (
        <div
          role="region"
          aria-live="polite"
          className="p-4 bg-primary-50 border border-primary/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4.5 w-4.5 text-primary" />
            <span className="text-xs font-bold text-neutral-800">
              {selectedIds.length} users selected for bulk action
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => handleBulkAssignRole('HR')}
              className="px-3 py-1.5 bg-white border border-border hover:border-primary/20 hover:text-primary rounded-xl font-semibold shadow-premium-sm transition-all"
            >
              Set Role: HR
            </button>
            <button
              onClick={() => handleBulkAssignRole('Recruiter')}
              className="px-3 py-1.5 bg-white border border-border hover:border-primary/20 hover:text-primary rounded-xl font-semibold shadow-premium-sm transition-all"
            >
              Set Role: Recruiter
            </button>
            <button
              onClick={handleBulkDeactivate}
              className="px-3 py-1.5 bg-error hover:bg-error-hover text-white rounded-xl font-semibold shadow-premium-sm transition-all flex items-center gap-1"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Deactivate
            </button>
          </div>
        </div>
      )}

      {/* Users table */}
      <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-premium-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-neutral-700">
            <thead className="bg-surface text-neutral-600 border-b border-border">
              <tr>
                <th className="px-6 py-3.5 w-12">
                  <Checkbox
                    checked={selectedIds.length === users.length && users.length > 0}
                    onChange={handleSelectAll}
                    aria-label="Select all users"
                    className="h-4 w-4"
                  />
                </th>
                <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider">User details</th>
                <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider">Assigned Role</th>
                <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider">Status</th>
                <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider">Last Activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {users.map((user) => {
                const isSelected = selectedIds.includes(user.id);
                const isActive = user.status === 'Active';
                return (
                  <tr
                    key={user.id}
                    className={cn(
                      "hover:bg-surface/30 transition-colors",
                      isSelected && "bg-primary-50/10"
                    )}
                  >
                    <td className="px-6 py-4">
                      <Checkbox
                        checked={isSelected}
                        onChange={() => handleSelectRow(user.id)}
                        aria-label={`Select user ${user.name}`}
                        className="h-4 w-4"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-display font-extrabold text-[11px] text-neutral-600 shrink-0">
                          {user.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <span className="font-bold text-neutral-900 block leading-tight">{user.name}</span>
                          <span className="text-[10px] text-text-light">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-neutral-800 text-xs">
                      {user.role}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={cn(
                          "text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider",
                          isActive
                            ? "bg-success-50 text-success border-success/15"
                            : "bg-error-50 text-error border-error/15"
                        )}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-neutral-500">
                      {user.lastActive}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
export default UserManagementTable;
