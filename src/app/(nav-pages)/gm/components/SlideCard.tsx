"use client";

import Link from "next/link";
import React, { useState } from "react";

interface SlideCardProps {
    title: string;
    baseUrl: string;
    slug: string;
}

export default function SlideCard({ title, baseUrl, slug }: SlideCardProps) {
    const finalProps = "?start=true&loop=true&delayms=10000";
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="flex flex-col items-center gap-3 w-full" id={slug}>
            <h1 className="font-primary tracking-wider text-2xl lg:text-4xl">{title}</h1>

            {/* wrapper maintains aspect ratio and provides positioning for spinner */}
            <div className="relative rounded-xl w-full lg:w-3xl overflow-hidden" style={{ aspectRatio: "960/569" }}>
                {!loaded && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/50">
                        <div className="w-12 h-12 rounded-full border-4 border-t-primary border-gray-200 animate-spin" />
                        <div className="mt-3 text-sm text-gray-700">Loading slides…</div>
                    </div>
                )}

                <iframe
                    className="w-full h-full"
                    src={baseUrl + "pubembed" + finalProps}
                    width="960"
                    height="569"
                    allowFullScreen={true}
                    onLoad={() => setLoaded(true)}
                />
            </div>

            <Link href={baseUrl + "pub" + finalProps} target="_blank" className="font-primary tracking-wider text-lg lg:text-2xl underline hover:text-primary transition-colors">View Slides</Link>
        </div>
    );
}