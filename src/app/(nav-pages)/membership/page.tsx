import LinkButton from "@/app/components/LinkButton";
import PointTracker from "@/app/components/membership/PointTracker";

import { Metadata } from "next";

const MembershipPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-15 mb-10 mx-13 md:mx-13'>
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-15'>How to Join CSA!</h1>
            <LinkButton href="https://forms.gle/De3cQX2uC17khfsB6" newTab={true}
                className="w-full md:w-lg text-nowrap text-xl md:text-2xl"
                text="CSA Interest Form (2025-2026)"
            />
            <div className='flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10'>
                {/* Left Text */}
                <div className="flex flex-col items-center justify-center font-secondary text-md md:text-2xl/10 tracking-wide gap-5">
                    <p>CSA has a membership form to fill out before you can become a member! Just click the membership form button to fill it out with your information.</p>
                    <p> Make sure to Venmo/Zelle to the correct contact listed on the membership form! Note that there is a different cost for semester vs. full year, and if you need to pay in cash, talk to our Treasurer at a General Meeting!</p>
                </div>
                {/* Right Payment Info & Form */}
                <div className="flex flex-col w-full items-center justify-center gap-3 md:gap-5">
                    <div className="flex flex-col w-full outline outline-black rounded-xl font-secondary border-2 p-3 md:p-5 text-md md:text-2xl gap-1 md:gap-4">
                        <p className=""><b>Semester:</b> $35</p>
                        <p className=""><b>Full Year:</b> $45</p>
                        {/* <p className="">Payment Methods will be listed in the form below!</p> */}
                        <p className="">Payment Methods will be listed in the form!</p>
                        {/*
                        <p className="text-nowrap"><b>Venmo:</b> <Link href="https://venmo.com/?txn=pay&recipients=Kody-Chu" className="underline">@Kody-Chu</Link></p>
                        <p className="text-nowrap"><b>Zelle:</b> 832-859-2588</p>
                        <p className="md:text-nowrap"><b>Cash:</b> Talk to our Treasurer at our General Meetings!</p>
                        */}
                    </div>
                    <LinkButton href="https://tx.ag/csamembership" newTab={true}
                        className="w-full text-nowrap text-xl md:text-2xl"
                        text="CSA Membership Form!"
                    />
                </div>
            </div>
            {/* <PointTracker /> */}
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Membership",
  description: "Membership information for the Chinese Student Association at TAMU.",
};

export default MembershipPage;