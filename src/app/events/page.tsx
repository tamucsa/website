import { Metadata } from "next";
import Link from "next/link";

const EventsPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-10'>
            <h1 className='container text-center font-primary tracking-wider text-2xl sm:text-3xl md:text-4xl mt-10 md:mt-15 p-5 md:p-0'>Add to Your Google Calendar <Link target='_blank' href='https://calendar.google.com' className="underline hover:text-primary transition-colors">Here</Link>!</h1>
            <iframe
                src="https://embed.styledcalendar.com/#L87dkf6CYaiWvIAGrPUm"
                title="Styled Calendar"
                className="styled-calendar-container mb-20"
                style={{ width: "80%", border: "none" }}
                height="800px"
                data-cy="calendar-embed-iframe"
            />
        </div>
    );
}

export const metadata: Metadata = {
    title: "TAMU CSA - Events",
    description: "Upcoming events and calendar for the Chinese Student Association at TAMU.",
};
export default EventsPage;