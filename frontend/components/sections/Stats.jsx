import React from 'react';

const Stats = () => {
  return (
    <div className="flex items-center gap-8">
      <StatItem value="10k+" label="Active Users" />
      <div className="w-px h-8 bg-slate-200"></div>
      <StatItem value="98%" label="Satisfaction" />
    </div>
  );
};

const StatItem = ({ value, label }) => (
  <div className="flex items-center gap-2 group">
    <span className="text-3xl font-bold text-emerald-500 group-hover:scale-110 transition-transform">
      {value}
    </span>
    <span className="text-slate-600">{label}</span>
  </div>
);

export default Stats;