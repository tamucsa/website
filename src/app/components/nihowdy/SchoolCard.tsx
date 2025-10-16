import { NiHowdySchool } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill} from "react-icons/ri";

export default function SchoolCard({ school }: { school: NiHowdySchool }) {
    return (
        <div id={`${school.shortname}`} className="flex flex-col items-center justify-end gap-0 md:gap-2 p-2 md:p-4 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-2xl">
            {/* Image section w/ clickable button to open modal */}
            <div className="flex flex-col relative justify-center h-full p-2">
                {/* Large image as clickable button */}
                <Link href={`https://www.instagram.com/${school.instagram}/`} className="" target="_blank">
                    <Image
                        src={`/nihowdy/schoolLogos/${school.shortname}.png`}
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
            <h3 className="font-secondary text-center text-lg md:text-xl">{school.school}</h3>
        </div>
    );
}