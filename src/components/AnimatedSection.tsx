
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-up' | 'zoom-in' | 'stagger';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedSection = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref, threshold, triggerOnce });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isInView ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10';
      case 'fade-in':
        return isInView ? 'animate-fade-in opacity-100' : 'opacity-0';
      case 'slide-up':
        return isInView ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10';
      case 'zoom-in':
        return isInView ? 'animate-zoom-in opacity-100' : 'opacity-0 scale-95';
      case 'stagger':
        return isInView ? 'opacity-100' : 'opacity-0';
      default:
        return isInView ? 'animate-fade-in opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        getAnimationClass(),
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
