import { Metadata } from "next";
import { OfficerList } from "@/content/officers";
import OfficerCard from "@/app/components/OfficerCard";

const OfficerPage = () => {
    return (
        <div className="flex flex-col items-center gap-5 md:gap-10 px-20 md:px-0">
          {/* <header className="flex flex-col text-center mt-10 md:mt-15 gap-3">
            <h1 className="font-primary tracking-wider text-3xl md:text-4xl">Officers</h1>
          </header> */}
          <main className="mt-10 md:mt-15 md:mb-15">
            <div className='grid grid-cols-3 grid-rows-6 gap-12'>
                    {
                        OfficerList.map((officer) => (
                            <OfficerCard key={officer.name} officer={officer} />
                        ))
                    }
            </div>  
          </main>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Officers",
  description: "Meet the officers of the Chinese Student Association at TAMU!",
};

export default OfficerPage;