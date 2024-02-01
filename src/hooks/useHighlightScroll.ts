import { useEffect, useRef, useState } from "react";

export default function useHighlightScroll() {
  const [activeSection, setActiveSection] = useState<string>();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)
        ?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (observer.current) {
          observer.current.unobserve(section);
        }
      });
    };
  }, []);

  return { activeSection };
}
