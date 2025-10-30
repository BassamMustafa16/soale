"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function NavigationButton({ content }: { content: string }) {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    gsap.set(linkRef.current, { y: -30 });
    gsap.to(linkRef.current, { y: 0, autoAlpha: 1, duration: 1, delay: 2 });
    tl.to(arrowRef.current, {
      y: -48,
      x: 48,
      ease: "none",
      duration: 0.3,
    });
  });

  return (
    <Link
      ref={linkRef}
      href="#"
      className="flex flex-row text-[#212121]"
      onMouseEnter={() => tl.play()}
      onMouseLeave={() => tl.reverse()}
      style={{ opacity: 0, visibility: "hidden" }}
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
