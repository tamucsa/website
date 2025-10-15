import { Jiating } from "@/utils/types";

import classNames from "classnames";

export default function PointTableCard() {
    const pointsData = [
        { event: "Jiating", points: "1" },
        { event: "IM Sports (15pt cap)", points: "1" },
        { event: "JT Olympics / Mixers", points: "2" },
        { event: "GMs", points: "2" },
        { event: "CSA-wide Events / Concessions", points: "3" },
    ]
    return (
    <div className="flex flex-col gap-5 items-stretch p-8 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-xl w-full md:max-w-xl mx-auto min-w-0 self-stretch">
            <h2 className="font-primary tracking-wider text-center text-2xl md:text-3xl">Earning Points</h2>
            <div className="relative w-full">
                <div className="divide-y divide-border">
                    {/* Header Row */}
                    <div className="grid grid-cols-2 bg-accent rounded-t-lg overflow-hidden">
                        <div className="px-6 py-2 text-center font-semibold">Event</div>
                        <div className="border-l border-border px-6 py-2 text-center font-semibold">Points</div>
                    </div>

                    {/* Data Rows */}
                    {pointsData.map((row, index) => (
                        <div key={index} className="grid grid-cols-2 hover:bg-muted/50 transition-colors">
                        <div className="px-6 py-2 text-center">{row.event}</div>
                        <div className="border-l border-border px-6 py-2 text-center">{row.points}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}