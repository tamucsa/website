"use client"

import React, { useState } from "react";

export default function PointTracker() {
    const [inputName, setInputName] = useState<string>("");
    const [points, setPoints] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchPoints() {
        setLoading(true);
        const response = await fetch(`/api/points/${inputName}`);
        const result = await response.json();
        setPoints(result.totalPoints);
        setLoading(false);
    }

    return (
        // <div className="flex flex-col items-center justify-center outline outline-black border-2 rounded-xl p-5 gap-3 w-full lg:w-lg">
        <div className="flex flex-col items-center justify-center gap-3 p-8 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-xl w-full lg:w-lg">
            <h2 className="font-primary tracking-wider text-2xl">Look up Your Points!</h2>
            <input
                className="border border-gray-400 text-sm md:text-base rounded-lg px-3 py-2 w-3/4 lg:w-3/5"
                type="text"
                value={inputName}
                autoComplete="on"
                onChange={e => setInputName(e.target.value)}
                placeholder="Enter your name!"
            />
            <button 
                onClick={fetchPoints}
                disabled={!inputName || loading}
                className="p-2 outline outline-black border-2 rounded-lg font-primary tracking-wider transition-colors hover:text-primary hover:outline-primary text-base md:text-xl w-3/4 lg:w-3/5"
            >
                {loading ? "Searching..." : "Search"}
            </button>
            {points && (
                <p>Points: {points}</p>
            )}
        </div>
    );
}