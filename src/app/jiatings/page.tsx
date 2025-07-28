import { Metadata } from "next";

const JiatingsPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-15'>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-10 px-25 pb-10">
            {/* Jiatings? paragraph*/}
            <div className="flex flex-col w-sm md:w-md xl:w-xl  items-center gap-5">
              <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-15'>jiatings?</h1>
              <p className="font-secondary text-lg md:text-2xl tracking-wide">
                Jiating (家庭) is a term used to refer to a family unit in Chinese. In this case, it represents our family system, where members are grouped into jiatings (families) based on a preference form! Each jiating has its own unique identity and activities, fostering a sense of community and support among members. CSA will have 6 jiatings, each with 4 parents!
              </p>
            </div>
            {/* This year's paragraph */}
            <div className="w-sm md:w-md lg:w-lg xl:w-xl flex flex-col items-center gap-5">
              <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-15'>this year's jiatings!</h1>
              <p className="font-secondary text-lg md:text-2xl tracking-wide">
                For this year, our jiating theme is Chiikawa! Below are all the jiatings & their parents for the 2025-2026 school year.
              </p>
              <div className="font-secondary text-lg md:text-2xl tracking-wide">
                <p className="">Chiikawa: Parent 1, Parent 2, Parent 3, Parent 4</p>
                <p className="">Usagi: Parent 1, Parent 2, Parent 3, Parent 4</p>
                <p className="">Hachiware: Parent 1, Parent 2, Parent 3, Parent 4</p>
                <p className="">Kurimanju: Parent 1, Parent 2, Parent 3, Parent 4</p>
                <p className="">Momonga: Parent 1, Parent 2, Parent 3, Parent 4</p>
                <p className="">Rakko: Parent 1, Parent 2, Parent 3, Parent 4</p>
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