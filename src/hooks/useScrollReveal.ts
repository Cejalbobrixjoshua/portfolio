import { useEffect, useState } from 'react';

export const useScrollReveal = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-reveal-id');
            if (id) {
              setVisibleElements(prev => new Set(prev).add(id));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-reveal-id]');
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return { visibleElements };
};