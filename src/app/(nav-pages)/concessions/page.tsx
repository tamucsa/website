import LinkButton from "@/app/components/LinkButton";

import { Metadata } from "next";

const ConcessionsPage = () => {
    return (
        <div className="flex flex-col items-center mt-10 gap-7 pb-5 md:mt-15 md:gap-15 md:pb-15 mx-15">
            <h1 className="container text-center font-primary tracking-wider text-3xl md:text-4xl">Concessions</h1>
        </div>
      );
  }

export const metadata: Metadata = {
  title: "TAMU CSA - Nihowdy",
  description: "The official website for the Annual Nihowdy event hosted by the Chinese Student Association at Texas A&M University!",
};

export default ConcessionsPage;