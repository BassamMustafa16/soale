"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Section6() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const headings = ["Product Strategy", "UX Design", "UI Design", "Delivery"];
  const data = [
    {
      id: 1,
      heading: "Product Strategy",
      content: "Strategy Workshop",
    },
    {
      id: 2,
      heading: "Product Strategy",
      content: "Competitor Research",
    },
    {
      id: 3,
      heading: "Product Strategy",
      content: "Idea Validation",
    },
    {
      id: 4,
      heading: "Product Strategy",
      content: "Product Positioning",
    },
    {
      id: 5,
      heading: "Product Strategy",
      content: "Road Mapping",
    },
    {
      id: 6,
      heading: "Product Strategy",
      content: "UX Research",
    },
    {
      id: 7,
      heading: "Product Strategy",
      content: "Modularization",
    },
    {
      id: 8,
      heading: "UX Design",
      content: "User Mapping",
    },
    {
      id: 9,
      heading: "UX Design",
      content: "Wireframes & Flows",
    },
    {
      id: 10,
      heading: "UX Design",
      content: "Architecture",
    },
    {
      id: 11,
      heading: "UX Design",
      content: "Usability Testing",
    },
    {
      id: 12,
      heading: "UI Design",
      content: "Visual Design",
    },
    {
      id: 13,
      heading: "UI Design",
      content: "High-Fidelity Design",
    },
    {
      id: 14,
      heading: "UI Design",
      content: "Design System",
    },
    {
      id: 15,
      heading: "UI Design",
      content: "Interaction Design",
    },
    {
      id: 16,
      heading: "UI Design",
      content: "Micro-animations",
    },
    {
      id: 17,
      heading: "Delivery",
      content: "Handoff",
    },
    {
      id: 18,
      heading: "Delivery",
      content: "Feedback",
    },
  ];

  useEffect(() => {
    // Function to create/update the animation
    const createAnimation = () => {
      // Kill existing animation if it exists
      if (animationRef.current) {
        animationRef.current.scrollTrigger?.kill();
        animationRef.current.kill();
      }

      // Clear inline styles that GSAP applied
      cardsRefs.current.forEach((col) => {
        if (col) {
          gsap.set(col, { clearProps: "all" });
        }
      });

      animationRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=2000",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onRefresh: () => console.log("Section6 ScrollTrigger refreshed"),
          invalidateOnRefresh: true,
        },
      });

      // Animate each column one-by-one
      cardsRefs.current.forEach((col) => {
        if (!col) return;
        animationRef.current?.from(col, {
          y: 40,
          autoAlpha: 0,
        });
      });
    };

    // Initial animation creation
    createAnimation();

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        console.log("Section6 Timer");
        // ScrollTrigger.refresh();
        createAnimation();
      }, 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        animationRef.current.scrollTrigger?.kill();
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <section className="flex flex-col items-center gap-10 px-5 lg:px-10 max-w-7xl mx-auto bg-gray-950 py-15">
      {/* Heading */}
      <div className="space-y-4 self-start">
        <h2 className="leading-[120%] max-w-md">
          We simplify product Design process
        </h2>
        <p className="text-white-700  max-w-lg">
          {"We don't follow trends blindly or design without context."}
        </p>
        <p className="text-white-700  max-w-lg">
          {`Every UI we craft aligns closely with your product's purpose and
          business goals. And we never develop without testing — validation is
          non-negotiable.`}
        </p>
      </div>
      {/* Table */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full"
      >
        {headings.map((heading, indx) => (
          <div key={indx} className="border border-white-100 p-2">
            <p className="text-white-500">{heading}</p>

            <div
              ref={(el) => {
                cardsRefs.current[indx] = el;
              }}
              className="p-2 space-y-1 mt-2 text-sm"
            >
              {data
                .filter((el) => el.heading === heading)
                .map((el) => (
                  <div
                    key={el.id}
                    className="bg-white p-2 rounded-full flex flex-row items-center gap-2"
                  >
                    <div className="w-8 aspect-square rounded-full border bg-brand-orange-100 text-brand-orange flex items-center justify-center">
                      {el.id}
                    </div>
                    <span className="text-[#212121] font-medium">
                      {el.content}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
