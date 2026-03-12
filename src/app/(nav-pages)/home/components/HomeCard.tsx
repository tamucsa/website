import Image from "next/image";
import Link from "next/link";
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
            <div className="cardsSection">
                <div className="card">
                    <div className="cardImageWrapper">
                        <Image src="/stockImages/Informational-7.jpg" alt="learn more about becoming a member and joining a jiating" fill className="cardImage" />
                    </div>
                    <div className="cardBody">
                        <p className="cardSuper">Join a Jiating and meet new people</p>
                        <h3 className="cardTitle">Become a Member</h3>
                        <Link href="/membership" className="cardButton">↑ Sign Up</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="cardImageWrapper">
                        <Image src="/stockImages/internGroupPhoto.jpg" alt="learn more about internship program" fill className="cardImage" />
                    </div>
                    <div className="cardBody">
                        <p className="cardSuper">Want to learn more about CSA?</p>
                        <h3 className="cardTitle">Internship Program</h3>
                        <Link href="/interns" className="cardButton">↑ Learn More</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="cardImageWrapper">
                        <Image src="/stockImages/basketball.jpg" alt="play for csa in intramurals" fill className="cardImage" />
                    </div>
                    <div className="cardBody">
                        <p className="cardSuper">Play for CSA against other teams</p>
                        <h3 className="cardTitle">Intramurals</h3>
                        <Link href="/contact" className="cardButton">↑ Compete</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="cardImageWrapper">
                        <Image src="/stockImages/placeholderJTO.jpg" alt="learn more about the jiating olympics" fill className="cardImage" />
                    </div>
                    <div className="cardBody">
                        <p className="cardSuper">Represent your Jiating in sports</p>
                        <h3 className="cardTitle">Jiating Olympics</h3>
                        <Link href="/jiatings" className="cardButton">↑ Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="meetMarqueeWrapper">
                <div className="meetMarqueeTrack">
                    <span className="meetMarqueeText">{"MEET THE JIATINGS // ".repeat(20)}</span>
                    <span className="meetMarqueeText" aria-hidden="true">{"MEET THE JIATINGS // ".repeat(20)}</span>
                </div>
            </div>
            <div className="jiatingsSection">
                {[
                    { name: "Chiikawa", img: "/jiatings/chiikawa.jpg" },
                    { name: "Hachiware", img: "/jiatings/hachi.jpg" },
                    { name: "Kurimanju", img: "/jiatings/kuri.jpg" },
                    { name: "Momonga", img: "/jiatings/momonga.jpg" },
                    { name: "Rakko", img: "/jiatings/rakko.jpg" },
                    { name: "Usagi", img: "/jiatings/usagi.jpg" },
                ].map((jiating, i) => (
                    <div className="jiatingCard" key={i}>
                        <div className="jiatingImageWrapper">
                            <div className="imageOverlay"></div>
                            <Image src={jiating.img} alt={jiating.name} fill className="jiatingImage" />
                        </div>
                        <p className="jiatingName">{jiating.name}</p>
                    </div>
                ))}
            </div>

            <div className="sectionHeader">
                <h1 className="sectionHeaderText"> &gt; WHAT MAKES US SPECIAL?</h1>
            </div>


            <div className="eventShowcase">
                <div className="eventImageWrapper">
                    <div className="imageOverlay"></div>
                    <Image
                        src="/stockImages/NiHowdy-3.jpg"
                        alt="Ni-Howdy event"
                        fill
                        className="eventImage"
                    />
                </div>
                <div className="eventCard">
                    <p className="eventCardSuper">TAMU, UT, UTD</p>
                    <h2 className="eventCardTitle">Ni-Howdy</h2>
                    <p className="eventCardText">
                        Ni-Howdy is Texas A&M CSA's annual magnum opus event, bringing together Chinese Student Associations from TAMU, UT Austin, and UTD.
                        Hosted here at College Station, Ni-Howdy is a weekend-long event that features sports competitions, dance, performances, and mixers.
                    </p>
                    <Link href="/nihowdy" className="eventCardButton">↑ Learn More</Link>
                </div>
            </div>
            <div className="eventShowcase">
                <div className="eventImageWrapper">
                    <div className="imageOverlay"></div>
                    <Image
                        src="/stockImages/volleyball1.jpg"
                        alt="Ni-Howdy event"
                        fill
                        className="eventImage"
                    />
                </div>
                <div className="eventCard">
                    <p className="eventCardSuper">Fight for your Jiating</p>
                    <h2 className="eventCardTitle">Jiating Olympics</h2>
                    <p className="eventCardText">
                        The Jiating Olympics is a semester-long event which occurs twice a year. Members of each Jiating compete against their peers in a variety of sports, including basketball, volleyball, badminton, and more. To the winning Jiating? Money and bragging rights.
                    </p>
                    <Link href="/jiatings" className="eventCardButton">↑ Learn More</Link>
                </div>
            </div>
        </div>
        
    );
}