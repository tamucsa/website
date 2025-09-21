"use client";

import ParentImageModal from "@/app/components/jiatings/ParentImageModal";
import { Jiating, Megateam } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ParentFullImage({ parent, jiating }: { parent: Megateam, jiating: Jiating }) {
    const router = useRouter();

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            console.log(`Key pressed: ${event.key}`);
            if (event.key === "Escape") {
                router.push(`/jiatings/${jiating.id}`);
            }
        }
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    }, []);

    if (!parent) {
        return (
            <div className="fixed flex items-center justify-center bg-black z-20">
                <p className="text-white">Parent not found.</p>
            </div>
        );
    }
    else {
        return (
            <div className="relative flex items-center justify-center bg-black z-20">
                <Link href={`/jiatings/${jiating.id}`} className="static z-20 max-w-full h-screen">
                    <Image alt={`${parent.name} Blurred Background`} src={`/${jiating.years}/jiatings/${jiating.name}/parents/raw/${parent.id}.JPG`} fill
                    className="blur-xl brightness-75"/>
                </Link>
                <ParentImageModal parent={parent} jiating={jiating} className="z-30"/>
            </div>  
        );
    }
}