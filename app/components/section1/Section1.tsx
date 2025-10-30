import RoundedPargraphImage from "./RoundedPargraphImage";
import CountUp from "../animation/CountUp";
import { IBM_Plex_Mono } from "next/font/google";
import NavigationButton from "../NavigationButton";
import Image from "next/image";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
});

export default function Section1() {
  const roundedPargrapghImagesData = [
    { imageName: "home-section1-person1.png", alt: "Person 1" },
    { imageName: "home-section1-person2.png", alt: "Person 2" },
    { imageName: "home-section1-person3.png", alt: "Person 3" },
    { imageName: "home-section1-person4.png", alt: "Person 4" },
  ];
  return (
    <section className="flex flex-row px-8 items-center justify-center">
      {/* Content */}
      <div className="space-y-10 flex-1">
        {" "}
        {/* Rounded pargraph */}
        <div className="flex flex-row items-center gap-3 border border-white-100 rounded-full w-fit py-2 px-4">
          {/* Images Container */}
          <div className="flex items-center">
            {roundedPargrapghImagesData.map((data, index) => (
              <RoundedPargraphImage
                key={index}
                imageName={data.imageName}
                alt={data.alt}
                index={index}
              />
            ))}
          </div>
          <p className="text-white-700">Trusted by 150+ tech-driven teams.</p>
        </div>
        {/* Heading */}
        <h2 className="text-5xl">
          We design with purpose. We build with intelligence.
        </h2>
        {/* Pargraph */}
        <p className="text-white-700">
          We create future-ready brands, smart SaaS interfaces, and
          high-converting websites that leave a lasting impact.
        </p>
        {/* Numbers */}
        <div
          className={`${ibmPlexMono.className} flex flex-row w-full text-4xl font-normal justify-between z-10 mb-10`}
        >
          {/* Element 01 */}
          <div className="space-y-3">
            <hr className="w-1/3" />
            <p>
              $
              <CountUp from={0} to={10.7} direction="up" duration={1} />B
            </p>
            <p className="text-base">In product launches</p>
          </div>
          {/* Element 02 */}
          <div className="space-y-3">
            <hr className="w-1/3" />
            <p>
              <CountUp from={0} to={13} duration={1} direction="up" />
              K+
            </p>
            <p className="text-base"> In product launches</p>
          </div>
        </div>
        {/* Button */}
        <NavigationButton content="Learn about us" />
      </div>
      {/* Image */}
      <div className="flex-1 grayscale-5">
        <Image
          src="/images/home-section1-image.webp"
          alt="Woman Image"
          width={512}
          height={512}
        />
      </div>
    </section>
  );
}
