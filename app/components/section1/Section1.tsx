import NavigationButton from "../NavigationButton";
import Image from "next/image";
import RoundedParagraph from "./RoundedParagraph";
import Numbers from "./Numbers";
import Animated from "../animation/Animated";
import Logos from "./Logos";

export default function Section1() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-8">
      {/* Content */}
      <div className="flex flex-row items-center justify-center">
        <div className="space-y-10 flex-1 items-center justify-center">
          {/* Rounded pargraph */}
          <Animated>
            <RoundedParagraph />
          </Animated>
          {/* Heading */}
          <Animated>
            <h2 className="">
              We design with purpose. We build with intelligence.
            </h2>
          </Animated>

          {/* Pargraph */}
          <Animated>
            <p className="text-white-700 text-lg">
              We create future-ready brands, smart SaaS interfaces, and
              high-converting websites that leave a lasting impact.
            </p>
          </Animated>

          {/* Numbers */}
          <Numbers />
          {/* Button */}
          <Animated>
            <NavigationButton content="Learn about us" />
          </Animated>
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
      <Animated>
        <p className="text-white-700">
          Trusted by +160,000 companies and clients
        </p>
      </Animated>
      {/* Logos */}
      <Animated>
        <Logos />
      </Animated>
    </section>
  );
}
