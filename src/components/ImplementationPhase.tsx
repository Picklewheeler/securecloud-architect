
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImplementationPhaseProps {
  phase: number;
  title: string;
  timeline: string;
  description: string;
  tasks: string[];
  isActive?: boolean;
}

const ImplementationPhase = ({ 
  phase, 
  title, 
  timeline, 
  description, 
  tasks,
  isActive = false
}: ImplementationPhaseProps) => {
  return (
    <div className={cn(
      "relative p-6 border border-border rounded-xl transition-all duration-300 group",
      isActive ? "bg-primary/5 border-primary/30" : "bg-card hover:bg-primary/5"
    )}>
      {/* Phase indicator */}
      <div className={cn(
        "absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
        isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"
      )}>
        {phase}
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{timeline}</p>
      </div>
      
      <p className="text-sm mb-4">{description}</p>
      
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-sm">{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImplementationPhase;
