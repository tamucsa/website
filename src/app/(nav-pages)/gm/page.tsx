import SlideCard from "@/app/components/gm/SlideCard";

import { Metadata } from "next";
import Link from "next/link";

const GMPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 sm:gap-10 md:gap-10 mx-10 md:pb-10'>
            <h2 className='container text-center font-secondary tracking-wide text-xl sm:text-3xl lg:text-4xl/12 mt-5 md:mt-15'>
                Come join us at our General Meeting <b>every other Thursday</b> in <b>PSYC 338</b> from <b>7-8 PM</b>! 
                Check out <Link href='/events' className="underline hover:text-primary transition-colors">Events</Link> to see the calendar for more accurate dates!
            </h2>
            <SlideCard title="Informational!" embedLink="https://docs.google.com/presentation/d/e/2PACX-1vQXI_ySEMMJ-6236kV-ZDf_qTaGVS_fcOM3VSErrSCNrFCeVz1Z8MghALy6EQo7ecOM84qbdly7dH1l/pubembed?start=true&loop=false&delayms=5000" slideLink="https://docs.google.com/presentation/d/e/2PACX-1vQXI_ySEMMJ-6236kV-ZDf_qTaGVS_fcOM3VSErrSCNrFCeVz1Z8MghALy6EQo7ecOM84qbdly7dH1l/pub?start=true&loop=false&delayms=5000" />
            {/* Image Placeholders */}
            {/* <div className="flex flex-col md:flex-row gap-10 sm:gap-15 mb-10">
                <div className="relative md:w-xs lg:w-md hover:scale-102 brightness-90 transition-transform duration-300">
                    <Image
                        src="/stockImages/Informational-6.jpg"
                        alt=""
                        width={6048}
                        height={4032}
                        className="object-cover rounded-lg shadow-md"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
                <div className="relative md:w-xs lg:w-md hover:scale-102 brightness-125 transition-transform duration-300">
                    <Image
                        src="/stockImages/JTReveal-1.jpg"
                        alt=""
                        width={6048}
                        height={4032}
                        className="object-cover rounded-lg shadow-md"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div> */}
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - General Meetings",
  description: "Information about the General Meetings of the Chinese Student Association at TAMU.",
};

export default GMPage;