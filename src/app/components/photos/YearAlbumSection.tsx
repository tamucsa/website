"use client";
import { Album } from "@/utils/types";
import AlbumLinkButton from "@/app/components/photos/AlbumLinkButton";

import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import classNames from "classnames";

interface YearAlbumSectionProps {
    // List of albums for the year
    albumList: Album[];
    // Year of the albums
    year: string;
    // Whether this is the current year
    thisYear: boolean;
    // Optional className for additional styling
    className?: string;
}

export default function YearAlbumSection({ albumList, year, thisYear, className }: YearAlbumSectionProps) {
    // This year -> no toggle button, always visible
    // Past years -> toggle button to show/hide albums, default to hidden
    const [isVisible, setIsVisible] = useState(thisYear);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`flex flex-col items-center gap-3 ${className}`}>
            {/* Year Title and Toggle Button */}
            <div className="flex flex-row gap-5">
                <h3 className={classNames(
                    "font-primary tracking-wider", {
                        "text-xl md:text-2xl": !thisYear,
                        "text-2xl md:text-3xl": thisYear
                    })}>{year}</h3>
                <button onClick={toggleVisibility} className={classNames(
                    "items-center gap-3", {
                        "flex": !thisYear,
                        "hidden": thisYear
                    })}>
                    {isVisible ? (
                        <>
                            <RiArrowUpSLine className="text-xl" />
                        </>
                    ) : (
                        <>
                            <RiArrowDownSLine className="text-xl" />
                        </>
                    )}
                </button>
            </div>
            <p className={classNames(
                "font-secondary tracking-wider text-base md:text-lg", {
                    "hidden": !thisYear,
                })}>Check out our latest events!
            </p>
            {/* Album List */}
            <div className={classNames(
                "flex-col gap-3", {
                    "flex": isVisible,
                    "hidden": !isVisible,
                    "mb-5": !thisYear,
                })}>
                {albumList.map((album) => (
                    <AlbumLinkButton key={album.url} album={album} className="w-full text-lg md:text-xl" />
                ))}
            </div>
        </div>
    );
}