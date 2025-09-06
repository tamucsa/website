"use client";

import ImageModal from "@/app/components/officers/ImageModal";
import { Megateam } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OfficerFullImage({ officer }: { officer: Megateam }) {
    const router = useRouter();

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            console.log(`Key pressed: ${event.key}`);
            if (event.key === "Escape") {
                router.push(`/officers#${officer.id}`);
            }
        }
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    }, []);

    if (!officer) {
        return (
            <div className="fixed flex items-center justify-center bg-black z-20">
                <p className="text-white">Officer not found.</p>
            </div>
        );
    }
    else {
        return (
            <div className="relative flex items-center justify-center bg-black z-20">
                <Link href={`/officers#${officer.id}`} className="static z-20 max-w-full h-screen">
                    <Image alt={`${officer.name} Blurred Background`} src={`/2025-2026/officerImages/raw/${officer.id}.JPG`} fill
                    className="blur-xl brightness-75"/>
                </Link>
                <ImageModal officer={officer} className="z-30"/>
            </div>  
        );
    }
}