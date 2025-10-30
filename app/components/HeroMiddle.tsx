"use client";
import NavigationButton from "./NavigationButton";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function HeroMiddle() {
  const roundedParagraphRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const pargraphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.from(
      [roundedParagraphRef.current, headingRef.current, pargraphRef.current],
      {
        y: -50,
        opacity: 0,
        duration: 0.5,
      }
    );
  });
  return (
    <div className="flex flex-col gap-10 items-center justify-center max-w-3xl z-10 grow">
      {/* Rounded pargraph */}
      <div
        ref={roundedParagraphRef}
        className="flex flex-row items-center gap-3 border border-white-100 rounded-full w-fit py-2 px-4"
      >
        <div className="">
          <Image
            src="/images/little-star.svg"
            alt="orange star"
            width={16}
            height={16}
          />
        </div>
        <p>
          Design studio for AI, SaaS & tech startups | Based on San Francisco
        </p>
      </div>

      <h1 ref={headingRef} className="text-6xl text-center">
        Creative studio powering AI, brands & digital futures
      </h1>

      <p ref={pargraphRef} className="text-white-700 max-w-xl text-center">
        We partner with visionary teams to build standout brands, launch smarter
        products, and grow with purpose.
      </p>

      <NavigationButton />
    </div>
  );
}
