import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
        {icon || <div className="w-3 h-3 rounded-full bg-emerald-500"></div>}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;