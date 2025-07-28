import { Metadata } from "next";
import Image from "next/image";
import Contact from "@/app/components/contact";

const ContactPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-7'>
            <h1 className="container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-15">Contact Us</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 pb-15">
                {/* Left/Top - Contact Form */}
                <div className="">
                    <Contact />
                </div>
                {/* Right/Bottom - Images */}
                <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center xl:gap-5 xl:pl-10">
                    {/* replace dimensions with fill once actual images are added */}
                    <Image src="/images/contact1.jpg" alt="Contact Image 1" width={450} height={250} className="object-cover rounded-lg shadow-md" />
                    <Image src="/images/contact2.jpg" alt="Contact Image 2" width={450} height={250} className="object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
  title: "TAMU CSA - Contact Us",
  description: "Get in touch with the Chinese Student Association at Texas A&M University. We would love to hear from you!",
};

export default ContactPage;