"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavigationButton({ content }: { content: string }) {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.to(arrowRef.current, {
      y: -48,
      x: 48,
      ease: "power1.out",
      duration: 0.3,
    });
    return () => {
      tl.kill();
    };
  });

  return (
    <Link
      href="#"
      className="flex flex-row text-[#212121] w-fit"
      onMouseEnter={() => tl.play()}
      onMouseLeave={() => tl.reverse()}
    >
      <div className="bg-white py-[13px] px-[26px] rounded-2xl font-medium">
        {content}
      </div>

      <div className="bg-white w-[48px] aspect-square flex items-center justify-center rounded-2xl relative overflow-hidden">
        <div
          ref={arrowRef}
          className="absolute top-0 right-0 grid grid-cols-2 grid-rows-2 w-[96px] aspect-square place-items-center "
        >
          <div className="col-start-2">
            <Image
              src="/images/top-right-arrow.svg"
              alt="top right arrow"
              width={30}
              height={30}
            />
          </div>
          <div>
            <Image
              src="/images/top-right-arrow.svg"
              alt="top right arrow"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
