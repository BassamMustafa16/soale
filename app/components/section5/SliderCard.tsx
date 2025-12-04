import Image from "next/image";
import NavigationButton from "../NavigationButton";

interface SliderCardProps {
  heading: string;
  parag: string;
  image: string;
}
export default function SliderCard({ heading, parag, image }: SliderCardProps) {
  return (
    <div className="relative rounded-4xl overflow-hidden w-xs aspect-[0.7875] lg:w-sm">
      {/* Image */}
      <div className="">
        <Image
          src={`/images/${image}.webp`}
          alt="Image"
          width={1260}
          height={1600}
        />
      </div>
      {/* Content */}
      <div className="absolute top-1/10 left-1/20 max-w-2xs lg:min-w-xs">
        <h4>{heading}</h4>
        <p className="text-white-500 max-w-xs">{parag}</p>
      </div>
      {/* Navigation Arrow */}
      <div className="z-10 absolute bottom-1/20 left-1/20 text-white">
        <NavigationButton blur={true} />
      </div>
    </div>
  );
}
