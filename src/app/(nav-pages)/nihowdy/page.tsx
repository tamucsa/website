import { Metadata } from "next";
import Image from "next/image";

const NihowdyPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
                <Image
                src="/under-construction.png"
                alt="Site is under construction"
                width={800}
                height={800}
                className="items-center justify-center"
              />
            </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Nihowdy",
  description: "The official website for the Annual Nihowdy event hosted by the Chinese Student Association at Texas A&M University!",
};

export default NihowdyPage;