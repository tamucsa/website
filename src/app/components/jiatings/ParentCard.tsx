import { Megateam, Jiating } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill} from "react-icons/ri";

export default function ParentCard({ parent, jiating }: { parent: Megateam; jiating: Jiating }) {
    return (
        <div id={`${parent.id}`} className="flex flex-col gap-3 sm:gap-5 p-6 sm:p-8 md:p-11 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-2xl">
            {/* Image section w/ clickable button to open modal */}
            <div className="relative">
                {/* Large image as clickable button */}
                <Link href={`/jiatings/${jiating.id}/${parent.id}`} className="">
                    <Image
                        src={`/${jiating.years}/jiatings/${jiating.name}/parents/cropped/${parent.id}.JPG`}
                        alt=""
                        className="rounded-2xl hover:scale-105 duration-200 brightness-100 md:brightness-90 md:hover:brightness-110 transition w-full h-auto"
                        width={300}
                        height={300}
                    />
                </Link>
                {/* Instagram icon overlayed as clickable button */}
                <Link
                    target="_blank"
                    href={`https://www.instagram.com/${parent.instagram}/`}
                    className="absolute top-3 right-3 hover:scale-110 bg-white/75 hover:bg-white transition shadow p-1 rounded-md sm:p-2 sm:rounded-xl"
                    aria-label={`Visit ${parent.name}'s Instagram`}
                >
                    <RiInstagramFill className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </Link>
            </div>
            {/* Text section with name, position, major, and year */}
            <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <h3 className="font-primary tracking-wider text-base sm:text-2xl md:text-3xl">{parent.name}</h3>
            <p className="font-secondary text-xs sm:text-lg md:text-lg">{parent.major}</p>
            </div>
        </div>
    );
}