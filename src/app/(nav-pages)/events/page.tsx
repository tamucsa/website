import { Metadata } from "next";
import Link from "next/link";

const EventsPage = () => {
    return (
        <div className='flex flex-col items-center gap-7 md:gap-10 md:pb-0'>
            <h1 className='container text-center font-primary tracking-wider text-2xl sm:text-3xl md:text-4xl mt-10 md:mt-15'>Add to Your Google Calendar <Link target='_blank' href='https://calendar.google.com/calendar/u/1?cid=Y18zZmJmZjZkZWU1NDY0YzQ4Y2QzM2Q5ZTMyYmE5OTMzZGRkNmMwOWI2MjhhYmVlNzNkZjc2YzM5ZDkzMWRhNjJmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20' className="underline hover:text-primary transition-colors">Here</Link>!</h1>
            <iframe
            src="https://embed.styledcalendar.com/#sT0DkMbkqE91fqfz5gle"
            title="Styled Calendar"
            className="styled-calendar-container sm:h-200"
            style={{ width: "80%", border: "none", minHeight: "310px" }}
            // height="800px"
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