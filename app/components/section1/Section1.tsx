"use client";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import RoundedParagraph from "./RoundedParagraph";
import Numbers from "./Numbers";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const elements = [headingRef.current, paragraphRef.current];
    gsap.set(elements, { y: 30 });
    elements.forEach((el) => {
      gsap.to(el, {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    });
  });
  return (
    <section className="flex flex-row px-8 items-center justify-center">
      {/* Content */}
      <div className="space-y-10 flex-1">
        {/* Rounded pargraph */}
        <RoundedParagraph />
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-5xl"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          We design with purpose. We build with intelligence.
        </h2>
        {/* Pargraph */}
        <p
          ref={paragraphRef}
          className="text-white-700"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          We create future-ready brands, smart SaaS interfaces, and
          high-converting websites that leave a lasting impact.
        </p>
        {/* Numbers */}
        <Numbers />
        {/* Button */}
        <NavigationButton content="Learn about us" />
      </div>
      {/* Image */}
      <div className="flex-1 grayscale-5">
        <Image
          src="/images/home-section1-image.webp"
          alt="Woman Image"
          width={512}
          height={512}
        />
      </div>
    </section>
  );
}
