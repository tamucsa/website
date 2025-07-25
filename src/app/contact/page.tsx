import { Metadata } from "next";
import Contact from "@/app/components/contact";

const ContactPage = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 pb-15">
            {/* Left/Top - Contact Form */}
            <div className="flex flex-col items-center gap-10 md:gap-10">
                <h1 className="container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-15">Contact Us</h1>
                <Contact />
            </div>
            {/* Right/Bottom - Images */}
            <div className="hidden md:flex md:flex-row lg:flex-col md:items-center md:justify-center md:gap-5 md:pl-10">
                <img src="/images/contact1.jpg" alt="Contact Image 1" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                <img src="/images/contact2.jpg" alt="Contact Image 2" className="w-32 h-32 object-cover rounded-lg shadow-md" />
            </div>
        </div>
    )
}

export const metadata: Metadata = {
  title: "TAMU CSA - Contact Us",
  description: "Get in touch with the Chinese Student Association at Texas A&M University. We would love to hear from you!",
};

export default ContactPage;