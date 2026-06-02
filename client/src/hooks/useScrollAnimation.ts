import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    // Observe all fade-in-up elements
    const elements = ref.current?.querySelectorAll(".fade-in-up");
    elements?.forEach((el) => observer.observe(el));

    // Also observe elements that are added later (for dynamic content)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("fade-in-up")) {
              observer.observe(node);
            }
            node.querySelectorAll?.(".fade-in-up")?.forEach((el) => {
              observer.observe(el);
            });
          }
        });
      });
    });

    if (ref.current) {
      mutationObserver.observe(ref.current, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return ref;
}
