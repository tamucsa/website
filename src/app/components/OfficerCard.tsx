import { Officer } from "@/types";

import Image from "next/image";

export default function OfficerCard({ officer }: { officer: Officer }) {
    return (
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
            <Image src={officer.image} alt={`${officer.name}'s photo`} className="w-24 h-24 rounded-full" />
            <h3 className="text-lg font-semibold">{officer.name}</h3>
            <p className="text-gray-600">{officer.position} {officer.major}</p>
        </div>
    );
}