import { Officer } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";

export default function OfficerCard({ officer }: { officer: Officer }) {
    return (
        <div id={`officer-${officer.id}`} className="flex flex-col gap-5 p-11 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-2xl">
            {/* Image section w/ clickable button to open modal */}
            <Link href={`/officers/${officer.id}`}>
                <Image src={`/officerImages/cropped/${officer.id}.JPG`} alt={`${officer.name}'s photo`} 
                    className="rounded-2xl hover:scale-105 transition-transform duration-200 hover:brightness-110" width={300} height={300}/>
            </Link>
            {/* Text section with name, position, major, and year */}
            <div className="flex flex-col gap-3">
                <h3 className="font-primary tracking-widest text-3xl">{officer.name}</h3>
                <p className="font-secondary text-xl">{officer.position}</p>
                <p className="font-secondary text-xl">{officer.major}</p>
            </div>
        </div>
    );
}