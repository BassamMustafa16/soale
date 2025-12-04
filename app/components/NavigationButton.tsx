"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import TopRightArrow from "./svgs/TopRightArrow";

export default function NavigationButton({
  content,
  blur = false,
}: {
  content?: string;
  blur?: boolean;
}) {
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
      className="flex flex-row w-fit"
      onMouseEnter={() => tl.play()}
      onMouseLeave={() => tl.reverse()}
    >
      {content && (
        <div className="bg-white py-[13px] px-[26px] rounded-2xl font-medium">
          {content}
        </div>
      )}

      <div
        className={` w-[48px] aspect-square flex items-center justify-center rounded-2xl relative overflow-hidden ${
          !content && "aspect-square h-12"
        } ${blur ? "backdrop-blur-xs bg-black-240" : "bg-white"}`}
      >
        <div
          ref={arrowRef}
          className="absolute top-0 right-0 grid grid-cols-2 grid-rows-2 w-[96px] aspect-square place-items-center"
        >
          <div className="col-start-2">
            <TopRightArrow />
          </div>
          <div>
            <TopRightArrow />
          </div>
        </div>
      </div>
    </Link>
  );
}
