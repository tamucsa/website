import LinkButton from "@/app/components/LinkButton";

import { Metadata } from "next";
import Link from "next/link";

const EventsPage = () => {
    return (
        <div className='flex flex-col items-center mt-10 gap-7 pb-5 md:mt-15 md:gap-10 md:pb-10'>
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl'>Upcoming Events!</h1>
            <div className="flex flex-col xl:flex-row gap-3 xl:gap-10">
                <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSdGs9iM-fFD9oBaup3tKjEhoMmOpkeVV_hbwBqGoUDV5bApEQ/viewform" newTab={true}
                    className="w-full md:w-sm text-nowrap text-xl md:text-2xl"
                    text="Jia-Ting Jam RSVP Form"
                />
                <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLScFSA_-OJwWjImcz7nBuEnWwiW7GqogcMf_J_RsczP-Lu8b2g/viewform" newTab={true}
                    className="w-full md:w-sm text-nowrap text-xl md:text-2xl"
                    text="Fall '25 IM Interest Form"
                />
                <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSeFtlEuedU5CF74JTTbCwnqMq4dvgfYggYBixY8cBaszXaSig/viewform" newTab={true}
                    className="w-full md:w-sm text-nowrap text-xl md:text-2xl"
                    text="Concessions Interest Form"
                />
            </div>
            <iframe
                src="https://embed.styledcalendar.com/#sT0DkMbkqE91fqfz5gle"
                title="Styled Calendar"
                className="styled-calendar-container h-[50vh] sm:h-180"
                style={{ width: "80%", border: "none"}}
                data-cy="calendar-embed-iframe"
            />
            <h1 className='container text-center font-primary tracking-wider text-2xl sm:text-3xl md:text-4xl'>Add to Your Google Calendar <Link target='_blank' href='https://calendar.google.com/calendar/u/1?cid=Y18zZmJmZjZkZWU1NDY0YzQ4Y2QzM2Q5ZTMyYmE5OTMzZGRkNmMwOWI2MjhhYmVlNzNkZjc2YzM5ZDkzMWRhNjJmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20' className="underline hover:text-primary transition-colors">Here</Link>!</h1>
        </div>
    );
}

export const metadata: Metadata = {
    title: "TAMU CSA - Events",
    description: "Upcoming events and calendar for the Chinese Student Association at TAMU.",
};
export default EventsPage;