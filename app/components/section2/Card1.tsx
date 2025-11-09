import Image from "next/image";
import Link from "next/link";
import TopRightArrow from "../svgs/TopRightArrow";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function Card1() {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const arrowTl = gsap.timeline({ paused: true });

  useEffect(() => {
    arrowTl.to(arrowRef.current, {
      y: -48,
      x: 48,
      ease: "power2.inOut",
      duration: 0.3,
    });
    return () => {
      arrowTl.kill();
    };
  }, []);

  return (
    <div className="rounded-4xl overflow-hidden flex flex-col gap-5 pb-5">
      <div className="rounded-4xl overflow-hidden relative">
        <Image
          src="/images/home-section2-person.webp"
          alt="Person"
          width={1080}
          height={1370}
        />
        <Link
          onMouseEnter={() => arrowTl.play()}
          onMouseLeave={() => arrowTl.reverse()}
          href="#"
          className="absolute bottom-5 right-5 backdrop-blur-xs rounded-2xl overflow-hidden bg-black-240"
        >
          <div className="w-[48px] aspect-square flex items-center justify-center rounded-2xl relative overflow-hidden">
            <div
              ref={arrowRef}
              className="absolute top-0 right-0 grid grid-cols-2 grid-rows-2 w-[96px] aspect-square place-items-center "
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
      </div>
      <p className="text-xl">24/7 Priority Response</p>
      <p className="text-white-700">
        Urgent updates handled fast-priority requests completed within 24H.
      </p>
    </div>
  );
}
