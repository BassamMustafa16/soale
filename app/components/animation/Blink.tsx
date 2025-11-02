"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function BlinkLottie() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/689344451f64fbfa1a8095f0_c00c695417b4b8f768893f2fd55f63d7_blink.json",
    });

    return () => anim.destroy();
  }, []);

  return <div ref={container} className="w-60 h-60" />;
}
