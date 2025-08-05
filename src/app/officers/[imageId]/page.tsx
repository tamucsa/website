"use client";

import ImageModal from "@/app/components/officers/ImageModal";
import { Officer } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { use } from "react";
import { useRouter } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata ({ params }: { params: Promise<{ imageId: number }>}, parent: ResolvingMetadata): Promise<Metadata> {
    const { imageId } = await params;
    return {
        title: `TAMU CSA - Officer ${imageId} Full Image`,
        description: `Full image for officer #${imageId} of the Chinese Student Association at Texas A&M University.`,
    };
}

export default function OfficerFullImage({ params }: { params: Promise<{imageId: number}> }) {
    const { imageId } = use(params);
    const router = useRouter();

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            console.log(`Key pressed: ${event.key}`);
            if (event.key === "Escape") {
                router.push(`/officers#${imageId}`);
            }
        }
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-20">
            <Link href={`/officers#${imageId}`} className="absolute -inset-0 cursor-default z-20">
                <Image alt={`Officer ${imageId} Blurred Background`} src={`/officerImages/raw/${imageId}.JPG`} fill className="max-w-full max-h-screen blur-xl brightness-75" />
            </Link>
            <ImageModal imageId={imageId} className="z-30"/>
        </div>  
    );
}