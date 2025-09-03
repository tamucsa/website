import { Metadata } from "next";
import Image from "next/image";

const NihowdyPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl">Nihowdy</h1>
          <p className="mt-4 text-lg">Welcome to the Nihowdy event!</p>
        </div>
      );
  }

export const metadata: Metadata = {
  title: "TAMU CSA - Nihowdy",
  description: "The official website for the Annual Nihowdy event hosted by the Chinese Student Association at Texas A&M University!",
};

export default NihowdyPage;