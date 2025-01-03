import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium transition-all duration-300";
  const variants = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-600",
    secondary: "bg-white text-emerald-500 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;