import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Folder, FolderOpen } from 'lucide-react';
import type { DepartmentNode } from '@/mocks/admin-data';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

export interface DepartmentNodeProps {
  node: DepartmentNode;
  level?: number;
}

export const DepartmentTreeNode: React.FC<DepartmentNodeProps> = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const hasSubDepts = node.subDepartments && node.subDepartments.length > 0;

  const toggleOpen = () => {
    if (hasSubDepts) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="space-y-1">
      {/* Node label bar */}
      <div
        onClick={toggleOpen}
        className={cn(
          "flex items-center gap-2 p-2 rounded-xl transition-all border border-transparent text-xs",
          hasSubDepts ? "cursor-pointer hover:bg-neutral-50 hover:border-neutral-100" : "text-neutral-500",
          level === 0 ? "font-bold text-neutral-800" : "font-medium"
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        {hasSubDepts ? (
          isOpen ? (
            <ChevronDown className="h-4 w-4 text-neutral-400 shrink-0" />
          ) : (
            <ChevronRight className="h-4 w-4 text-neutral-400 shrink-0" />
          )
        ) : (
          <span className="w-4 h-4 shrink-0" />
        )}

        {hasSubDepts ? (
          isOpen ? (
            <FolderOpen className="h-4.5 w-4.5 text-primary shrink-0" />
          ) : (
            <Folder className="h-4.5 w-4.5 text-primary shrink-0" />
          )
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0 mx-1.5" />
        )}

        <span>{node.name}</span>
      </div>

      {/* Nested Children recursive mapping */}
      {hasSubDepts && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.05 : 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-1.5 pb-1">
                {node.subDepartments!.map((child) => (
                  <DepartmentTreeNode key={child.id} node={child} level={level + 1} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export interface DepartmentTreeProps {
  departments: DepartmentNode[];
}

export const DepartmentTree: React.FC<DepartmentTreeProps> = ({ departments }) => {
  return (
    <div className="bg-white border border-border p-6 rounded-2xl shadow-premium-sm space-y-4">
      <div className="border-b border-neutral-100 pb-3">
        <h3 className="text-sm font-bold text-neutral-800">
          Organization Department Tree Structure
        </h3>
      </div>
      <div className="space-y-1.5">
        {departments.map((dept) => (
          <DepartmentTreeNode key={dept.id} node={dept} />
        ))}
      </div>
    </div>
  );
};
export default DepartmentTree;
