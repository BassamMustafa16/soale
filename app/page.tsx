import HeroSection from "./components/hero/HeroSection";
import NavBar from "./components/NavBar";
import Section1 from "./components/section1/Section1";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="space-y-20">
        {/* Header */}
        <HeroSection />
        <Section1 />
      </main>
    </>
  );
}
