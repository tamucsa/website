"use client";

import JiatingCard from "@/app/components/jiatings/JiatingCard";
import JTOScheduleCard from "@/app/components/jiatings/JTOSchedule";
import LinkButton from "@/app/components/LinkButton";
import { JiatingList } from "@/content/2025-2026/jiatings";

import React, { useState } from 'react';

interface JiatingPageComponentProps {
    initialMedalsByJiating?: Record<string, any> | null;
    // server-provided sorted jiating list (most medals -> least)
    initialSortedJiatingList?: Array<any> | null;
}

const JiatingPageComponent: React.FC<JiatingPageComponentProps> = ({ initialMedalsByJiating = null, initialSortedJiatingList = null } ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [medalsByJiating, setMedalsByJiating] = useState<Record<string, any> | null>(initialMedalsByJiating);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main className="items-center justify-center">
            {/* Actual page contents*/}
            <div className="flex flex-col gap-10 md:gap-15 items-center justify-center mx-10 md:mx-25 mt-10 md:mt-15 mb-10">
                {/* This year's paragraph */}
                <div className="flex flex-col items-center gap-5">
                    <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>2025-2026 Jiatings</h1>
                    <p className="font-secondary text-lg md:text-2xl tracking-wide">
                    For this year, our jiating theme is Chiikawa! 
                    {/* Click each jiating to learn more about them and their parents! */}
                    </p>
                    <div className="grid grid-rows-2 grid-cols-3 lg:grid-rows-1 lg:grid-cols-6 font-secondary gap-3">
                    { 
                        JiatingList.map((jiating) => (
                            <JiatingCard key={jiating.id} jiating={jiating} />
                        ))
                    }
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:items-start lg:gap-y-15 items-center justify-center">
                    {/* Jiatings? paragraph*/}
                    <div className="flex flex-col items-center gap-5">
                        <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>jiatings?</h1>
                        <p className="font-secondary text-lg md:text-2xl tracking-wide">
                            Jiating (家庭) is a term used to refer to a family unit in Chinese. In this case, it represents our family system, where members are grouped into jiatings (families) based on a preference form! 
                            <br /><br />
                            Each jiating has its own unique identity and activities, fostering a sense of community and support among members. CSA will have 6 jiatings, each with 4 parents!
                        </p>
                    </div>
        
                    {/* Jiating Olympics paragraph */}
                    <div className="flex flex-col items-center gap-5">
                        <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>jiating olympics!</h1>
                        <p className="font-secondary text-lg md:text-2xl tracking-wide">
                            The Jiating Olympics are a school year long event where all jiatings compete in various fun and engaging activities. Members of each jiating compete in various competitions to earn points for their jiating. 
                            {/* At the end of the school year, the jiating with the most points will receive ___________! */}
                        </p>
                        {/* <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSfeSFlCR0FFmE4YAumxUZCtnHDQV2WJ9S29WIjHD5rTC6cfpA/viewform" newTab={true}
                            className="w-full text-xl md:text-2xl"
                            text="Fall '25 JT Olympics Sports Suggestions"
                        /> */}
                        <button onClick={openModal} className="w-full text-xl md:text-2xl p-3 outline outline-black border-2 rounded-lg text-center font-primary tracking-wider transition-colors hover:text-primary hover:outline-primary">
                            Jiating Olympics Schedule
                        </button>
                    </div>
        
                    {/* Current Jiating Olympics Standings */}
                    <div className="flex flex-col items-center gap-5">
                        <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>JT Standings</h1>
                        <p className="font-secondary text-lg md:text-2xl tracking-wide">
                            The current point standings for each Jiating:
                        </p>
                        <div className="font-secondary text-lg md:text-2xl tracking-wide">
                            <p className="">1st: Usagi - 477 points</p>
                            <p className="">2nd: Hachiware - 380 points</p>
                            <p className="">3rd: Momonga - 349 points</p>
                            <p className="">4th: Kurimanju - 267 points</p>
                            <p className="">5th: Chiikawa - 244 points</p>
                            <p className="">6th: Rakko - 217 points</p>
                        </div>
                    </div>
        
                    {/* Current Jiating Olympics Standings */}
                    <div className="flex flex-col items-center gap-5">
                        <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>JT Olympics Standings</h1>
                        <p className="font-secondary text-lg md:text-2xl tracking-wide">
                            The current standings for the Jiating Olympics:
                        </p>
                        <div className="font-secondary text-lg md:text-2xl tracking-wide">
                            {medalsByJiating ? (
                                    (() => {
                                        // Compute standings ordered by numeric medal counts (desc)
                                        const standings = [...JiatingList].slice().sort((a, b) => {
                                            const aData = medalsByJiating[a.name];
                                            const bData = medalsByJiating[b.name];
                                            const aCount = (aData && typeof aData === 'object' && typeof aData.medals === 'number') ? aData.medals : Number.NEGATIVE_INFINITY;
                                            const bCount = (bData && typeof bData === 'object' && typeof bData.medals === 'number') ? bData.medals : Number.NEGATIVE_INFINITY;
                                            if (bCount === aCount) return a.id - b.id;
                                            return bCount - aCount;
                                        });

                                        return standings.map((j, idx) => {
                                            const data = medalsByJiating[j.name];
                                            // If helper returned an error object, show the message
                                            if (data && typeof data === 'object' && 'error' in data) {
                                                return <p key={j.id} className="">{j.name}: Error — {String((data as any).error)}</p>;
                                            }
                                            // If we have a numeric medals count
                                            const count = data?.medals;
                                            const medalEmoji = (typeof count === 'number')
                                                ? (idx === 0 ? '🥇 ' : idx === 1 ? '🥈 ' : idx === 2 ? '🥉 ' : (idx >= 3 ? '🏅 ' : ''))
                                                : '';
                                                if (typeof count === 'number') {
                                                    return <p key={j.id}>{medalEmoji}{j.name}: {count} medal{count === 1 ? '' : 's'}</p>;
                                                }
                                            // If explicitly null (fetch returned null) show dash; otherwise still loading
                                            if (data === null) return <p key={j.id}>{j.name}: —</p>;
                                            return <p key={j.id}>{j.name}: Loading…</p>;
                                        });
                                    })()
                            ) : (
                                <p>Loading medals…</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <JTOScheduleCard isOpen={isModalOpen} onClose={closeModal} 
            // className="w-1/2 left-1/2 -translate-x-1/2 h-1/2 top-1/2 -translate-y-1/2"
            />
        </main>
    );
}

export default JiatingPageComponent;