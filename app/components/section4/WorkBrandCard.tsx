import Image from "next/image";
import NavigationButton from "../NavigationButton";

export default function WorkBrandCard({
  logo,
  heading,
  paragraph,
  tags,
  image,
}: {
  logo: string;
  heading: string;
  paragraph: string;
  tags: string[];
  image: string;
}) {
  return (
    <div className="space-y-5 max-w-md mx-auto">
      {/* Logo */}
      <div>
        <Image
          className="rounded-full"
          src={`images/${logo}`}
          alt="Work Brand Logo"
          width={48}
          height={48}
        />
      </div>
      <h3 className="leading-[120%]">{heading}</h3>
      <p className="text-white-700">{paragraph}</p>
      {/* Tags */}
      <div className="flex flex-row gap-2 flex-wrap">
        {tags.map((tag, indx) => (
          <div
            key={indx}
            className="bg-white-50 text-white-700 even:bg-white-100 py-2 px-4 rounded-full"
          >
            {tag}
          </div>
        ))}
      </div>
      {/* Image */}
      <div className="relative rounded-4xl overflow-hidden cursor-pointer ">
        <div className="">
          <Image
            className="rounded-4xl"
            src={`/images/${image}`}
            alt="Work Brand Image"
            width={800}
            height={863}
          />
        </div>
        <div className="inset-0 backdrop-blur-2xl z-10 absolute opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="text-[#212121]">
            <NavigationButton content="Explore Project" />
          </div>
        </div>
      </div>
    </div>
  );
}
