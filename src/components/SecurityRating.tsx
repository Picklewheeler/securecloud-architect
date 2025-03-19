
import React from 'react';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityRatingProps {
  score: number;
  label: string;
  color?: 'green' | 'amber' | 'red';
  className?: string;
}

const SecurityRating = ({ 
  score, 
  label, 
  color = 'green',
  className 
}: SecurityRatingProps) => {
  // Determine color classes based on the color prop
  const colorClasses = {
    green: {
      bg: 'bg-green-500',
      text: 'text-green-500',
      border: 'border-green-500',
      light: 'bg-green-50 dark:bg-green-950/20',
    },
    amber: {
      bg: 'bg-amber-500',
      text: 'text-amber-500',
      border: 'border-amber-500',
      light: 'bg-amber-50 dark:bg-amber-950/20',
    },
    red: {
      bg: 'bg-red-500',
      text: 'text-red-500',
      border: 'border-red-500',
      light: 'bg-red-50 dark:bg-red-950/20',
    },
  };

  const selectedColors = colorClasses[color];

  return (
    <div className={cn(
      "flex flex-col items-center p-6 rounded-xl",
      selectedColors.light,
      className
    )}>
      <div className={cn(
        "relative mb-4 h-24 w-24 rounded-full border-4",
        selectedColors.border,
        "flex items-center justify-center"
      )}>
        <div className={cn(
          "absolute inset-1 rounded-full",
          selectedColors.light
        )} />
        
        <Shield className={cn("h-10 w-10", selectedColors.text)} />
        
        <span className={cn(
          "absolute -top-2 -right-2 h-8 w-8 rounded-full",
          selectedColors.bg,
          "flex items-center justify-center text-white font-bold text-sm"
        )}>
          {score}
        </span>
      </div>
      
      <h3 className={cn("text-lg font-medium", selectedColors.text)}>{label}</h3>
    </div>
  );
};

export default SecurityRating;
