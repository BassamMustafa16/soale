import Image from "next/image";
export default function Card2() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="space-y-2">
        <p className="text-white-500 font-plex-mono text-[14px] font-semibold uppercase tracking-wider">
          redesigned AI dashboard.
        </p>
        <p className="text-lg">Boltframe Technologies</p>
      </div>
      <div className="relative rounded-4xl">
        <Image
          src="/images/home-section3-image2.webp"
          alt="Tennis field"
          className="rounded-4xl"
          width={1260}
          height={1600}
        />
        {/* Floating Boxes */}
        {/* Box 01 */}
        <div className="absolute bottom-1/16 -left-2.5 lg:-left-5 p-4 rounded-2xl bg-white text-[#212121] w-fit">
          <p className="text-brand-orange text-2xl border-t border-[#2727274d] py-2">
            +50%
          </p>
          <p className="text-base">Conversion Uplift</p>
        </div>
        {/* Box 02 */}
        <div className="absolute bottom-1/3 -right-2.5 lg:-right-5 p-4 rounded-2xl bg-white text-[#212121] w-fit">
          <p className="text-brand-orange text-2xl border-t border-[#2727274d] py-2">
            -35%
          </p>
          <p className="text-base">Drop in Bounce Rate</p>
        </div>
      </div>
      <p className="text-white">
        Elevated user{" "}
        <span className="text-white-500">engagement and conversion</span>{" "}
        through a redesigned AI dashboard.
      </p>
      {/* Company Logo */}
      <div className="bg-white-50 py-3 px-6 rounded-xl w-fit max-w-1/2 mt-auto">
        <Image
          src="/images/company-logo1.svg"
          alt="Goldline logo"
          width={119}
          height={28}
        />
      </div>
    </div>
  );
}
