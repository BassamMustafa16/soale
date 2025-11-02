"use client";
import Image from "next/image";
import Animated from "../animation/Animated";
import Link from "next/link";
import TopRightArrow from "../svgs/TopRightArrow";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import BlinkLottie from "../animation/Blink";
import LetterIcon from "../svgs/LetterIcon";
import AccountIcon from "../svgs/AccountIcon";
import PersonIcon from "../svgs/PersonIcon";

export default function Section2() {
  const images = [
    { id: 1, image: "home-section2-person1.png", alt: "Person 01" },
    { id: 2, image: "home-section2-person2.png", alt: "Person 02" },
    { id: 3, image: "home-section2-person3.png", alt: "Person 03" },
    { id: 4, image: "home-section2-person4.png", alt: "Person 04" },
  ];

  const Checklist = [
    { id: 1, content: "Adjust font sizes for mobile", checked: true },
    { id: 2, content: "Swap hero visuals or video", checked: true },
    { id: 3, content: "Align content spacing & margins", checked: true },
    { id: 4, content: "Replace or update images", checked: true },
    { id: 5, content: "Optimize for SEO basics", checked: false },
    { id: 6, content: "Tweak layout responsiveness", checked: false },
    { id: 7, content: "Refine brand color usage", checked: false },
  ];
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.to(arrowRef.current, {
      y: -48,
      x: 48,
      ease: "power2.inOut",
      duration: 0.3,
    });
    return () => {
      tl.kill();
    };
  });
  return (
    <section className="flex flex-col gap-10 items-center justify-center px-5">
      {/* Heading */}
      <Animated>
        <h2>Your success, supported</h2>
      </Animated>

      {/* Paragrapgh */}
      <Animated>
        <p className="text-white-700 text-lg max-w-md text-center">
          Quick responses, thoughtful revisions, and flexible post-launch care
          built for modern teams.
        </p>
      </Animated>
      {/* Content */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {/* Card 01 */}
        <div className="rounded-4xl overflow-hidden flex flex-col gap-5 pb-5">
          <div className="rounded-4xl overflow-hidden relative">
            <Image
              src="/images/home-section2-person.webp"
              alt="Person"
              width={1080}
              height={1370}
            />
            <Link
              onMouseEnter={() => tl.play()}
              onMouseLeave={() => tl.reverse()}
              href="#"
              className="absolute bottom-5 right-5 backdrop-blur-xs rounded-2xl overflow-hidden bg-black-240"
            >
              <div className="w-[48px] aspect-square flex items-center justify-center rounded-2xl relative overflow-hidden">
                <div
                  ref={arrowRef}
                  className="absolute top-0 right-0 grid grid-cols-2 grid-rows-2 w-[96px] aspect-square place-items-center "
                >
                  <div className="col-start-2">
                    <TopRightArrow />
                  </div>
                  <div>
                    <TopRightArrow />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <p className="text-xl">24/7 Priority Response</p>
          <p className="text-white-700">
            Urgent updates handled fast-priority requests completed within 24H.
          </p>
        </div>
        {/* Card 02 */}
        <div className="rounded-4xl bg-[#141414] overflow-hidden flex flex-col gap-5 p-5">
          {/* Images */}
          <div className="aspect-square w-full grid grid-cols-2 grid-rows-2 relative">
            {/* background 01 */}
            <div className=" rotate-12">
              <Image
                src="/images/home-section2-background1.png"
                alt="newspaper"
                width={395}
                height={334}
              />
            </div>
            {/* Background 02 */}
            <div className="flex items-center justify-center p-5">
              <LetterIcon />
            </div>
            {/* Background 03 */}
            <div className="flex items-center justify-center p-5">
              <AccountIcon />
            </div>
            {/* Background 04 */}
            <div className="flex items-center justify-center -rotate-12 p-5">
              <PersonIcon />
            </div>
            {/* Blink */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 - -translate-y-1/2 z-10">
              <BlinkLottie />
            </div>
            <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 - -translate-y-1/2 z-10 bg-brand-orange w-1/2 p-7 aspect-square rounded-full">
              <Image
                src="/images/cloud-icon.svg"
                alt="Cloud Icon"
                width={128}
                height={128}
              />
            </div>
          </div>
          <p className="text-xl">Download Your Brand Kit</p>
          <p>
            Access all design assets in one click —{" "}
            <span className="text-white-700">
              fonts, color codes, social templates & more.
            </span>
          </p>
          <button className="bg-white text-black hover:bg-brand-orange hover:text-white transition-all duration-300 cursor-pointer rounded-2xl py-2">
            Download Toolkit
          </button>
        </div>
        {/* Card 03 */}
        <div className=" md:col-span-2 space-y-5 flex flex-col justify-between">
          {/* Top Message */}
          <div className="flex flex-row gap-5 py-2 px-4 bg-white rounded-full items-center justify-center">
            {/* Mail Notification Icon */}
            <div className="border-black w-14 aspect-square">
              <Image
                src="/images/mail-notification.svg"
                alt="Mail Notifications"
                width={54}
                height={54}
              />
            </div>
            <p className="grow text-[#212121] font-medium text-base">
              Need to fine-tune something after launch?
            </p>
            {/* Images */}
            <div className="flex flex-row">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="-mr-4 w-14 aspect-square last:mr-0 border-white border-2 rounded-full"
                >
                  <Image
                    src={`/images/${image.image}`}
                    alt={image.alt}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Grayed Content */}
          <div className="bg-[#141414] p-5 rounded-4xl space-y-5 flex flex-col justify-between grow">
            {/* Checklist */}
            <div className="grid grid-cols-2 gap-5">
              {Checklist.map((item) => (
                <div key={item.id} className="flex flex-row gap-3 text-sm">
                  <div
                    className={`w-6 h-6 ${
                      !item.checked && "border"
                    } border-white-500 rounded-full`}
                  >
                    {item.checked && (
                      <Image
                        src="/images/checked.svg"
                        alt="Checked Icon"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <p className={`${item.checked && "text-white-500"}`}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            {/* Grayed Content Footer */}
            <div>
              <p>Valid for 90 days after launch</p>
              <p>
                Includes up to 5 minor revisions{" "}
                <span className="text-white-500">– no extra cost.</span>
              </p>
            </div>
          </div>
          {/* Card Footer */}
          <p className="text-sm text-white-500">
            We’ve got you cover with
            <span className="text-white"> Subtle updates, site maintained</span>
          </p>
        </div>
      </div>
    </section>
  );
}
