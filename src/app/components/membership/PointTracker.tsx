"use client"

import React, { useState} from "react";

export default function PointTracker() {
    const [inputName, setInputName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [resultExists, setResultExists] = useState<boolean>(false);
    const [result, setResult] = useState<any>(null);
    const [semiformalEligibility, setSemiformalEligibility] = useState<string | null>(null);
    const [threePtEventCredit, setThreePtEventCredit] = useState<string | null>(null);


    async function fetchPoints() {
        setResultExists(false);
        setResult(null);
        setSemiformalEligibility(null);
        setThreePtEventCredit(null);

        setLoading(true);
        const response = await fetch(`/api/points/${inputName}`);
        const result = await response.json();

        if(response.status !== 200) {
            setResultExists(false);
        } else if (response.status === 200) {
            setResultExists(true);
            setResult(result);
            if (result.semiformalEligibility == "Yes") {
                setSemiformalEligibility("Eligible");
            } else if (result.semiformalEligibility == "No") {
                setSemiformalEligibility("Not Eligible");
            }

            if (result.threePtEventCredit == "Yes") {
                setThreePtEventCredit("✓");
            } else if (result.threePtEventCredit == "No") {
                setThreePtEventCredit("x");
            }
        }
        setLoading(false); // Stop loading (reset Button text to "Search")
        setInputName(""); // Clear input field
    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full">
            {/* Search for Points Card */}
            <div className="flex flex-col items-center justify-center gap-3 p-8 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-xl w-full lg:w-lg">
                <h2 className="font-primary tracking-wider text-xl md:text-2xl">Look up Your Points!</h2>
                <input
                    className="border border-gray-400 text-sm md:text-base rounded-lg px-3 py-2 w-3/4 lg:w-3/5"
                    type="text"
                    value={inputName}
                    autoComplete="on"
                    onChange={e => setInputName(e.target.value)}
                    placeholder="Enter your name!"
                    onKeyDown={e => {
                        if (e.key === "Enter" && inputName && !loading) {
                            fetchPoints();
                        }
                    }}
                />
                <button 
                    onClick={fetchPoints}
                    disabled={!inputName || loading}
                    className="p-2 outline outline-black border-2 rounded-lg font-primary tracking-wider transition-colors hover:text-primary hover:outline-primary text-base md:text-xl w-3/4 lg:w-3/5"
                >
                    {loading ? "Searching..." : "Search"}
                </button>
            </div>
            {resultExists && result && (
                <div className="flex flex-col gap-5 md:text-nowrap w-xl">
                    <h1 className="font-secondary text-xl md:text-2xl text-center"><b> Name:</b> {result.name}</h1>
                    <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 gap-2 h-full lg:w-lg">
                        <h2 className="font-secondary text-xl md:text-2xl"><b> Total Points:</b> {result.totalPoints}</h2>
                        <h2 className="font-secondary text-xl md:text-2xl"><b> CSA Points:</b> {result.csaPoints}</h2>
                        <h2 className="font-secondary text-xl md:text-2xl"><b> JT Sports Points:</b> {result.jtSportsPoints}</h2>
                        <h2 className="font-secondary text-xl md:text-2xl"><b> Semi-Formal Eligibility:</b> {semiformalEligibility}</h2>
                        <h2 className="font-secondary text-xl md:text-2xl"><b> GM Credits:</b> {result.gmCredits}/3</h2>
                        <h2 className="font-secondary text-xl md:text-2xl"><b> Three-Point Event Credit:</b> {threePtEventCredit}</h2>
                    </div>
                </div>
            )}
        </div>
    );
}