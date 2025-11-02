import HeroSection from "./components/hero/HeroSection";
import NavBar from "./components/NavBar";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="space-y-20">
        {/* Header */}
        <HeroSection />
        <Section1 />
        <Section2 />
      </main>
    </>
  );
}
