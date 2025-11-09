import Image from "next/image";
import BlinkLottie from "../animation/Blink";
import LetterIcon from "../svgs/LetterIcon";
import AccountIcon from "../svgs/AccountIcon";
import PersonIcon from "../svgs/PersonIcon";
export default function Card2() {
  return (
    <div className="rounded-4xl bg-[#141414] overflow-hidden flex flex-col gap-5 p-5 items-center">
      {/* Images */}
      <div className="aspect-square w-full max-w-3xs grid grid-cols-2 grid-rows-2 relative">
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
      <p className="text-xl text-left w-full">Download Your Brand Kit</p>
      <p>
        Access all design assets in one click —{" "}
        <span className="text-white-700">
          fonts, color codes, social templates & more.
        </span>
      </p>
      <button className="bg-white text-black hover:bg-brand-orange hover:text-white transition-all duration-300 cursor-pointer rounded-2xl py-2 w-full ">
        Download Toolkit
      </button>
    </div>
  );
}
