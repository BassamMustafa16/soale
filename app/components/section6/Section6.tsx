export default function Section6() {
  const headings = ["Product Strategy", "UX Design", "UI Design", "Delivery"];
  const data = [
    {
      id: 1,
      heading: "Product Strategy",
      content: "Strategy Workshop",
    },
    {
      id: 2,
      heading: "Product Strategy",
      content: "Competitor Research",
    },
    {
      id: 3,
      heading: "Product Strategy",
      content: "Idea Validation",
    },
    {
      id: 4,
      heading: "Product Strategy",
      content: "Product Positioning",
    },
    {
      id: 5,
      heading: "Product Strategy",
      content: "Road Mapping",
    },
    {
      id: 6,
      heading: "Product Strategy",
      content: "UX Research",
    },
    {
      id: 7,
      heading: "Product Strategy",
      content: "Modularization",
    },
    {
      id: 8,
      heading: "UX Design",
      content: "User Mapping",
    },
    {
      id: 9,
      heading: "UX Design",
      content: "Wireframes & Flows",
    },
    {
      id: 10,
      heading: "UX Design",
      content: "Architecture",
    },
    {
      id: 11,
      heading: "UX Design",
      content: "Usability Testing",
    },
    {
      id: 12,
      heading: "UI Design",
      content: "Visual Design",
    },
    {
      id: 13,
      heading: "UI Design",
      content: "High-Fidelity Design",
    },
    {
      id: 14,
      heading: "UI Design",
      content: "Design System",
    },
    {
      id: 15,
      heading: "UI Design",
      content: "Interaction Design",
    },
    {
      id: 16,
      heading: "UI Design",
      content: "Micro-animations",
    },
    {
      id: 17,
      heading: "Delivery",
      content: "Handoff",
    },
    {
      id: 18,
      heading: "Delivery",
      content: "Feedback",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-10 px-5 lg:px-10 max-w-7xl mx-auto bg-gray-950 py-15">
      {/* Heading */}
      <div className="space-y-4 self-start">
        <h2 className="leading-[120%] max-w-md">
          We simplify product Design process
        </h2>
        <p className="text-white-700  max-w-lg">
          We don’t follow trends blindly or design without context.
        </p>
        <p className="text-white-700  max-w-lg">
          Every UI we craft aligns closely with your product’s purpose and
          business goals. And we never develop without testing — validation is
          non-negotiable.
        </p>
      </div>
      {/* Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {headings.map((heading, indx) => (
          <div key={indx} className="border border-white-100 p-2">
            {/* Heading */}
            <p className="text-white-500">{heading}</p>
            {/* Rows */}
            <div className="p-2 space-y-1 mt-2 text-sm">
              {data
                .filter((el) => el.heading === heading)
                .map((el) => (
                  <div
                    key={el.id}
                    className="bg-white p-2 rounded-full flex flex-row items-center gap-2"
                  >
                    <div className="w-8 aspect-square rounded-full border border-brand-orange-400 bg-brand-orange-100 text-brand-orange grow-0 flex items-center justify-center">
                      {el.id}
                    </div>
                    <span className="text-[#212121] font-medium">
                      {el.content}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
