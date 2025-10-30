"use client";
import CountUp from "../animation/CountUp";
import { IBM_Plex_Mono } from "next/font/google";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function HeroBottom() {
  // Refs
  const elementOneRef = useRef<HTMLDivElement | null>(null);
  const elementTwoRef = useRef<HTMLDivElement | null>(null);
  const elementThreeRef = useRef<HTMLDivElement | null>(null);
  const elementFourRef = useRef<HTMLDivElement | null>(null);

  // State to trigger each CountUp
  const [startCountOne, setStartCountOne] = useState(false);
  const [startCountTwo, setStartCountTwo] = useState(false);
  const [startCountThree, setStartCountThree] = useState(false);
  const [startCountFour, setStartCountFour] = useState(false);

  useEffect(() => {
    const elements = [
      elementOneRef.current,
      elementTwoRef.current,
      elementThreeRef.current,
      elementFourRef.current,
    ];

    // 1️⃣ Hide all elements immediately before animation
    gsap.set(elements, { autoAlpha: 0, y: 30 });

    // 2️⃣ Animate them in sequence
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.to(elementOneRef.current, {
      autoAlpha: 1,
      y: 0,
      onComplete: () => setStartCountOne(true),
    })
      .to(
        elementTwoRef.current,
        { autoAlpha: 1, y: 0, onComplete: () => setStartCountTwo(true) },
        "-=0.5"
      )
      .to(
        elementThreeRef.current,
        { autoAlpha: 1, y: 0, onComplete: () => setStartCountThree(true) },
        "-=0.5"
      )
      .to(
        elementFourRef.current,
        { autoAlpha: 1, y: 0, onComplete: () => setStartCountFour(true) },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className={`${ibmPlexMono.className} flex flex-row w-full justify-evenly text-4xl font-normal z-10 mb-10`}
    >
      {/* Element 01 */}
      <div ref={elementOneRef} className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp from={0} to={100} direction="up" duration={1} startWhen={startCountOne} />+
        </p>
        <p className="text-base">In product launches</p>
      </div>

      {/* Element 02 */}
      <div ref={elementTwoRef} className="space-y-3">
        <hr className="w-1/3" />
        <p>
          $
          <CountUp from={0} to={1.35} duration={1} direction="up" startWhen={startCountTwo} />
          B
        </p>
        <p className="text-base">Startup funding raised</p>
      </div>

      {/* Element 03 */}
      <div ref={elementThreeRef} className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp from={0} to={10} duration={1} direction="up" startWhen={startCountThree} />x ROI
        </p>
        <p className="text-base">UX/UI Product Revamp</p>
      </div>

      {/* Element 04 */}
      <div ref={elementFourRef} className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp from={0} to={25} duration={1} direction="up" startWhen={startCountFour} />K+
        </p>
        <p className="text-base">Funds and syndicates</p>
      </div>
    </div>
  );
}
