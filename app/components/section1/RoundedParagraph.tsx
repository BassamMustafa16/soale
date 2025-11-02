import RoundedPargraphImage from "./RoundedPargraphImage";

export default function RoundedParagraph() {
  const roundedPargrapghImagesData = [
    { imageName: "home-section1-person1.png", alt: "Person 1" },
    { imageName: "home-section1-person2.png", alt: "Person 2" },
    { imageName: "home-section1-person3.png", alt: "Person 3" },
    { imageName: "home-section1-person4.png", alt: "Person 4" },
  ];

  return (
    <div className="flex flex-row items-center gap-3 border border-white-100 rounded-full w-fit py-2 px-4">
      {/* Images Container */}
      <div className="flex items-center">
        {roundedPargrapghImagesData.map((data, index) => (
          <RoundedPargraphImage
            key={index}
            imageName={data.imageName}
            alt={data.alt}
            index={index}
          />
        ))}
      </div>
      <p className="text-white-700">Trusted by 150+ tech-driven teams.</p>
    </div>
  );
}
