import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css';

type HomeCardProps = {
    className?: string;
};

export default function HomeCard({ className }: HomeCardProps) {
    return (
        <div className="relative">
            <div className="flex flex-row relative w-full h-[calc(100vh-4.5rem)] overflow-hidden">
                <div className="shrink-0 w-20 h-full overflow-hidden relative bg-bg border-r border-solid border-home-border z-2">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center">
                        <div className="flex flex-row whitespace-nowrap text-4xl text-text origin-center animate-marquee pt-1">
                            <span className="shrink-0">{"ESTABLISHED 1963 · ".repeat(30)}</span>
                            <span className="shrink-0" aria-hidden="true">{"ESTABLISHED 1963 · ".repeat(30)}</span>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 overflow-hidden">
                    <Image
                        src="/stockImages/cropped-NiHowdy-1.jpg"
                        alt=""
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[rgba(100,100,100,0.5)] z-1" />
                    <div className="absolute top-20 left-16 z-2 text-white">
                        <p className="text-4xl mb-1 leading-[0.9] font-medium">Texas A&amp;M</p>
                        <h1 className="text-8xl m-0 leading-[1.1] font-bold">    
                        Chinese<br/>
                        Student<br/>
                        Association
                        </h1>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 w-140 bg-bg z-3 h-50 rounded-tl-2xl">
                    <div className="p-6">
                        <h2 className="text-4xl font-bold mb-2 text-text">What is CSA?</h2>
                        <p className="text-xl text-text leading-normal">
                            Established in 1963, the Texas A&M Chinese Student Association (CSA) is a welcoming community that serves our university through social and cultural Chinese experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 w-full bg-bg">
                <div className="flex flex-col">
                    <div className="relative w-full aspect-square overflow-hidden bg-secondary">
                        <Image src="/stockImages/Informational-7.jpg" alt="learn more about becoming a member and joining a jiating" fill className="object-cover object-center" />
                    </div>
                    <div className="flex flex-col flex-1 border-r border-t border-solid border-home-border">
                        <p className="text-base text-subtitle m-4 mb-1 leading-0 pt-2">Join a Jiating and meet new people</p>
                        <h3 className="text-[2rem] font-bold mx-4 flex-1">Become a Member</h3>
                        <Link href="/membership" className="w-48 h-12 text-base relative self-end text-text hover:text-white bg-transparent hover:bg-black border-l border-t border-solid border-[#ccc] hover:border-black rounded-tl-xl cursor-pointer text-center content-center transitions-colors duration-200">↑ Sign Up</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="relative w-full aspect-square overflow-hidden bg-secondary">
                        <Image src="/stockImages/internGroupPhoto.jpg" alt="learn more about internship program" fill className="object-cover object-center" />
                    </div>
                    <div className="flex flex-col flex-1 border-r border-t border-solid border-home-border">
                        <p className="text-base text-subtitle m-4 mb-1 leading-0 pt-2">Want to learn more about CSA?</p>
                        <h3 className="text-[2rem] font-bold mx-4 flex-1">Internship Program</h3>
                        <Link href="/interns" className="w-48 h-12 text-base relative self-end text-text hover:text-white bg-transparent hover:bg-black border-l border-t border-solid border-[#ccc] hover:border-black rounded-tl-xl cursor-pointer text-center content-center transitions-colors duration-200">↑ Learn More</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="relative w-full aspect-square overflow-hidden bg-secondary">
                        <Image src="/stockImages/basketball.jpg" alt="play for csa in intramurals" fill className="object-cover object-center" />
                    </div>
                    <div className="flex flex-col flex-1 border-r border-t border-solid border-home-border">
                        <p className="text-base text-subtitle m-4 mb-1 leading-0 pt-2">Play for CSA against other teams</p>
                        <h3 className="text-[2rem] font-bold mx-4 flex-1">Intramurals</h3>
                        <Link href="/sports" className="w-48 h-12 text-base relative self-end text-text hover:text-white bg-transparent hover:bg-black border-l border-t border-solid border-[#ccc] hover:border-black rounded-tl-xl cursor-pointer text-center content-center transitions-colors duration-200">↑ Compete</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="relative w-full aspect-square overflow-hidden bg-secondary">
                        <Image src="/stockImages/placeholderJTO.jpg" alt="learn more about the jiating olympics" fill className="object-cover object-center" />
                    </div>
                    <div className="flex flex-col flex-1 border-t border-solid border-home-border">
                        <p className="text-base text-subtitle m-4 mb-1 leading-0 pt-2">Represent your Jiating in sports</p>
                        <h3 className="text-[2rem] font-bold mx-4 flex-1">Jiating Olympics</h3>
                        <Link href="/sports" className="w-48 h-12 text-base relative self-end text-text hover:text-white bg-transparent hover:bg-black border-l border-t border-solid border-[#ccc] hover:border-black rounded-tl-xl cursor-pointer text-center content-center transitions-colors duration-200">↑ Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-bg border-y border-solid border-black overflow-hidden">
                <div className="flex flex-row whitespace-nowrap animate-meet-marquee">
                    <span className="shrink-0 text-[2rem] font-extrabold tracking-wider">{"MEET THE JIATINGS // ".repeat(20)}</span>
                    <span className="shrink-0 text-[2rem] font-extrabold tracking-wider" aria-hidden="true">{"MEET THE JIATINGS // ".repeat(20)}</span>
                </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-1 w-full bg-bg">
                {[
                    { name: "Chiikawa", img: "/jiatings/chiikawa.jpg" },
                    { name: "Hachiware", img: "/jiatings/hachi.jpg" },
                    { name: "Kurimanju", img: "/jiatings/kuri.jpg" },
                    { name: "Momonga", img: "/jiatings/momonga.jpg" },
                    { name: "Rakko", img: "/jiatings/rakko.jpg" },
                    { name: "Usagi", img: "/jiatings/usagi.jpg" },
                ].map((jiating, i) => (
                    <div className="relative overflow-hidden" key={i}>
                        <div className="relative w-full aspect-2/3 overflow-hidden bg-secondary">
                            <div className="absolute inset-0 bg-[rgba(100,100,100,0.5)] z-1"></div>
                            <Image src={jiating.img} alt={jiating.name} fill className="object-cover object-center" />
                        </div>
                        <Link href={`/jiatings/${jiating.name.toLowerCase()}`} className="absolute inset-0 z-2 flex items-center justify-center">
                            <p className="absolute bottom-4 text-[4rem] hover:text-[4.5rem] font-semibold text-white whitespace-nowrap z-2 [writing-mode:vertical-rl] translate-x-1/4 rotate-180 tracking-[0.1rem] transition-all duration-200">{jiating.name}</p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="w-full bg-bg py-24 flex relative items-center">
                <h1 className="absolute text-6xl font-extrabold tracking-wider left-8"> &gt; WHAT MAKES US SPECIAL?</h1>
            </div>


            <div className="relative w-full h-screen">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="absolute inset-0 bg-[rgba(100,100,100,0.5)] z-1"></div>
                    <Image
                        src="/stockImages/NiHowdy-3.jpg"
                        alt="Ni-Howdy event"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-120 h-80 bg-bg p-6 z-2 rounded-tl-3xl">
                    <p className="text-base text-text mb-1 leading-0 mt-2">TAMU, UT, UTD</p>
                    <h2 className="text-4xl font-bold text-text leading-normal mb-1">Ni-Howdy</h2>
                    <p className="text-xl text-subtitle leading-normal mb-4">
                        Ni-Howdy is Texas A&M CSA's annual magnum opus event, bringing together Chinese Student Associations from TAMU, UT Austin, and UTD.
                        Hosted here at College Station, Ni-Howdy is a weekend-long event that features sports competitions, dance, performances, and mixers.
                    </p>
                    <Link href="/nihowdy" className="w-54 h-14 bg-transparent hover:bg-black border-l border-t border-solid text-text hover:text-white text-[1.1rem] cursor-pointer transition-colors duration-200 absolute bottom-0 right-0 text-center content-center rounded-tl-xl">↑ Learn More</Link>
                </div>
            </div>
            <div className="relative w-full h-screen">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="absolute inset-0 bg-[rgba(100,100,100,0.5)] z-1"></div>
                    <Image
                        src="/stockImages/volleyball1.jpg"
                        alt="Ni-Howdy event"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-120 h-80 bg-bg p-6 z-2 rounded-tl-3xl">
                    <p className="text-base text-text mb-1 leading-0 mt-2">Fight for your Jiating</p>
                    <h2 className="text-4xl font-bold text-text leading-normal mb-1">Jiating Olympics</h2>
                    <p className="text-xl text-subtitle leading-normal mb-4">
                        The Jiating Olympics is a semester-long event which occurs twice a year. Members of each Jiating compete against their peers in a variety of sports, including basketball, volleyball, badminton, and more. To the winning Jiating? Money and bragging rights.
                    </p>
                    <Link href="/jiatings" className="w-54 h-14 bg-transparent hover:bg-black border-l border-t border-solid text-text hover:text-white text-[1.1rem] cursor-pointer transition-colors duration-200 absolute bottom-0 right-0 text-center content-center rounded-tl-xl">↑ Learn More</Link>
                </div>
            </div>
        </div>
        
    );
}