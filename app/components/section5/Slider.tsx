"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SliderCard from "./SliderCard";
import { useEffect as useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Card {
  id: number;
  heading: string;
  parag: string;
  image: string;
}

export default function Slider({ data }: { data: Card[] }) {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    // Function to create/update the animation
    const createAnimation = () => {
      // Kill existing animation if it exists
      if (animationRef.current) {
        animationRef.current.scrollTrigger?.kill();
        animationRef.current.kill();
      }

      const sliderWidth = sliderRef.current?.scrollWidth ?? 0;
      const triggerWidth = triggerRef.current?.offsetWidth ?? 0;
      const distance = sliderWidth - triggerWidth;

      // Only create animation if there's distance to scroll
      if (distance > 0) {
        animationRef.current = gsap.to(sliderRef.current, {
          x: -distance,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "center center",
            end: `+=${distance}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }
    };

    // Initial animation creation
    createAnimation();

    // Find all sections above this one to observe for height changes
    let observerTargets: Element[] = [];

    if (triggerRef.current) {
      // Get the parent sections container
      let current = triggerRef.current.parentElement;

      while (current && current.tagName !== "MAIN") {
        current = current.parentElement;
      }

      if (current) {
        // Observe all sibling sections that come before this slider
        const allSections = Array.from(current.children);
        const sliderSection = triggerRef.current.closest("section");
        const sliderIndex = allSections.indexOf(sliderSection as Element);

        // Observe all sections before the slider
        observerTargets = allSections.slice(0, sliderIndex);
      }
    }

    // Watch for resize/layout changes on previous sections
    const resizeObserver = new ResizeObserver(() => {
      // Debounce the refresh to avoid too many calls
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 50);
    });

    // Observe all target elements
    observerTargets.forEach((target) => {
      if (target) {
        resizeObserver.observe(target);
      }
    });

    // Also observe window resize
    const handleResize = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
        createAnimation();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        animationRef.current.scrollTrigger?.kill();
        animationRef.current.kill();
      }
    };
  }, [data]);

  return (
    <div
      ref={triggerRef}
      className="flex items-start justify-start w-full overflow-hidden"
    >
      <div
        ref={sliderRef}
        className="flex flex-row gap-10 w-fit"
      >
        {data.map((el) => (
          <SliderCard
            key={el.id}
            heading={el.heading}
            parag={el.parag}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
}
