import CountUp from "../animation/CountUp";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
});

export default function Numbers() {
  return (
    <div
      className={`${ibmPlexMono.className} flex flex-row w-full text-4xl font-normal justify-between z-10 mb-10`}
    >
      {/* Element 01 */}
      <div className="space-y-3">
        <hr className="w-1/3" />
        <p>
          $
          <CountUp from={0} to={10.7} direction="up" duration={1} />B
        </p>
        <p className="text-base">In product launches</p>
      </div>
      {/* Element 02 */}
      <div className="space-y-3">
        <hr className="w-1/3" />
        <p>
          <CountUp from={0} to={13} duration={1} direction="up" />
          K+
        </p>
        <p className="text-base"> In product launches</p>
      </div>
    </div>
  );
}
