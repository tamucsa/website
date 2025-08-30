import { Jiating } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";

export default function JiatingCard({ jiating }: { jiating: Jiating }) {
    return (
        <div id={`${jiating.id}`} className="flex flex-col items-center justify-end w-26 gap-1 sm:gap-2 p-1 sm:p-1 md:p-2 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-2xl">
            {/* Image section w/ clickable button to open modal */}
            <div className="relative">
                {/* Large image as clickable button */}
                <Link href={`/jiatings/${jiating.id}`} className="">
                    <Image
                        src={`/${jiating.years}/jiatingImages/characters/${jiating.name}.webp`}
                        alt=""  
                        className="rounded-2xl hover:scale-105 duration-200 brightness-100 md:brightness-90 md:hover:brightness-100 transition w-full h-auto"
                        width={300}
                        height={300}
                    />
                </Link>
                {/* Instagram icon overlayed as clickable button */}
                {/* <Link
                    target="_blank"
                    href={`https://www.instagram.com/${jiating.instagram}/`}
                    className="absolute top-3 right-3 hover:scale-110 bg-white/75 hover:bg-white transition shadow p-1 rounded-md sm:p-2 sm:rounded-xl"
                    aria-label={`Visit ${jiating.name}'s Instagram`}
                >
                    <RiInstagramFill className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </Link> */}
            </div>
            <h3 className="font-primary tracking-widest text-sm md:text-base">{jiating.name}</h3>
        </div>
    );
}