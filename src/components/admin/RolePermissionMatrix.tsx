import React, { useState } from 'react';
import { mockPermissions, mockRolePermissions } from '@/mocks/admin-data';
import { Checkbox, useToast } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export const RolePermissionMatrix: React.FC = () => {
  const { toast } = useToast();
  const [matrix, setMatrix] = useState<Record<string, string[]>>(mockRolePermissions);

  const handleTogglePermission = (role: string, permissionId: string) => {
    const activePerms = matrix[role] || [];
    const isGranted = activePerms.includes(permissionId);
    
    const updatedPerms = isGranted
      ? activePerms.filter((p) => p !== permissionId)
      : [...activePerms, permissionId];

    setMatrix((prev) => ({
      ...prev,
      [role]: updatedPerms
    }));

    toast({
      title: "Permissions Updated",
      description: `Permission status toggled for role "${role}".`,
      variant: "success"
    });
  };

  const roles = Object.keys(matrix);

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-bold text-neutral-800">
            Role-Permission Matrix Configuration
          </h3>
        </div>

        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full border-collapse text-left text-xs font-semibold text-neutral-700">
            <thead className="bg-surface text-neutral-600 border-b border-border">
              <tr>
                <th className="px-5 py-3 w-1/3">System Permission</th>
                {roles.map((role) => (
                  <th key={role} className="px-5 py-3 text-center uppercase tracking-wider">
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {mockPermissions.map((perm) => (
                <tr key={perm.id} className="hover:bg-surface/30 transition-colors">
                  <td className="px-5 py-3.5 space-y-1">
                    <span className="font-bold text-neutral-800 block">{perm.name}</span>
                    <span className="text-[10px] text-text-light font-medium block">
                      {perm.description}
                    </span>
                  </td>
                  {roles.map((role) => {
                    const isGranted = (matrix[role] || []).includes(perm.id);
                    return (
                      <td key={role} className="px-5 py-3.5 text-center">
                        <Checkbox
                          checked={isGranted}
                          onChange={() => handleTogglePermission(role, perm.id)}
                          aria-label={`Grant ${perm.name} permission to ${role} role`}
                          className="h-4.5 w-4.5 mx-auto"
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
export default RolePermissionMatrix;
