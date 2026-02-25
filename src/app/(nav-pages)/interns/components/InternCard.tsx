import { Megateam, InternRole } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill} from "react-icons/ri";

export default function InternCard({ intern }: { intern: Megateam }) {
    return (
        <div id={`${intern.id}`} className="flex flex-col gap-3 sm:gap-5 p-9 md:p-11 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-2xl">
            {/* Image section w/ clickable button to open modal */}
            <div className="relative">
                {/* Large image as clickable button */}
                <Link href={`/interns/${intern.id}`} className="">
                    <Image
                        src={`/2025-2026/internImages/cropped/${intern.id}.JPG`}
                        alt=""
                        className="rounded-2xl hover:scale-105 duration-200 brightness-100 md:brightness-90 md:hover:brightness-110 transition w-full h-auto"
                        width={300}
                        height={300}
                    />
                </Link>
                {/* Instagram icon overlayed as clickable button */}
                <Link
                    target="_blank"
                    href={`https://www.instagram.com/${intern.instagram}/`}
                    className="absolute top-3 right-3 hover:scale-110 bg-white/75 hover:bg-white transition shadow p-2 rounded-xl"
                    aria-label={`Visit ${intern.name}'s Instagram`}
                >
                    <RiInstagramFill className="size-6 text-primary" />
                </Link>
            </div>
            {/* Text section with name, major, and year */}
            <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <h3 className="font-primary tracking-widest text-xl sm:text-2xl md:text-3xl">{intern.name}</h3>
            <p className="font-secondary text-base sm:text-lg md:text-xl">
                {
                    intern.yearEntries["2025-2026"]
                        ?.filter((entry): entry is InternRole => "position" in entry)
                        // ?.map((entry) => entry.position)
                        ?.join(", ")
                }
            </p>
            <p className="font-secondary text-base sm:text-lg md:text-xl">{intern.major}</p>
            </div>
        </div>
    );
}