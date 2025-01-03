import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Enhanced Heart with better definition */}
      <div className="relative w-12 h-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12 animate-pulse"
        >
          <defs>
            {/* Enhanced gradient with more color stops */}
            <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#EF5350" />
              <stop offset="100%" stopColor="#D32F2F" />
            </linearGradient>
            {/* Add inner shadow for depth */}
            <filter id="inner-shadow">
              <feOffset dx="0" dy="1" />
              <feGaussianBlur stdDeviation="1" result="offset-blur" />
              <feComposite
                operator="out"
                in="SourceGraphic"
                in2="offset-blur"
                result="inverse"
              />
              <feFlood floodColor="black" floodOpacity="0.2" result="color" />
              <feComposite operator="in" in="color" in2="inverse" result="shadow" />
              <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>
            {/* Add slight outline */}
            <filter id="outline">
              <feMorphology operator="dilate" radius="0.5" result="dilated"/>
              <feFlood floodColor="#B71C1C" floodOpacity="0.3"/>
              <feComposite in2="dilated" operator="in"/>
              <feComposite in2="SourceGraphic" operator="over"/>
            </filter>
          </defs>
          <path
            d="M12 21.35c-1.12-.92-6.6-5.3-8.6-8.1C2 10 2 7.8 2 6c0-3.1 2.3-5.4 5.4-5.4 1.5 0 2.9.8 3.8 2 1-.9 2.3-2 3.8-2 3.1 0 5.4 2.3 5.4 5.4 0 1.8 0 4-1.4 6.3-2 2.8-7.5 7.3-8.6 8.1z"
            fill="url(#red-gradient)"
            filter="url(#outline) url(#inner-shadow)"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.1;1"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </svg>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <span className="text-3xl font-extrabold text-white tracking-wide">
          Nurse-Sync
        </span>
        <span className="text-sm font-medium text-white tracking-wide">
          Connecting Care, Simplified
        </span>
      </div>
    </div>
  );
};

export default Logo;