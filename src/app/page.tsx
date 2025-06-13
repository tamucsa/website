import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <div className='font-secondary'>Hello World</div>
  );
}

export const metadata: Metadata = {
  title: "TAMU CSA | 2025-2026",
  description: "The official website of the Chinese Student Association at Texas A&M University!",
};
