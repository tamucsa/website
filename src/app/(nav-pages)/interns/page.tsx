import { Metadata } from "next";
import { InternList } from "@/content/2025-2026/interns";
import InternCard from "@/app/(nav-pages)/interns/components/InternCard";

const InternPage = () => {
    return (
        <div className="flex flex-col items-center mx-10 sm:mx-15">
          {/* <header className="flex flex-col text-center mt-10 md:mt-15 gap-3">
            <h1 className="font-primary tracking-wider text-3xl md:text-4xl">Interns</h1>
          </header> */}
          <main className="my-10 md:my-15">
            <div className='gap-7 sm:gap-12 flex flex-col md:grid md:grid-cols-2 md:grid-rows-6 md:gap-10 lg:grid-cols-3 lg:grid-rows-4 lg:gap-12 xl:grid-cols-4 xl:grid-rows-3 xl:gap-8'>
              {
                  InternList.map((intern) => (
                      <InternCard key={intern.name} intern={intern} />
                  ))
              }
            </div>  
          </main>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Interns",
  description: "Meet the interns of the Chinese Student Association at TAMU!",
};

export default InternPage;