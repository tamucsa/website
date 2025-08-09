"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PointTracker() {
    const router = useRouter();

    return (
        <div>
            <h2>Point Tracker</h2>
            {/* Point tracking logic goes here */}
        </div>
    );
}