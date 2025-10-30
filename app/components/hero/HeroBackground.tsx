export default function HeroBackground() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 aspect-square w-[1440px] p-20">
      {/* Outer gradient ring */}
      <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,#4285F4,#34A853,#FBBC05,#EA4335,#4285F4)] animate-spin [animation-duration:10s] blur-[30px] -z-5">
        {/* Inner circle — smaller so the ring is visible */}
        <div className="w-full h-full flex items-center rounded-full bg-black scale-85 -z-2" />
      </div>
      <div className="w-100 aspect-square bg-[#ff2323] top-1/2 -translate-y-1/2 left-0 translate-x-1/2 absolute blur-[200px] rounded-full" />
      <div className="w-100 aspect-square bg-[#680066] top-1/2 -translate-y-1/2 -translate-x-1/2 right-0 absolute blur-[200px] rounded-full" />
    </div>
  );
}
