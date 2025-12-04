import Slider from "./Slider";
import SliderCard from "./SliderCard";

export default function Section5() {
  const data = [
    {
      id: 1,
      heading: "UI/UX Design",
      parag:
        "Intuitive experiences are what turn functional products into memorable.",
      image: "home-section5-image1",
    },
    {
      id: 2,
      heading: "Mobile App Development",
      parag: "Designing seamless mobile experiences that stay accessible.",
      image: "home-section5-image2",
    },
    {
      id: 3,
      heading: "Website Development",
      parag:
        "Your first impression matters — we craft pages that capture attention.",
      image: "home-section5-image3",
    },
    {
      id: 4,
      heading: "Branding & Identity",
      parag:
        "Building brands with depth and clarity — identities that connect, resonate.",
      image: "home-section5-image4",
    },
    {
      id: 5,
      heading: "Web3 & NFT Design",
      parag:
        "Designing for the web sleek, secure, and community-focused experiences for dApps.",
      image: "home-section5-image5",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-10 px-5 lg:px-10 max-w-7xl mx-auto">
      <h2 className="text-left self-start max-w-md leading-[120%]">
        Services and solutions we offer.
      </h2>
      <p className="text-white-500 max-w-xl self-start text-lg">
        We work with creative teams and ambitious founders to turn vision into
        product — with intuitive UX, standout visuals, and seamless digital
        experiences that users remember.
      </p>
      {/* Slider */}
      {/* <div className="flex flex-row gap-5">
        {data.map((el) => (
          <div key={el.id}>
            <SliderCard
              heading={el.heading}
              parag={el.parag}
              image={el.image}
            />
          </div>
        ))}
      </div> */}
      <Slider data={data} />
    </section>
  );
}
