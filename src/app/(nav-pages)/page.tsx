import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
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
  title: "TAMU CSA | 2025-2026",
  description: "The official website of the Chinese Student Association at Texas A&M University!",
};
