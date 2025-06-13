import Link from "next/link";

const EventsPage = () => {
    return (
        <div className='flex flex-col items-center gap-10'>
            <h1 className='container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-20 p-5 md:p-0'>Add to Your Google Calendar <Link href='https://calendar.google.com' className="underline">Here</Link>!</h1>
            <iframe
                src="https://embed.styledcalendar.com/#L87dkf6CYaiWvIAGrPUm"
                title="Styled Calendar"
                className="styled-calendar-container mb-20"
                style={{ width: "80%", border: "none" }}
                height="760px"
                data-cy="calendar-embed-iframe"
            />
        </div>
    );
}
export default EventsPage;