import HomeCard from "@/app/(nav-pages)/home/components/HomeCard";
import { JiatingList } from "@/content/2025-2026/jiatings";

import { Metadata } from "next";

export default function Home() {
  return (
    <div className="">
        {/* <UnderConstruction /> */}
        <HomeCard className="" jiatings={JiatingList} />
        <div className="">
          {/* <iframe className="home-video" src="https://www.youtube.com/embed/V1482ryyZcc?si=sWGN36cdfbvTGZPW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "TAMU CSA | 2025-2026",
  description: "The official website of the Chinese Student Association at Texas A&M University!",
};
