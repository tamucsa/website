import { Metadata } from "next";
import LinkButton from "@/app/components/LinkButton";

const MembershipPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-15'>
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-15'>How to Join CSA!</h1>
            <div className='container items-center justify-center px-10 md:px-15'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 mb-10'>
                    {/* Left Text */}
                    <div className="flex flex-col items-center justify-center font-secondary text-md md:text-2xl/10 tracking-wide gap-5 px-3">
                        <p>CSA has a membership form to fill out before you can become a member! Just click the membership form button on the right to fill it out with your information.</p>
                        <p> Make sure to Venmo or Zelle to the correct contact listed on the right as well! Note that there is a different cost for semester vs. full year, and if you need to pay in cash, talk to our Treasurer at a General Meeting!</p>
                    </div>
                    {/* Right Payment Info & Form */}
                    <div className="flex flex-col w-full px-3 lg:px-0 items-center justify-center gap-3 md:gap-5">
                        <div className="flex flex-col w-full outline outline-black rounded-xl font-secondary border-2 p-3 md:p-5 text-md md:text-2xl gap-1 md:gap-4">
                            <p className=""><b>Semester:</b> $35</p>
                            <p className=""><b>Full Year:</b> $45</p>
                            <p className="">Payment Methods will be listed in the form below!</p>
                            {/*
                            <p className="text-nowrap"><b>Venmo:</b> <Link href="https://venmo.com/?txn=pay&recipients=Kody-Chu" className="underline">@Kody-Chu</Link></p>
                            <p className="text-nowrap"><b>Zelle:</b> 832-859-2588</p>
                            <p className="md:text-nowrap"><b>Cash:</b> Talk to our Treasurer at our General Meetings!</p>
                            */}
                        </div>
                        <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSe71PBHTionWEc17KzuQ0SiR-SwbS8g-wLPOSY4cOR0DR-CHA/viewform" newTab={true}
                            className="w-full text-nowrap text-xl md:text-2xl"
                            text="CSA Membership Form (2024-2025)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Membership",
  description: "Membership information for the Chinese Student Association at TAMU.",
};

export default MembershipPage;