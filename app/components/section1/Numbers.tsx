"use client";
import CountUp from "../animation/CountUp";
import { IBM_Plex_Mono } from "next/font/google";
import Animated from "../animation/Animated";
import { useState } from "react";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
});

export default function Numbers() {
  const [firstElementVisiable, setFirstElementVisiable] =
    useState<boolean>(false);
  const [secontElementVisiable, setSecondElementVisiable] =
    useState<boolean>(false);
  return (
    <div
      className={`${ibmPlexMono.className} flex flex-row gap-10 w-full text-4xl font-normal z-10 mb-10`}
    >
      {/* Element 01 */}
      <Animated setIsCompleted={setFirstElementVisiable}>
        <div className="space-y-3 text-3xl md:text-4xl">
          <hr className="w-1/3" />
          <p>
            $
            <CountUp
              from={0}
              to={10.7}
              direction="up"
              duration={1}
              startWhen={firstElementVisiable}
            />
            B
          </p>
          <p className="text-base">In product launches</p>
        </div>
      </Animated>
      {/* Element 02 */}
      <Animated setIsCompleted={setSecondElementVisiable}>
        <div className="space-y-3 text-3xl md:text-4xl">
          <hr className="w-1/3" />
          <p>
            <CountUp
              from={0}
              to={13}
              duration={1}
              direction="up"
              startWhen={secontElementVisiable}
            />
            K+
          </p>
          <p className="text-base"> In product launches</p>
        </div>
      </Animated>
    </div>
  );
}
