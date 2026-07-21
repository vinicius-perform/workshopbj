import React from 'react';

interface BejotaSymbolProps {
  className?: string;
  size?: number;
  color?: string;
}

export const BejotaSymbol: React.FC<BejotaSymbolProps> = ({ 
  className = "", 
  size = 24, 
  color = "#F0D8B5" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Outer Diamond */}
      <path 
        d="M20 2L38 20L20 38L2 20L20 2Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinejoin="round" 
      />
      {/* Inner Rotated Square */}
      <path 
        d="M20 8L32 20L20 32L8 20L20 8Z" 
        fill={color} 
        fillOpacity="0.25"
        stroke={color} 
        strokeWidth="1" 
      />
      {/* Core Point */}
      <circle cx="20" cy="20" r="3" fill={color} />
    </svg>
  );
};
