
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface SecurityFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-up' | 'zoom-in' | 'stagger';
}

const SecurityFeature = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  delay = 0,
  animation = 'fade-up'
}: SecurityFeatureProps) => {
  return (
    <AnimatedSection 
      animation={animation}
      delay={delay}
      className={cn("h-full", className)}
    >
      <div className={cn(
        "flex flex-col h-full p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]",
      )}>
        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </AnimatedSection>
  );
};

export default SecurityFeature;
