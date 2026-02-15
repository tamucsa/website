import classNames from "classnames";

export default function RewardsCard() {
    const rewards = [
        { points: 25, label: "Sticker", color: "rose" },
        { points: 35, label: "Free Boba", color: "slate" },
        { points: 50, label: "Past Merch", color: "rose" },
        { points: 65, label: "Formals Reimbursed", color: "slate" },
        // { points: 75, label: "Pie an Officer", color: "rose" },
    ]
    return (
        <div className="flex flex-col gap-5 items-center p-8 border border-gray-300 shadow-md/30 shadow-gray-600 rounded-xl w-full max-w-4xl mx-auto">
            <h2 className="font-primary tracking-wider text-center text-2xl md:text-3xl">Membership Rewards</h2>
            <div className="flex flex-col h-full justify-center">
                <div className="relative w-full">
                    {/* Horizontal timeline for md+ */}
                    <div className="hidden md:block absolute left-0 right-0 top-6 h-0.5 border border-gray-300" />
                    {/* Vertical timeline for mobile */}
                    <div className="md:hidden absolute top-0 bottom-0 left-10 w-0.5 border border-gray-300" />

                    {/* Rewards: stacked vertically on mobile, horizontal on md+ */}
                    <div className="relative flex flex-col md:flex-row md:justify-between w-full px-4 md:px-8 gap-6 md:gap-8">
                    {rewards.map((reward, index) => (
                        <div key={index} className="flex w-full md:w-auto md:flex-col items-center md:items-center gap-3">
                            <div className="flex items-center w-full md:w-auto gap-4 md:gap-1 md:flex-col md:items-center">
                                {/* Circle */}
                                <div className={classNames("relative z-10 h-12 w-12 rounded-full border-4 border-white",
                                    reward.color === "rose" ? "bg-accent" : "bg-primary"
                                )} />

                                {/* Text block */}
                                <div className="flex flex-col md:gap-2 md:items-center">
                                    <div className="flex flex-row md:flex-col gap-1 md:gap-0 text-center">
                                        <div className={classNames("text-3xl md:text-4xl font-bold",
                                            reward.color === "rose" ? "text-accent" : "text-primary"
                                        )}>
                                            {reward.points}
                                        </div>
                                        <div className={classNames("text-lg md:text-2xl font-semibold",
                                            reward.color === "rose" ? "text-accent" : "text-primary"
                                        )}>
                                            pts
                                        </div>
                                    </div>
                                    <div className="text-left md:text-center text-lg md:text-xl">{reward.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}