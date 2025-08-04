import LinkButton from "@/app/components/LinkButton";

import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "TAMU CSA - 404 Not Found",
  description: "404 Not Found - The page you are looking for does not exist.",
};  

export default function NotFound(){
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-col gap-5 lg:gap-5'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-15'>
                    {/* Left Text */}
                    <h1 className='text-[10rem] leading-none font-primary'>404</h1>
                    {/* Right Text */}
                    <div>
                        <h2 className='text-5xl font-secondary'>This page could not be found</h2>
                        <p className='text-xl font-secondary mt-2'>The page you are looking for does not exist or has been moved.</p>
                    </div>
                </div>
                <LinkButton
                    href="/"
                    newTab={false}
                    className="w-full text-3xl lg:text-4xl"
                    text="Home"
                />
            </div>
        </div>
    )
}