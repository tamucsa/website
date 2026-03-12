import HomeCard from "@/app/(nav-pages)/home/components/HomeCard";
import "./page.css";

import { Metadata } from "next";

export default function Home() {
  return (
    <div className="home-container">
        {/* <UnderConstruction /> */}
        <HomeCard className=""/>
        <div className="home-content">
          {/* What is CSA? */}
          <div className="home-description-section">
            <h2 className="home-title"><u>What is CSA?</u></h2>
            <p className="home-description">
              Established in 1963, the Texas A&M Chinese Student Association (CSA) is a welcoming community that serves our university through social and cultural Chinese experiences. In CSA, we aim to create lifelong friendships and memories through our general meetings and events. We are excited to help you find your place at Texas A&M!
            </p>
          </div>
          <iframe className="home-video" src="https://www.youtube.com/embed/V1482ryyZcc?si=sWGN36cdfbvTGZPW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "TAMU CSA | 2025-2026",
  description: "The official website of the Chinese Student Association at Texas A&M University!",
};
