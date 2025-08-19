import { Metadata } from "next";

const JiatingsPage = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-15 px-15 md:px-25 mt-10 md:mt-15 pb-10">
          {/* Left/Top Section (Info)*/}
          <div className="flex flex-col items-center lg:w-lg xl:w-xl gap-10">
            {/* Jiatings? paragraph*/}
            <div className="flex flex-col items-center lg:w-md xl:w-xl gap-5">
              <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>jiatings?</h1>
              <p className="font-secondary text-lg md:text-2xl tracking-wide">
                Jiating (家庭) is a term used to refer to a family unit in Chinese. In this case, it represents our family system, where members are grouped into jiatings (families) based on a preference form! Each jiating has its own unique identity and activities, fostering a sense of community and support among members. CSA will have 6 jiatings, each with 4 parents!
              </p>
            </div>
            {/* Jiating Olympics paragraph */}
            <div className="flex flex-col items-center lg:w-md xl:w-xl gap-5">
              <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>jiating olympics!</h1>
              <p className="font-secondary text-lg md:text-2xl tracking-wide">
                The Jiating Olympics are a school year long event where all jiatings compete in various fun and engaging activities. Members of each jiating compete in various competitions to earn points for their jiating. At the end of the school year, the jiating with the most points will receive ___________!
              </p>
            </div>
          </div>
          {/* Right/Bottom Section (This year's specific info) */}
          <div>
            {/* This year's paragraph */}
            <div className="flex flex-col items-center lg:w-lg xl:w-xl gap-5">
              <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>this year's jiatings</h1>
              <p className="font-secondary text-lg md:text-2xl tracking-wide">
                For this year, our jiating theme is Chiikawa! Below are all the jiatings & their parents for the 2025-2026 school year.
              </p>
              <div className="font-secondary text-lg md:text-2xl tracking-wide">
                <p className="">Chiikawa:</p>
                <p className="">Usagi:</p>
                <p className="">Hachiware:</p>
                <p className="">Kurimanju:</p>
                <p className="">Momonga:</p>
                <p className="">Rakko:</p>
              </div>
            </div>
            {/* Current Jiating Olympics Standings */}
            <div>
              <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10'>jiating olympics standings</h1>
              <p className="font-secondary text-lg md:text-2xl tracking-wide">
                The current standings for the Jiating Olympics are as follows:
              </p>
              <div className="font-secondary text-lg md:text-2xl tracking-wide">
                <p className="">1st Place: Chiikawa - 100 points</p>
                <p className="">2nd Place: Usagi - 90 points</p>
                <p className="">3rd Place: Hachiware - 80 points</p>
                <p className="">4th Place: Kurimanju - 70 points</p>
                <p className="">5th Place: Momonga - 60 points</p>
                <p className="">6th Place: Rakko - 50 points</p>
              </div>
            </div>
          </div>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Jiatings",
  description: "Meet the Jiatings of the Chinese Student Association at TAMU!",
};

export default JiatingsPage;