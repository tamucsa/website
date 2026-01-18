import LinkButton from "@/app/components/LinkButton";
import PointTracker from "@/app/components/membership/PointTracker";
import RewardsCard from "@/app/components/membership/Rewards";
import PointTableCard from "@/app/components/membership/PointTable";

import { Metadata } from "next";

const MembershipPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-15 mb-10 mx-13 md:mx-13'>
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-15'>How to Join CSA!</h1>
            {/* <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
                <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSecQc7JYAfMWQ634FLjHDyj6NEhga-4MrU_PCJQSQpEaJe-rw/viewform" newTab={true}
                    className="w-full md:w-md text-nowrap text-xl md:text-2xl"
                >
                    CSA Media Team Application! (Due 9/25)
                </LinkButton>
                <LinkButton href="https://tx.ag/csaintern25" newTab={true}
                    className="w-full md:w-md text-nowrap text-xl md:text-2xl"
                >
                    CSA Intern Application! (Due 10/12)
                </LinkButton>
            </div> */}
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
                        <p className="">Payment Methods will be listed in the form!</p>
                        {/* <p className="">Membership will be available next semester!</p> */}
                    </div>
                    <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSfLgIOk44m5nT5L82dpdxPL71TESjYk7jXve-q8CWNVOSL6HQ/viewform?usp=header" newTab={true}
                        className="w-full text-xl md:text-2xl"
                    >
                        Membership Form! (Due 1/23)
                    </LinkButton>
                   
                </div>
            </div>
            <PointTracker />
            <div className="flex flex-col lg:flex-row w-full gap-5">
                <PointTableCard />
                <RewardsCard />
            </div>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Membership",
  description: "Membership information for the Chinese Student Association at TAMU.",
};

export default MembershipPage;