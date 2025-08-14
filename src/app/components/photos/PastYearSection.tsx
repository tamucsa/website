"use client";
import YearAlbumSection from "@/app/components/photos/YearAlbumSection";
import { AlbumList2022_23 } from "@/content/albums/2022-23";
import { AlbumList2023_24 } from "@/content/albums/2023-24";
import { AlbumList2024_25 } from "@/content/albums/2024-25";

import React, { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import classNames from "classnames";

interface PastYearSectionProps {
    // Optional className for additional styling
    className?: string;
    // Whether the section is toggable
    toggable: boolean;
}

export default function PastYearSection({ className, toggable }: PastYearSectionProps) {
    // if useState is !toggable
    //     toggable = true -> closed by default with toggle button
    //     toggable = false -> always visible
    // if useState is true
    //    toggable = true -> open by default with toggle button
    //    toggable = false -> always visible
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`flex flex-col items-center gap-5 ${className}`}>
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
                {/* Title and Toggle Button */}
                <div className="flex flex-row gap-2">
                    <h2 className="font-primary tracking-wider text-2xl md:text-3xl">Past Albums</h2>
                    <button
                        onClick={toggleVisibility}
                        className={classNames(
                            "items-center", {
                                "flex": toggable,
                                "hidden": !toggable
                            }
                        )}>
                        <span
                            className={classNames(
                                "inline-block transition-transform duration-100",
                                {
                                    "scale-y-[-1]": !isVisible,
                                }
                            )}>
                            <RiArrowUpSLine className="text-2xl" />
                        </span>
                    </button>
                </div>
                <p className="font-secondary tracking-wider text-base md:text-lg">Check out photos from past years!</p>
            </div>
            {/* Album Sections */}
            <div className={classNames(
                        "flex flex-col items-center gap-3", {
                            "flex": isVisible,
                            "hidden": !isVisible
                        })}>
                <YearAlbumSection year="2024-2025" thisYear={false} albumList={AlbumList2024_25} />
                <YearAlbumSection year="2023-2024" thisYear={false} albumList={AlbumList2023_24} />
                <YearAlbumSection year="2022-2023" thisYear={false} albumList={AlbumList2022_23} />
            </div>
        </div>
        
    );
}
{/*${isVisible ? "flex" : "hidden"}*/}