import { Metadata } from "next";
import Link from "next/link";

const GMPage = () => {
    return (
        <div className='flex flex-col items-center gap-10'>
            <h2 className='container text-center mx-auto font-secondary tracking-wide p-5 md:p-0 text-xl sm:text-3xl lg:text-4xl/12 mt-5 md:mt-15'>
                Come join us at our General Meeting every other Thursday in PSYC 338 from 7-8 PM! 
                Check out <Link href='/events' className="underline hover:text-primary transition-colors">Events</Link> to see the calendar for more accurate dates!
            </h2>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - General Meetings",
  description: "Information about the General Meetings of the Chinese Student Association at TAMU.",
};

export default GMPage;