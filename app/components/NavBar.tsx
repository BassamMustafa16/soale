"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const navbar = navbarRef.current;

    // Create a GSAP timeline linked to scroll position
    gsap.to(navbar, {
      backgroundColor: "rgba(0, 0, 0, 1)",
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "100px top", // scroll distance over which animation happens
        scrub: true, // makes it follow scroll smoothly
      },
    });
  }, []);

  return (
   
      <header
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-16 py-4 text-white"
        style={{
          backgroundColor: "rgba(0,0,0,0)",
          transform: "translateY(30px)",
        }}
      >
        <div className="max-w-[120px] absolute">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={600} height={600} />
          </Link>
        </div>
        <nav className="flex gap-6 mx-auto">
          <Link href="#about" className="text-white-700 hover:text-white">
            About
          </Link>
          <Link href="#work" className="text-white-700 hover:text-white">
            Work
          </Link>
          <Link href="#services" className="text-white-700 hover:text-white">
            Services
          </Link>
          <Link href="#pricing" className="text-white-700 hover:text-white">
            Pricing
          </Link>
          <Link href="#blog" className="text-white-700 hover:text-white">
            Blog
          </Link>
        </nav>
      </header>
  
  );
}
