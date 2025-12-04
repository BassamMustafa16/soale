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

  useLayoutEffect(() => {
    const sliderWidth = sliderRef.current?.scrollWidth ?? 0;
    const triggerWidth = triggerRef.current?.offsetWidth ?? 0;
    const distance = sliderWidth - triggerWidth;

    gsap.to(sliderRef.current, {
      x: -distance,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: `+=${distance}`,
        scrub: 1,
        pin: true,
      },
    });
  });
  return (
    <div
      ref={triggerRef}
      className="flex items-start justify-start w-full overflow-hidden"
    >
      <div ref={sliderRef} className="flex flex-row gap-10 w-fit">
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
