import CountUp from "./CountUp";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
});

export default function HeroButtom() {
  return (
    <div
      className={`${ibmPlexMono.className} flex flex-row w-full justify-evenly text-4xl font-normal z-10 mb-10`}
    >
      <div className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp from={0} to={100} direction="up" duration={1} delay={1} />+
        </p>
        <p className="text-base">In product launches</p>
      </div>
      <div className="space-y-3">
        <hr className="w-1/3" />
        <p>
          $
          <CountUp from={0} to={1.35} duration={1} delay={1} direction="up" />B
        </p>
        <p className="text-base"> Startup funding raised</p>
      </div>
      <div className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp from={0} to={10} duration={1} direction="up" delay={1} />x
          ROI
        </p>
        <p className="text-base">UX/UI Product Revamp</p>
      </div>
      <div className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp from={0} to={25} duration={1} direction="up" delay={1} />
          K+
        </p>
        <p className="text-base">Funds and syndicates</p>
      </div>
    </div>
  );
}
