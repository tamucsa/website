"use client";

import JiatingCard from "@/app/components/jiatings/JiatingCard";
import JTOScheduleCard from "@/app/components/jiatings/JTOSchedule";
import LinkButton from "@/app/components/LinkButton";
import { JiatingList } from "@/content/2025-2026/jiatings";

import React, { useState } from 'react';

const JiatingPageComponent: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        {/* <LinkButton href="" newTab={true}
                            className="w-full text-xl md:text-2xl"
                            text="JTO Fall '25 Schedule"
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
                            {/* <p className="">1st Place: Chiikawa - 100 points</p>
                            <p className="">2nd Place: Usagi - 90 points</p>
                            <p className="">3rd Place: Hachiware - 80 points</p>
                            <p className="">4th Place: Kurimanju - 70 points</p>
                            <p className="">5th Place: Momonga - 60 points</p>
                            <p className="">6th Place: Rakko - 50 points</p> */}
                        </div>
                    </div>
        
                    {/* Current Jiating Olympics Standings */}
                    <div className="flex flex-col items-center gap-5">
                        <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>JT Olympics Standings</h1>
                        <p className="font-secondary text-lg md:text-2xl tracking-wide">
                            The current standings for the Jiating Olympics:
                        </p>
                        <div className="font-secondary text-lg md:text-2xl tracking-wide">
                            <p className="">🥇: Hachiware - 10 medals</p>
                            <p className="">🥈: Usagi - 7 medals</p>
                            <p className="">🥈: Kurimanju - 7 medals</p>
                            <p className="">🏅: Momonga - 2 medals</p>
                            <p className="">🏅: Chiikawa - 1 medal</p>
                            <p className="">🏅: Rakko - 1 medal</p>
                            {/* 🥉 */}
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