"use client";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Animated from "../animation/Animated";

export default function HeroMiddle() {
  const roundedParagraphRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = [
      roundedParagraphRef.current,
      headingRef.current,
      paragraphRef.current,
    ];

    // Immediately set all to hidden before rendering
    gsap.set(elements, { y: -30 });

    // Then animate them in
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
    tl.to(roundedParagraphRef.current, { autoAlpha: 1, y: 0 })
      .to(headingRef.current, { autoAlpha: 1, y: 0 }, "-=0.6")
      .to(paragraphRef.current, { autoAlpha: 1, y: 0 }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="flex flex-col gap-10 mt-24 lg:mt-20 mb-10 items-center justify-center max-w-3xl z-10 grow">
      {/* Rounded pargraph */}
      <div
        ref={roundedParagraphRef}
        className="flex flex-row items-center gap-3 border border-white-100 rounded-full w-fit py-2 px-4 text-sm text-center"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <div className="hidden md:block">
          <Image
            src="/images/little-star.svg"
            alt="orange star"
            width={16}
            height={16}
          />
        </div>
        <p>
          Design studio for AI, SaaS & tech startups{" "}
          <span className="hidden lg:inline">| Based on San Francisco</span>
        </p>
      </div>

      <h1
        ref={headingRef}
        className="text-3xl md:text-4xl lg:text-6xl text-center"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        Creative studio powering AI, brands & digital futures
      </h1>

      <p
        ref={paragraphRef}
        className="text-white-700 max-w-xl text-center"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        We partner with visionary teams to build standout brands, launch smarter
        products, and grow with purpose.
      </p>
      <Animated>
        <div className="text-[#212121] text-sm">
          <NavigationButton content="Book 1:1 Meeting" />
        </div>
      </Animated>
    </div>
  );
}
