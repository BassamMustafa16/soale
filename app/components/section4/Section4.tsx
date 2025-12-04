"use client";
import Image from "next/image";
import NavigationButton from "../NavigationButton";
import { useState } from "react";
import WorkBrandCard from "./WorkBrandCard";

export default function Section4() {
  const [currentWorkBrand, setCurrentNav] = useState<
    "AI" | "FINTECH" | "HEALTHCARE" | "SAAS" | "ECOMMERCE"
  >("AI");
  const categories: {
    id: number;
    name: "AI" | "FINTECH" | "HEALTHCARE" | "SAAS" | "ECOMMERCE";
  }[] = [
    { id: 1, name: "AI" },
    { id: 2, name: "FINTECH" },
    { id: 3, name: "HEALTHCARE" },
    { id: 4, name: "SAAS" },
    { id: 5, name: "ECOMMERCE" },
  ];
  const workBrands: {
    id: number;
    logo: string;
    heading: string;
    paragraph: string;
    tags: string[];
    image: string;
    category: "AI" | "FINTECH" | "HEALTHCARE" | "SAAS" | "ECOMMERCE";
  }[] = [
    {
      id: 1,
      logo: "work-brand-logo6.svg",
      heading: "NeuronIQ – AI-Powered Hiring Assistant",
      paragraph:
        "Streamlined UX for smarter candidate filtering and team collaboration.",
      tags: ["Product Design", "AI SaaS", "UX Strategy"],
      image: "work-brand6.webp",
      category: "AI",
    },
    {
      id: 2,
      logo: "work-brand-logo5.svg",
      heading: "Echo – AI Analytics Platform Design",
      paragraph:
        "Data-rich dashboards with a clean interface for better decision-making.",
      tags: ["Interaction", "AI SaaS", "Data Visualization"],
      image: "work-brand5.webp",
      category: "AI",
    },
    {
      id: 3,
      logo: "work-brand-logo1.svg",
      heading: "Nanobot – AI Chat Experience",
      paragraph:
        "Conversational AI interface designed to boost engagement and reduce churn.",
      tags: ["AI Design", "Product Strategy", "UI/UX Design"],
      image: "work-brand1.webp",
      category: "AI",
    },
    {
      id: 4,
      logo: "work-brand-logo7.svg",
      heading: "OrbitPay – Banking and Fintech App",
      paragraph:
        "Modern banking reimagined with intuitive UI and secure user flows.",
      tags: ["Fintech", "UI/UX Design", "App Development"],
      image: "work-brand7.webp",
      category: "FINTECH",
    },
    {
      id: 5,
      logo: "work-brand-logo9.svg",
      heading: "Vireo – Mental Health Care App",
      paragraph:
        "Gentle visuals and guided flows for a more mindful user journey.",
      tags: ["Healthcare", "Mobile App Design", "Brand Identity"],
      image: "work-brand9.webp",
      category: "HEALTHCARE",
    },
    {
      id: 6,
      logo: "work-brand-logo2.svg",
      heading: "Clarity – Healthcare Onboarding Dashboard",
      paragraph:
        "Guided SaaS onboarding with real-time tips to drive faster user activation.",
      tags: ["UX Flow", "SaaS Design", "Frontend Development"],
      image: "work-brand2.webp",
      category: "HEALTHCARE",
    },
    {
      id: 7,
      logo: "work-brand-logo8.svg",
      heading: "Solara – Smart Home Dashboard",
      paragraph:
        "A responsive interface for managing home tech through AI automation.",
      tags: ["IoT Interface", "UX Research", "Responsive Design"],
      image: "work-brand8.webp",
      category: "SAAS",
    },
    {
      id: 8,
      logo: "work-brand-logo3.svg",
      heading: "Nova – UI Kit for SaaS Teams",
      paragraph:
        "Scalable and modern component system for product teams to build faster.",
      tags: ["UI Kit Design", "Design System", "Dev Handoff"],
      image: "work-brand3.webp",
      category: "SAAS",
    },
    {
      id: 9,
      logo: "work-brand-logo4.svg",
      heading: "Boost – E-commerce Checkout Revamp",
      paragraph:
        "High-conversion checkout for increasing order value and customer retention.",
      tags: ["E-commerce Design", "CRO", "Branding"],
      image: "work-brand4.webp",
      category: "ECOMMERCE",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-10 px-5 lg:px-10 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-10 lg:flex-row justify-between w-full">
        {/* Left */}
        <div className="space-y-5 max-w-lg shrink-0">
          <div className="flex flex-row gap-3">
            {/* Orange Star */}
            <div>
              <Image
                src="/images/little-star.svg"
                alt="Little Start"
                width={16}
                height={16}
              />
            </div>
            <p className="font-plex-mono uppercase text-sm font-medium tracking-[1.5px] leading-[150%]">
              our work
            </p>
          </div>
          <h2 className="leading-[120%]">
            Featured Design + AI Project portfolio
          </h2>
        </div>
        {/* Right */}
        <div className="space-y-5 max-w-lg text-[#212121]">
          <p className="text-white-500 text-lg">
            We team up with startups, SaaS companies, and digital brands to
            create design-driven solutions that look great — and perform even
            better.
          </p>
          <NavigationButton content="See more projects" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 border-t border-white-100 pt-10 w-full ">
        {/* Navs */}
        <div className="flex-1">
          <div
            className="flex flex-row gap-3 flex-wrap justify-center
                        lg:flex-col lg:gap-0 lg:sticky lg:top-[64px]"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`text-white text-base  cursor-pointer border-white-100 border rounded-xl py-2 px-4 hover:bg-brand-orange font-medium transition-all duration-300 ease-in-out active:scale-90

                lg:rounded-none lg:border-x-0 lg:border-t-0 lg:text-left lg:pl-10 lg:hover:pl-4

                ${
                  currentWorkBrand === category.name &&
                  "bg-brand-orange lg:pl-4!"
                }`}
                onClick={() => setCurrentNav(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* Nav Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-15 gap-x-5 lg:flex-2">
          {workBrands
            .filter((workBrand) => workBrand.category === currentWorkBrand)
            .map((workBrand) => (
              <WorkBrandCard
                key={workBrand.id}
                logo={workBrand.logo}
                heading={workBrand.heading}
                paragraph={workBrand.paragraph}
                tags={workBrand.tags}
                image={workBrand.image}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
