import * as React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Theme Colors corresponding to design tokens
export const CHART_COLORS = [
  '#7c3aed', // primary (violet)
  '#06b6d4', // info/accent (cyan)
  '#10b981', // success (emerald)
  '#f59e0b', // warning (amber)
  '#ef4444', // error (rose)
  '#64748b', // neutral-500 (slate)
];

// Custom Tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-border rounded-xl p-3 shadow-premium-md text-xs space-y-1">
        {label && <p className="font-bold text-neutral-800 border-b border-neutral-100 pb-1 mb-1">{label}</p>}
        {payload.map((pld: any, idx: number) => (
          <div key={idx} className="flex items-center gap-2 text-neutral-600">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
              style={{ backgroundColor: pld.color || pld.fill }}
            />
            <span className="font-medium">{pld.name}:</span>
            <span className="font-bold text-neutral-900">{pld.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// 1. Line Chart Wrapper
export interface LineChartProps {
  data: any[];
  xKey: string;
  series: { key: string; name: string; color?: string }[];
  height?: number;
}

export const LineChartWrapper: React.FC<LineChartProps> = ({
  data,
  xKey,
  series,
  height = 300,
}) => {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey={xKey}
            stroke="#94a3b8"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dx={-5}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, color: '#64748b', paddingBottom: 15 }}
          />
          {series.map((s, idx) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.name}
              stroke={s.color || CHART_COLORS[idx % CHART_COLORS.length]}
              strokeWidth={2.5}
              activeDot={{ r: 6, strokeWidth: 0 }}
              dot={{ r: 3, strokeWidth: 1 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// 2. Bar Chart Wrapper
export interface BarChartProps {
  data: any[];
  xKey: string;
  series: { key: string; name: string; color?: string }[];
  height?: number;
}

export const BarChartWrapper: React.FC<BarChartProps> = ({
  data,
  xKey,
  series,
  height = 300,
}) => {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey={xKey}
            stroke="#94a3b8"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dx={-5}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, color: '#64748b', paddingBottom: 15 }}
          />
          {series.map((s, idx) => (
            <Bar
              key={s.key}
              dataKey={s.key}
              name={s.name}
              fill={s.color || CHART_COLORS[idx % CHART_COLORS.length]}
              radius={[4, 4, 0, 0]}
              maxBarSize={45}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// 3. Pie Chart Wrapper
export interface PieChartProps {
  data: { name: string; value: number; color?: string }[];
  height?: number;
}

export const PieChartWrapper: React.FC<PieChartProps> = ({ data, height = 300 }) => {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, idx) => (
              <Cell
                key={`cell-${idx}`}
                fill={entry.color || CHART_COLORS[idx % CHART_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, color: '#64748b', paddingTop: 10 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
