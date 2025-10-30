import HeroBackground from "./HeroBackground";
import HeroButtom from "./HeroBottom";
import HeroMiddle from "./HeroMiddle";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center relative overflow-hidden">
      {/* Background */}
      <HeroBackground />

      {/* Middle Container */}
      <HeroMiddle />

      {/* Bottom Section */}
      <HeroButtom />
    </section>
  );
}
