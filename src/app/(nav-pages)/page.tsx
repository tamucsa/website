import HomeCard from "@/app/components/home/HomeCard";

import { Metadata } from "next";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-7">
        {/* <UnderConstruction /> */}
        <HomeCard className=""/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "TAMU CSA | 2025-2026",
  description: "The official website of the Chinese Student Association at Texas A&M University!",
};
