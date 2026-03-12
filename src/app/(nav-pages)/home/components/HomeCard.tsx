import Image from "next/image";
import "./HomeCard.css";

type HomeCardProps = {
    className?: string;
};

export default function HomeCard({ className }: HomeCardProps) {
    return (
        <div className={`homeCardWrapper ${className}`}>
            <Image
                src="/stockImages/cropped-NiHowdy-1.jpg"
                alt=""
                width={2048}
                height={1024}
                className="homeCardImage"
                // style={{ width: "100%", height: "auto" }}
            />
            <div className="homeCardOverlay">
                <h1 className="homeCardTitle">
                    Chinese Student Association
                </h1>
                <h2 className="homeCardSubtitle">
                    Texas A&M University | EST. 1963
                </h2>
            </div>
            <div className="homeCardBadge">
                <p className="homeCardBadgeText">
                    NiHowdy 2025! (w/ UT, UTD, and Rice)
                </p>
            </div>
        </div>
    );
}