import Image from "next/image";
import Animated from "../animation/Animated";
import Link from "next/link";

export default function Section2() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center px-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        <div className="rounded-4xl overflow-hidden">
          <div className="rounded-4xl overflow-hidden relative">
            <Image
              src="/images/home-section2-person.webp"
              alt="Person"
              width={1080}
              height={1370}
            />
            <Link
              href="#"
              className="absolute bottom-5 right-5 backdrop-blur-xs p-3 rounded-2xl overflow-hidden bg-black-240"
            >
              <div className="w-fit">
                <Image
                  src="/images/top-right-arrow.svg"
                  alt="top right arrow"
                  width={36}
                  height={36}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className=""></div>
        <div className=" md:col-span-2"></div>
      </div>
    </section>
  );
}
