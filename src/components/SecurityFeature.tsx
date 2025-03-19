
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const SecurityFeature = ({ icon: Icon, title, description, className }: SecurityFeatureProps) => {
  return (
    <div className={cn(
      "flex flex-col p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default SecurityFeature;
