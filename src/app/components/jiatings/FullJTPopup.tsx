"use client";

import { Jiating} from "@/utils/types";
import ParentCard from "@/app/components/jiatings/ParentCard";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
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
            <div className='relative flex flex-col items-center gap-7 md:gap-10 mx-10 mt-10 md:mt-15 mb-15'>
                <div className="flex flex-row items-center justify-center gap-3">
                    <Link
                        href={`/jiatings`}
                        className="hover:scale-110 transition p-2 rounded-md sm:p-2 sm:rounded-xl"
                    >
                        <RiArrowGoBackFill className="h-6 w-6 sm:size-7 hover:text-primary" />
                    </Link>
                    <h1 className='container text-center font-primary tracking-wider text-2xl sm:text-3xl md:text-4xl'>{jiating.name}</h1>
                    <Link
                        href={`/jiatings`}
                        className="hover:scale-110 transition p-2 rounded-md sm:p-2 sm:rounded-xl"
                    >
                        <RiArrowGoBackFill className="h-6 w-6 sm:size-7 text-white" />
                    </Link>
                </div>
                <div className="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-5">
                    {
                        jiating.parents.map((parent, index) => (
                            <ParentCard key={index} parent={parent} />
                        ))
                    }
                </div>
                <div className="relative md:w-md lg:w-3xl hover:scale-102 brightness-90 transition-transform duration-300">
                    <Image
                        src={`/${jiating.years}/jiatingImages/infoSlides/${jiating.name}.jpg`}
                        alt=""
                        width={960}
                        height={540}
                        className="object-cover rounded-lg shadow-md"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div> 
        );
    }
}