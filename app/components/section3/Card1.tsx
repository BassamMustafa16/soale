import Image from "next/image";
export default function Card1() {
  return (
    <div className="flex flex-col gap-5 h-full">
      {/* Heading */}
      <div className="space-y-2">
        <p className="text-white-500 font-plex-mono text-[14px] font-semibold uppercase tracking-wider">
          redesigned AI dashboard.
        </p>
        <p className="text-lg">Zerra Interactive</p>
      </div>
      {/* Image */}
      <div className="overflow-hidden rounded-4xl">
        <Image
          src="/images/home-section3-image1.webp"
          alt="Tennis field"
          width={1260}
          height={1600}
        />
      </div>
      {/* Description */}
      <p className="text-white-500">
        Expanded
        <span className="text-white">
          {" "}
          market presence through multilingual
        </span>{" "}
        launch strategy.
      </p>
      {/* Company Logo */}
      <div className="bg-white-50 py-3 px-6 rounded-xl w-fit max-w-1/2 mt-auto">
        <Image
          src="/images/company-logo2.svg"
          alt="Goldline logo"
          width={119}
          height={28}
        />
      </div>
    </div>
  );
}
