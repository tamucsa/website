import Image from "next/image";
import "./HomeCard.css";

type HomeCardProps = {
    className?: string;
};

export default function HomeCard({ className }: HomeCardProps) {
    return (
        <div className={`homeCardWrapper ${className}`}>
            <div className={'landingWrapper'}>
                <div className={'sidebar'}>
                    <div className="sidebarOuter">
                        <div className="sidebarTrack">
                            <span className="sidebarText">{"ESTABLISHED 1963 · ".repeat(30)}</span>
                            <span className="sidebarText" aria-hidden="true">{"ESTABLISHED 1963 · ".repeat(30)}</span>
                        </div>
                    </div>
                </div>
                <div className="imageWrapper">
                    <Image
                        src="/stockImages/cropped-NiHowdy-1.jpg"
                        alt=""
                        fill
                        className="homeCardImage"
                    />
                    <div className="imageOverlay" />
                    <div className="homeCardOverlay">
                        <p className="homeCardSubtitle">Texas A&amp;M</p>
                        <h1 className="homeCardTitle">    
                        Chinese<br/>
                        Student<br/>
                        Association
                        </h1>
                    </div>
                </div>
                <div className="csaCard">
                    <div className="csaTextContainer">
                        <h2 className="csaCardTitle">What is CSA?</h2>
                        <p className="csaCardText">
                            Established in 1963, the Texas A&M Chinese Student Association (CSA) is a welcoming community that serves our university through social and cultural Chinese experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div className="homeCardBadge">
                <p className="homeCardBadgeText">
                    NiHowdy 2025! (w/ UT, UTD, and Rice)
                </p>
            </div>
        </div>
    );
}