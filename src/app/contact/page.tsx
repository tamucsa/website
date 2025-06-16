import { Metadata } from "next";

const ContactPage = () => {
    return (
        <div className="container max-w-7xl mx-auto py-20">
            <h1 className="font-primary text-center tracking-wider text-xl mb-8 ">Contact Us</h1>
        </div>
    )
}

export const metadata: Metadata = {
  title: "TAMU CSA - Contact Us",
  description: "Get in touch with the Chinese Student Association at Texas A&M University. We would love to hear from you!",
};

export default ContactPage;