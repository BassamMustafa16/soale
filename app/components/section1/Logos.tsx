import Image from "next/image";
import Animated from "../animation/Animated";

export default function Logos() {
  const logos = [
    { id: 1, image: "company-logo1.svg", alt: "Company Logo 1" },
    { id: 2, image: "company-logo2.svg", alt: "Company Logo 2" },
    { id: 3, image: "company-logo3.svg", alt: "Company Logo 3" },
    { id: 4, image: "company-logo4.svg", alt: "Company Logo 4" },
    { id: 5, image: "company-logo5.svg", alt: "Company Logo 5" },
  ];
  return (
    <div className="flex flex-row gap-3 flex-wrap items-center justify-center">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex items-center justify-center bg-white-50 py-4 px-5 rounded-2xl w-[110px] md:w-[150px]"
        >
          <Image
            src={`/images/${logo.image}`}
            alt={logo.alt}
            width={104}
            height={28}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
