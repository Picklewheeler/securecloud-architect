
import { useEffect, useState } from "react";

interface UseInViewProps {
  ref: React.RefObject<HTMLElement>;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView({ 
  ref, 
  rootMargin = "0px", 
  threshold = 0, 
  triggerOnce = false 
}: UseInViewProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If triggerOnce is true and the element is intersecting,
        // disconnect the observer
        if (triggerOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    const element = ref.current;
    
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, rootMargin, threshold, triggerOnce]);

  return isIntersecting;
}
