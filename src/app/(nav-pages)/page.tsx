import HomeCard from "@/app/components/home/HomeCard";

import { Metadata } from "next";

export default function Home() {
  return (
    <div className="flex flex-col justify-center md:gap-10 md:m-7">
        {/* <UnderConstruction /> */}
        <HomeCard className=""/>
        <div className="flex flex-col md:flex-row items-center md:items-start m-7 md:m-0 gap-10 md:gap-30">
          {/* What is CSA? */}
          <div className="flex flex-col gap-3 lg:gap-5">
            <h2 className="text-2xl lg:text-4xl font-primary"><u>What is CSA?</u></h2>
            <p className="text-base lg:text-xl">
            The Texas A&M University Chinese Student Association (TAMU CSA) is a welcoming community dedicated to connecting students from all backgrounds through cultural, social, and educational experiences. No matter who you are, joining CSA is a great way to make new friends, explore Chinese culture, and get involved on campus. Attend our events and general meetings to discover opportunities for personal growth, leadership, and lifelong memories. We’re excited to help you find your place at Texas A&M—reach out with any questions and become part of our vibrant community!
            </p>
          </div>
          <iframe className="w-sm h-54 sm:w-lg sm:h-72 md:w-[3000px] md:h-[285px] rounded-xl" src="https://www.youtube.com/embed/V1482ryyZcc?si=sWGN36cdfbvTGZPW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "TAMU CSA | 2025-2026",
  description: "The official website of the Chinese Student Association at Texas A&M University!",
};
