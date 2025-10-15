"use client"

import React, { useState} from "react";

export default function PointTracker() {
    // const [inputName, setInputName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [noInput, setNoInput] = useState<boolean>(false);
    const [found, setFound] = useState<boolean>(false);
    
    const [result, setResult] = useState<any>(null);
    // const [semiformalEligibility, setSemiformalEligibility] = useState<string | null>(null);
    // const [threePtEventCredit, setThreePtEventCredit] = useState<string | null>(null);

    async function fetchPoints(inputName: string) {
        //reset variables
        setFound(false);
        setResult(null);
        // setSemiformalEligibility(null);
        // setThreePtEventCredit(null);

        //set new variables
        setSubmitted(true);
        setLoading(true);

        //fetch response
        const response = await fetch(`/api/points/${inputName}`);
        const result = await response.json();

        if (response.status == 404) {
            setFound(false);
        } else if (response.status === 200) {
            setFound(true);
            setResult(result);
            // if (result.semiformalEligibility == "Yes") {
            //     setSemiformalEligibility("Eligible");
            // } else if (result.semiformalEligibility == "No") {
            //     setSemiformalEligibility("Not Eligible");
            // }

            // if (result.threePtEventCredit == "Yes") {
            //     setThreePtEventCredit("✓");
            // } else if (result.threePtEventCredit == "No") {
            //     setThreePtEventCredit("x");
            // }
        }
        setLoading(false); // Stop loading (reset Button text to "Search")
        // setInputName(""); // Clear input field
    }

    const menuItems = [
        [
            { label: 'Jiating', value: result?.jt },
            { label: 'Total Points', value: result?.totalPoints },
        ],
        [
            { label: 'CSA Wide Points', value: result?.csaPoints },
            { label: 'JT & Sports Points', value: result?.jtSportsPoints },
            { label: '# of Concessions', value: result?.concessionNumber }
        ]
    ];

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full">
            {/* Search for Points Card */}
            <div className="flex flex-col items-center justify-center gap-3 p-8 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-xl w-full lg:w-lg">
                <h2 className="font-primary tracking-wider text-xl md:text-2xl">Look up Your Points!</h2>
                <input
                    className="border border-gray-400 text-sm md:text-base rounded-lg px-3 py-2 w-3/4 lg:w-3/5"
                    type="text"
                    defaultValue={""}
                    autoComplete="on"
                    placeholder="Enter your name!"
                    onKeyDown={e => {
                        if (e.key === "Enter" && !loading) {
                            const value = (e.target as HTMLInputElement).value;
                            // setInputName(value);
                            const valid = value && value.trim() !== "";
                            setNoInput(!valid);
                            setSubmitted(true);
                            if (valid) {
                                fetchPoints(value);
                            }
                        }
                    }}
                />
                <button 
                    onClick={() => {
                        const input = document.querySelector<HTMLInputElement>('input[type="text"]');
                        const value = input ? input.value : "";
                        // setInputName(value);
                        const valid = value && value.trim() !== "";
                        setNoInput(!valid);
                        setSubmitted(true);
                        if (valid && !loading) {
                            fetchPoints(value);
                        }
                    }}
                    className="p-2 outline outline-black border-2 rounded-lg font-primary tracking-wider transition-colors hover:text-primary hover:outline-primary text-base md:text-xl w-3/4 lg:w-3/5"
                >
                    {loading ? "Searching..." : "Search"}
                </button>
                {noInput && !loading && submitted && (
                    <span className="text-red-500 text-md mt-2">Please enter a name</span>
                )}
                {!noInput && !found && !loading && submitted && (
                    <span className="text-red-500 text-md mt-2">Member not found</span>
                )}
            </div>
            {found && result && (
                <div className="flex flex-col gap-5 md:gap-10 md:text-nowrap w-xl">
                    <h1 className="font-secondary text-2xl md:text-4xl text-center">{result.name}</h1>
                    <div className={`grid grid-cols-1 md:grid-cols-${menuItems.length} text-center md:text-left justify-center gap-5 md:gap-0`}>
                        {
                            menuItems.map((column, colIndex) => (
                                <div key={colIndex} className="flex flex-col items-center">
                                    <div className="flex flex-col gap-1 w-fit">
                                        {column.map((item, itemIndex) => (
                                            <h2 key={itemIndex} className="font-secondary text-xl md:text-2xl">
                                                <b> {item.label}:</b> {item.value !== undefined ? item.value : '0'}
                                            </h2>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                        {/* <h2 className="font-secondary text-xl md:text-2xl"><b> Semi-Formal Eligibility:</b> {semiformalEligibility}</h2>
                        <h2 className="font-secondary text-xl md:text-2xl"><b> GM Credits:</b> {result.gmCredits}/3</h2>
                        <h2 className="font-secondary text-xl md:text-2xl"><b> Three-Point Event Credit:</b> {threePtEventCredit}</h2> */}
                    </div>
                </div>
            )}
        </div>
    );
}