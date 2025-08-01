import { Officer } from "@/types";

import Image from "next/image";

export default function OfficerCard({ officer }: { officer: Officer }) {
    return (
        <div className="flex flex-col gap-5 p-11 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-2xl">
            <Image src={`/officers/${officer.id}.JPG`} alt={`${officer.name}'s photo`} 
                className="rounded-2xl" width={300} height={300}/>
            <div className="flex flex-col gap-3">
                <h3 className="font-primary tracking-widest text-3xl">{officer.name}</h3>
                <p className="font-secondary text-xl">{officer.position}</p>
                <p className="font-secondary text-xl">{officer.major}</p>
            </div>
        </div>
    );
}