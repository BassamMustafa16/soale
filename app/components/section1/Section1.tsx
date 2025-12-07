"use client";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import RoundedParagraph from "./RoundedParagraph";
import Numbers from "./Numbers";
import Animated from "../animation/Animated";
import Logos from "./Logos";
import { useAnimation } from "@/app/lib/AnimationEffect";

export default function Section1() {
  useAnimation();
  return (
    <section className="flex flex-col items-center gap-10 px-5 lg:px-10 max-w-7xl mx-auto">
      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-0 items-center justify-center">
        <div className="space-y-10 flex-1 items-center justify-center">
          {/* Rounded pargraph */}
          <div className="animated">
            <RoundedParagraph />
          </div>
          {/* Heading */}

          <h2 className="animated">
            We design with purpose. We build with intelligence.
          </h2>

          {/* Pargraph */}

          <p className="animated text-white-700 text-lg">
            We create future-ready brands, smart SaaS interfaces, and
            high-converting websites that leave a lasting impact.
          </p>

          {/* Numbers */}
          <Numbers />
          {/* Button */}
          <div className="animated text-[#212121]">
            <NavigationButton content="Learn about us" />
          </div>
        </div>
        {/* Image */}
        <div className="flex flex-1 grayscale-5 items-center justify-center">
          <Image
            src="/images/home-section1-image.webp"
            alt="Woman Image"
            width={512}
            height={512}
          />
        </div>
      </div>
      {/* Paragraph */}

      <p className="animated text-white-700">
        Trusted by +160,000 companies and clients
      </p>

      {/* Logos */}
      <div className="animated">
        <Logos />
      </div>
    </section>
  );
}
