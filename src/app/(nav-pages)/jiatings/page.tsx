import JiatingCard from "@/app/components/jiatings/JiatingCard";
import { JiatingList } from "@/content/2025-2026/jiatings";

import { Metadata } from "next";

const JiatingsPage = () => {
    return (
      <main className="flex items-center justify-center mx-10 md:mx-25 mt-10 md:mt-15 mb-10">
        <div className="grid grid-cols-1 gap-10 md:gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:items-start lg:gap-y-15 items-center justify-center">
            {/* Jiatings? paragraph*/}
          <div className="flex flex-col items-center lg:w-md xl:w-xl gap-5">
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>jiatings?</h1>
            <p className="font-secondary text-lg md:text-2xl tracking-wide">
              Jiating (家庭) is a term used to refer to a family unit in Chinese. In this case, it represents our family system, where members are grouped into jiatings (families) based on a preference form! 
              <br /><br />
              Each jiating has its own unique identity and activities, fostering a sense of community and support among members. CSA will have 6 jiatings, each with 4 parents!
            </p>
          </div>

          {/* This year's paragraph */}
          <div className="flex flex-col items-center lg:w-lg xl:w-2xl gap-5">
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>2025-2026 jiatings</h1>
            <p className="font-secondary text-lg md:text-2xl tracking-wide">
              For this year, our jiating theme is Chiikawa! 
              {/* Click each jiating to learn more about them and their parents! */}
            </p>
            <div className="grid grid-rows-2 grid-cols-3 font-secondary gap-3">
              { 
                JiatingList.map((jiating) => (
                    <JiatingCard key={jiating.id} jiating={jiating} />
                ))
            }
            </div>
          </div>

          {/* Jiating Olympics paragraph */}
          <div className="flex flex-col items-center lg:w-md xl:w-xl gap-5">
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>jiating olympics!</h1>
            <p className="font-secondary text-lg md:text-2xl tracking-wide">
              The Jiating Olympics are a school year long event where all jiatings compete in various fun and engaging activities. Members of each jiating compete in various competitions to earn points for their jiating. 
              {/* At the end of the school year, the jiating with the most points will receive ___________! */}
            </p>
          </div>

          {/* Current Jiating Olympics Standings */}
          <div className="flex flex-col items-center lg:w-lg xl:w-2xl gap-5">
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>jt olympics standings</h1>
            <p className="font-secondary text-lg md:text-2xl tracking-wide">
              The current standings for the Jiating Olympics:
            </p>
            <div className="font-secondary text-lg md:text-2xl tracking-wide">
              {/* <p className="">1st Place: Chiikawa - 100 points</p>
              <p className="">2nd Place: Usagi - 90 points</p>
              <p className="">3rd Place: Hachiware - 80 points</p>
              <p className="">4th Place: Kurimanju - 70 points</p>
              <p className="">5th Place: Momonga - 60 points</p>
              <p className="">6th Place: Rakko - 50 points</p> */}
            </div>
          </div>

        </div>
      </main>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Jiatings",
  description: "Meet the Jiatings of the Chinese Student Association at TAMU!",
};

export default JiatingsPage;