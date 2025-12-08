import HeroBackground from "./HeroBackground";
import HeroButtom from "./HeroBottom";
import HeroMiddle from "./HeroMiddle";

export default function HeroSection() {
  return (
    <section className="md:h-screen flex flex-col items-center relative overflow-hidden px-5 lg:px-10 pt-10 md:pt-0">
      {/* Background */}
      <HeroBackground />

      {/* Middle Container */}
      <HeroMiddle />

      {/* Bottom Section */}
      <HeroButtom />
    </section>
  );
}
