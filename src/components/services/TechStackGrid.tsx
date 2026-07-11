import React, { useMemo } from 'react';
import { mockTechStack } from '@/mocks/tech-stack';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const TechStackGrid: React.FC = () => {
  // Group stack tools by category
  const groupedStack = useMemo(() => {
    const groups: Record<string, typeof mockTechStack> = {
      Frontend: [],
      Backend: [],
      Infrastructure: [],
      "Data Science": []
    };
    mockTechStack.forEach((tool) => {
      const category = tool.category;
      const group = groups[category];
      if (group) {
        group.push(tool);
      }
    });
    return Object.entries(groups);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {groupedStack.map(([category, tools]) => (
        <Card key={category}>
          <CardHeader className="border-b border-neutral-100 pb-3">
            <CardTitle className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              {category} Stack
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-3 border border-border bg-white rounded-xl space-y-1 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300"
              >
                <h4 className="text-xs font-bold text-neutral-800 tracking-tight leading-none">
                  {tool.name}
                </h4>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default TechStackGrid;
