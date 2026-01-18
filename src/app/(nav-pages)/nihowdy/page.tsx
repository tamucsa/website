import LinkButton from "@/app/components/LinkButton";
import SchoolCard from "@/app/components/nihowdy/SchoolCard";
import { nihowdySchools2026 } from "@/content/2025-2026/nihowdy";

import { Metadata } from "next";
import Image from "next/image";

import { RiInstagramFill, RiMailFill, RiBallPenFill} from "react-icons/ri";

const NihowdyPage = () => {
    return (
        <div className="flex flex-col items-center mt-10 gap-7 pb-5 md:mt-15 md:gap-15 md:pb-15 mx-15">
          {/* <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>Ni-howdy!</h1> */}
          <div className='grid grid-cols-0 md:grid-cols-2 justify-center gap-5 md:gap-20 w-full lg:w-5xl'>
            <div className="flex flex-col justify-center gap-3">
              <h1 className="font-primary tracking-wider text-2xl md:text-4xl">WHAT IS NI-HOWDY?</h1>
              <h2 className=" text-xl md:text-2xl">Ni-Howdy is an annual weekend-long conference in the spring that unites CSAs all over Texas. It features competitive <b>SPORTS</b>, <b>DANCE</b> and performance, and mixer <b>EVENTS</b> hosted at Texas A&M University!</h2>
            </div>
            <div className="flex flex-row w-full items-center justify-center">
              <div className="relative md:w-lg hover:scale-102 transition-transform duration-300">
                <Image src="/stockImages/NiHowdy-2.JPG" alt="" width={2048} height={1365} className="object-cover rounded-lg shadow-md" style={{ width: "100%", height: "auto" }}/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-0 md:grid-cols-5 justify-center gap-5 md:gap-15 w-full lg:w-5xl">
            <div className="flex flex-row w-full items-center justify-center col-span-2">
              <div className="relative md:w-lg hover:scale-102 transition-transform duration-300">
                <Image src="/stockImages/NiHowdy-3.JPG" alt="" width={2048} height={1365} className="object-cover rounded-lg shadow-md" style={{ width: "100%", height: "auto" }}/>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-8 col-span-3 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-xl">
              <h1 className="font-primary tracking-wider text-lg md:text-3xl">HOW CAN SCHOOLS JOIN NI-HOWDY?</h1>
              <h2 className="text-base md:text-xl">Reach out to us on Instagram <b>@tamu.csa</b> or email us at <b>tamu.csa1963@gmail.edu</b> and let us know you'd like to join!</h2>
              <div className="flex flex-row gap-5">
                <LinkButton href="https://www.instagram.com/tamu.csa/" newTab={true}
                    className="text-base md:text-lg"
                >
                  <div className="flex flex-row gap-2 items-center">
                    <RiInstagramFill className='size-6'/>
                    Follow on Instagram
                  </div>
                </LinkButton>
                <LinkButton href="mailto:tamu.csa1963@gmail.com" newTab={true}
                    className="text-base md:text-lg"
                >
                  <div className="flex flex-row gap-2 items-center">
                    <RiMailFill className='size-6'/>
                    Send email
                  </div>
                </LinkButton>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-0 md:grid-cols-8 justify-center gap-5 md:gap-15 w-full lg:w-5xl">
            <div className="flex flex-col gap-5 p-8 col-span-5 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-xl">
              <h1 className="font-primary tracking-wider text-lg md:text-3xl">HOW CAN I PERFORM FOR NI-HOWDY?</h1>
              <div className="flex flex-col gap-1">
                <h2 className="text-base md:text-xl">If you are committed to performing for Ni-Howdy, please fill out the sign-up form below!</h2>
                {/* <h3 className="text-xs md:text-sm italic text-gray-400">*Application dates may change when apps open</h3> */}
              </div>
              <div className="flex flex-row gap-5">
                <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSeQlsMJ47_721_U3dJo1OpillxYAZjCZnsak8T4mCJoUGkxAw/viewform" newTab={true}
                    className="text-base md:text-lg"
                >
                  <div className="flex flex-row gap-2 items-center">
                    <RiBallPenFill className='size-6'/>
                    Sign up Form (Due 2/28)
                  </div>
                </LinkButton>
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-center col-span-3">
              <div className="relative md:w-lg hover:scale-102 transition-transform duration-300">
                <Image src="/stockImages/NiHowdy-4.JPG" alt="" width={2048} height={1365} className="object-cover rounded-lg shadow-md" style={{ width: "100%", height: "auto" }}/>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 grid-cols-2 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-7 w-full max-w-5xl mx-auto">
          { 
              nihowdySchools2026.map((school) => (
                  <SchoolCard key={school.shortname} school={school} />
              ))
          }
          </div>
        </div>
      );
  }

export const metadata: Metadata = {
  title: "TAMU CSA - Nihowdy",
  description: "The official website for the Annual Nihowdy event hosted by the Chinese Student Association at Texas A&M University!",
};

export default NihowdyPage;