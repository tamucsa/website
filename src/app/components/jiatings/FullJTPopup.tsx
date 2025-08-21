"use client";

import { Jiating} from "@/utils/types";
import ParentCard from "@/app/components/jiatings/ParentCard";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function FullJTPopup({ jiating }: { jiating: Jiating }) {
    const router = useRouter();

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            console.log(`Key pressed: ${event.key}`);
            if (event.key === "Escape") {
                router.push(`/jiatings`);
            }
        }
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    }, []);

    if (!jiating) {
        return (
            <div className="fixed flex items-center justify-center bg-black z-20">
                <p className="text-white">Jiating not found.</p>
            </div>
        );
    }
    else {
        return (
            <div className='relative flex flex-col items-center gap-7 md:gap-10 mx-15 mb-15'>
                <h1 className='container text-center font-primary tracking-wider text-2xl sm:text-3xl md:text-4xl mt-10 md:mt-15'>{jiating.name}</h1>
                <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-5">
                    {
                        jiating.parents.map((parent, index) => (
                            <ParentCard key={index} parent={parent} />
                        ))
                    }
                </div>
                <Link
                    href={`/jiatings`}
                    className="absolute top-5 md:top-10 left-0 hover:scale-110 transition p-2 rounded-md sm:p-2 sm:rounded-xl"
                    aria-label={`Visit ${parent.name}'s Instagram`}
                >
                    <RiArrowGoBackFill className="h-6 w-6 sm:h-8 sm:w-8 hover:text-primary" />
                </Link>
            </div> 
        );
    }
}