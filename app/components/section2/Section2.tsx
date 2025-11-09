"use client";

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { useAnimation } from "@/app/lib/AnimationEffect";

export default function Section2() {
  useAnimation();
  return (
    <section className="flex flex-col items-center gap-10 px-5 lg:px-10 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="animated text-center">Your success, supported</h2>

      {/* Paragrapgh */}
      <p className="animated text-white-700 text-lg max-w-md text-center">
        Quick responses, thoughtful revisions, and flexible post-launch care
        built for modern teams.
      </p>

      {/* Content */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {/* Card 01 */}
        <div className="animated">
          <Card1 />
        </div>

        {/* Card 02 */}
        <div className="animated">
          <Card2 />
        </div>

        {/* Card 03 */}
        <div className="animated sm:col-span-2">
          <Card3 />
        </div>
      </div>
    </section>
  );
}
