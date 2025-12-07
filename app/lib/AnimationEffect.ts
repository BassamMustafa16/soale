import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAnimation(selector = ".animated") {
  useEffect(() => {
    // Initial state
    gsap.set(selector, { y: 30, autoAlpha: 0 });

    ScrollTrigger.batch(selector, {
      start: "top bottom-=150px",
      end: "bottom top-=30px",

      // onLeave: (batch) =>
      //   gsap.to(batch, {
      //     y: -30,
      //     autoAlpha: 0,
      //     duration: 1,
      //     ease: "power1.out",
      //     overwrite: true,
      //     stagger: { each: 0.4, from: "start" },
      //   }),

      onLeaveBack: (batch) => {
        const immediate = batch.map((el) => ScrollTrigger.isInViewport(el));
        gsap.to(batch, {
          y: 30,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power1.out",
          overwrite: true,
          stagger: immediate.includes(true)
            ? 0 // 👈 No delay if elements already visible
            : { each: 0.4, from: "start" },
        });
      },

      onEnter: (batch) => {
        const immediate = batch.map((el) => ScrollTrigger.isInViewport(el));

        gsap.to(batch, {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power1.out",
          overwrite: true,
          stagger: immediate.includes(true)
            ? 0 // 👈 No delay if elements already visible
            : { each: 0.4, from: "start" },
        });
      },

      // onEnterBack: (batch) =>
      //   gsap.to(batch, {
      //     y: 0,
      //     autoAlpha: 0,
      //     duration: 1,
      //     ease: "power1.out",
      //     overwrite: true,
      //   }),
    });
  }, [selector]);
}
