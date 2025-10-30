"use client";
import CountUp from "../animation/CountUp";
import { IBM_Plex_Mono } from "next/font/google";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
});

export default function HeroButtom() {
  //Refs
  const elementOneRef = useRef<HTMLDivElement | null>(null);
  const elementTwoRef = useRef<HTMLDivElement | null>(null);
  const elementThreeRef = useRef<HTMLDivElement | null>(null);
  const elementFourRef = useRef<HTMLDivElement | null>(null);

  const [startCountOne, setStartCountOne] = useState<boolean>(false);
  const [startCountTwo, setStartCountTwo] = useState<boolean>(false);
  const [startCountThree, setStartCountThree] = useState<boolean>(false);
  const [startCountFour, setStartCountFour] = useState<boolean>(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, y: 30, opacity: 0, ease: "power1.out" },
    });
    tl.from(elementOneRef.current, {
      onComplete: () => {
        setStartCountOne(true);
      },
    })
      .from(elementTwoRef.current, {
        onComplete: () => {
          setStartCountTwo(true);
        },
      })
      .from(elementThreeRef.current, {
        onComplete: () => {
          setStartCountThree(true);
        },
      })
      .from(elementFourRef.current, {
        onComplete: () => {
          setStartCountFour(true);
        },
      });
  }, []);
  return (
    <div
      className={`${ibmPlexMono.className} flex flex-row w-full justify-evenly text-4xl font-normal z-10 mb-10`}
    >
      {/* Element 01 */}
      <div ref={elementOneRef} className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp
            from={0}
            to={100}
            direction="up"
            duration={1}
            startWhen={startCountOne}
          />
          +
        </p>
        <p className="text-base">In product launches</p>
      </div>
      {/* Element 02 */}
      <div ref={elementTwoRef} className="space-y-3">
        <hr className="w-1/3" />
        <p>
          $
          <CountUp
            from={0}
            to={1.35}
            duration={1}
            direction="up"
            startWhen={startCountTwo}
          />
          B
        </p>
        <p className="text-base"> Startup funding raised</p>
      </div>
      {/* Element 03 */}
      <div ref={elementThreeRef} className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp
            from={0}
            to={10}
            duration={1}
            direction="up"
            startWhen={startCountThree}
          />
          x ROI
        </p>
        <p className="text-base">UX/UI Product Revamp</p>
      </div>
      {/* Element 04 */}
      <div ref={elementFourRef} className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp
            from={0}
            to={25}
            duration={1}
            direction="up"
            startWhen={startCountFour}
          />
          K+
        </p>
        <p className="text-base">Funds and syndicates</p>
      </div>
    </div>
  );
}
