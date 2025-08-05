"use client";

import ImageModal from "@/app/components/officers/ImageModal";
import { Officer } from "@/utils/types";
import { OfficerList } from "@/content/officers";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { use } from "react";
import { useRouter } from "next/navigation";

export default function OfficerFullImage({ officer }: { officer: Officer }) {
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
            <div className="fixed flex items-center justify-center bg-black z-20">
                <Link href={`/officers#${officer.id}`} className="absolute cursor-default z-20">
                    <Image alt={`${officer.name} Blurred Background`} src={`/officerImages/raw/${officer.id}.JPG`} fill className="max-w-full max-h-screen blur-xl brightness-75" />
                </Link>
                <ImageModal officer={officer} className="z-30"/>
            </div>  
        );
    }
}