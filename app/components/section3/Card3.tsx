import Image from "next/image";
export default function Card3() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="space-y-2">
        <p className="text-white-500 font-semibold font-plex-mono text-[14px] uppercase tracking-wider">
          redesigned AI dashboard.
        </p>
        <p className="text-lg">Edgebeam Creative</p>
      </div>
      <div className="overflow-hidden rounded-4xl">
        <Image
          src="/images/home-section3-image3.webp"
          alt="Tennis field"
          width={1260}
          height={1600}
        />
      </div>
      <p className="text-white-500">
        <span className="text-white">Revamped digital branding, sparking </span>
        customer loyalty and shareability.
      </p>
      {/* Company Logo */}
      <div className="bg-white-50 py-3 px-6 rounded-xl w-fit max-w-1/2 mt-auto">
        <Image
          src="/images/company-logo4.svg"
          alt="Goldline logo"
          width={119}
          height={28}
        />
      </div>
    </div>
  );
}
