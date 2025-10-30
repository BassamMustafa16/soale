import NavigationButton from "../NavigationButton";
import Image from "next/image";
import RoundedParagraph from "./RoundedParagraph";
import Numbers from "./Numbers";

export default function Section1() {
  return (
    <section className="flex flex-row px-8 items-center justify-center">
      {/* Content */}
      <div className="space-y-10 flex-1">
        {/* Rounded pargraph */}
        <RoundedParagraph />
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
        <Numbers />
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
