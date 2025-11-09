"use client";
import { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedProps {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  startAt?: string;
  distance?: number;
  setIsCompleted?: (isCompleted: boolean) => void;
}
export default function Animated({
  children,
  direction = "vertical",
  reverse = false,
  duration = 1,
  startAt = "80%",
  distance = 30,
  setIsCompleted = () => {},
}: AnimatedProps) {
  const childRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const element = childRef.current;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;

    gsap.set(element, { [axis]: offset, autoAlpha: 0 });
    gsap.to(element, {
      y: 0,
      autoAlpha: 1,
      duration: duration,
      ease: "power1.out",
      onComplete: () => {
        setIsCompleted(true);
      },
      scrollTrigger: {
        trigger: element,
        start: `Top ${startAt}`,
      },
    });
  }, [duration, distance, startAt, setIsCompleted, direction, reverse]);
  return (
    <div ref={childRef} style={{ opacity: 0, visibility: "hidden" }}>
      {children}
    </div>
  );
}
