import Image from "next/image";
import NavBar from "./components/NavBar";
import NavigationButton from "./components/NavigationButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* Header */}
        <section className="h-screen border flex items-center justify-center">
          {/* Middle Container */}
          <div className="flex flex-col gap-10 items-center justify-center max-w-3xl">
            {/* Rounded pargraph */}
            <div className="flex flex-row items-center gap-3 border border-white-100 rounded-full w-fit py-2 px-4">
              <div className="">
                <Image
                  src="/images/little-star.svg"
                  alt="orange star"
                  width={16}
                  height={16}
                />
              </div>
              <p>
                Design studio for AI, SaaS & tech startups | Based on San
                Francisco
              </p>
            </div>
            
            <h1 className="text-6xl text-center">
              Creative studio powering AI, brands & digital futures
            </h1>

            <p className="text-white-700 max-w-xl text-center">
              We partner with visionary teams to build standout brands, launch
              smarter products, and grow with purpose.
            </p>

            <NavigationButton />
          </div>
        </section>
      </main>
    </>
  );
}
