import Image from "next/image";
export default function Card3() {
  const images = [
    { id: 1, image: "home-section2-person1.png", alt: "Person 01" },
    { id: 2, image: "home-section2-person2.png", alt: "Person 02" },
    { id: 3, image: "home-section2-person3.png", alt: "Person 03" },
    { id: 4, image: "home-section2-person4.png", alt: "Person 04" },
  ];

  const Checklist = [
    { id: 1, content: "Adjust font sizes for mobile", checked: true },
    { id: 2, content: "Swap hero visuals or video", checked: true },
    { id: 3, content: "Align content spacing & margins", checked: true },
    { id: 4, content: "Replace or update images", checked: true },
    { id: 5, content: "Optimize for SEO basics", checked: false },
    { id: 6, content: "Tweak layout responsiveness", checked: false },
    { id: 7, content: "Refine brand color usage", checked: false },
  ];
  return (
    <div className="space-y-5 flex flex-col justify-between">
      {/* Top Message */}
      <div className="flex flex-row gap-5 py-2 px-4 bg-white rounded-full items-center justify-center">
        {/* Mail Notification Icon */}
        <div className="border-black aspect-square h-full">
          <Image
            src="/images/mail-notification.svg"
            alt="Mail Notifications"
            width={54}
            height={54}
          />
        </div>
        <p className="grow text-[#212121] font-medium text-base">
          Need to fine-tune something after launch?
        </p>
        {/* Images */}
        <div className="hidden sm:flex flex-row max-w-1/3">
          {images.map((image) => (
            <div
              key={image.id}
              className="-mr-4 w-14 aspect-square last:mr-0 border-white border-2 rounded-full"
            >
              <Image
                src={`/images/${image.image}`}
                alt={image.alt}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grayed Content */}
      <div className="bg-[#141414] p-5 rounded-4xl space-y-5 flex flex-col justify-between grow">
        {/* Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Checklist.map((item) => (
            <div key={item.id} className="flex flex-row gap-3 text-sm">
              <div
                className={`w-6 h-6 ${
                  !item.checked && "border"
                } border-white-500 rounded-full`}
              >
                {item.checked && (
                  <Image
                    src="/images/checked.svg"
                    alt="Checked Icon"
                    width={24}
                    height={24}
                  />
                )}
              </div>
              <p className={`${item.checked && "text-white-500"}`}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
        {/* Grayed Content Footer */}
        <div>
          <p>Valid for 90 days after launch</p>
          <p>
            Includes up to 5 minor revisions{" "}
            <span className="text-white-500">– no extra cost.</span>
          </p>
        </div>
      </div>
      {/* Card Footer */}
      <p className="text-sm text-white-500">
        We’ve got you cover with
        <span className="text-white"> Subtle updates, site maintained</span>
      </p>
    </div>
  );
}
