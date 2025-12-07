"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [showNavs, setShowNavs] = useState<boolean>(false);
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
      className="absolute md:fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 md:py-5 text-white"
      style={{
        backgroundColor: "rgba(0,0,0,0)",
        transform: "translateY(30px)",
      }}
    >
      <div className="max-w-[120px]  md:absolute">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={600} height={600} />
        </Link>
      </div>
      <nav
        className={`
    md:flex md:flex-row md:static md:bg-transparent md:p-0 md:w-fit md:max-h-[500px] md:opacity-100

    flex flex-col absolute top-14
    bg-[#000000F7] p-4 w-[calc(100%-32px)] rounded-2xl gap-6 mx-auto

    overflow-hidden transition-all duration-500

    ${showNavs ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
  `}
      >
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
      <button
        className="md:hidden w-12 cursor-pointer aspect-square bg-brand-orange rounded-2xl p-2"
        onClick={() => setShowNavs(!showNavs)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path
            fill="#ffffff"
            d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
          />
        </svg>
      </button>
    </header>
  );
}
