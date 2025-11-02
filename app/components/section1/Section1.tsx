import NavigationButton from "../NavigationButton";
import Image from "next/image";
import RoundedParagraph from "./RoundedParagraph";
import Numbers from "./Numbers";
import FadeInUp from "../animation/FadeInUp";

export default function Section1() {
  return (
    <section className="flex flex-row px-8 items-center justify-center">
      {/* Content */}
      <div className="space-y-10 flex-1 items-center justify-center">
        {/* Rounded pargraph */}
        <FadeInUp >
          <RoundedParagraph />
        </FadeInUp>
        {/* Heading */}
        <FadeInUp >
          <h2 className="text-5xl">
            We design with purpose. We build with intelligence.
          </h2>
        </FadeInUp>

        {/* Pargraph */}
        <FadeInUp>
          <p className="text-white-700">
            We create future-ready brands, smart SaaS interfaces, and
            high-converting websites that leave a lasting impact.
          </p>
        </FadeInUp>

        {/* Numbers */}
        <Numbers />
        {/* Button */}
        <FadeInUp >
          <NavigationButton content="Learn about us" />
        </FadeInUp>
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
    </section>
  );
}
