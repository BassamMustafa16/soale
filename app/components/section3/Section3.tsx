"use client";
import Image from "next/image";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

import { useAnimation } from "@/app/lib/AnimationEffect";

export default function Section3() {
  useAnimation();
  return (
    <section className="flex flex-col items-center gap-10 px-5 lg:px-10 max-w-7xl mx-auto">
      <div className="animated flex flex-row gap-3">
        <div>
          <Image
            src="/images/little-star.svg"
            alt="Little Orange Star"
            width={16}
            height={16}
          />
        </div>
        <p className="font-plex-mono uppercase text-xs font-medium tracking-[1.5px] leading-[150%]">
          OUTCOMES AND Results
        </p>
      </div>

      <h2 className="animated text-center max-w-[470px]">
        Outcomes that speak for themselves
      </h2>

      <p className="animated text-white-700 max-w-xl text-center">
        We focus on real results—built through data, design, and innovation.
        Every project, every metric, every milestone matters.
      </p>

      {/* Cards */}
      <div className="grid gap-15 md:gap-x-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {/* Card 01 */}
        <div className="animated">
          <Card1 />
        </div>
        {/* Card 02 */}
        <div className="animated">
          <Card2 />
        </div>
        {/* Card 03 */}
        <div className="animated">
          <Card3 />
        </div>
      </div>
    </section>
  );
}
