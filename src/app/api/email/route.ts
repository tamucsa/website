import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const { name, email, message, subject } = await request.json();
    
    if (!name || !email || !message || !subject) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // NODEMAILER STUFF 

    // const transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         user: process.env.CSA_EMAIL,
    //         pass: process.env.CSA_APP_PASSWORD,
    //     },
    // });

    // const mailOptions: Mail.Options = {
    //     from: process.env.CSA_EMAIL,
    //     to: process.env.CSA_EMAIL,
    //     subject: `Message from ${name} (${email} - ${subject})`,
    //     text: message,
    // };

    // const sendMailPromise = () =>
    //     new Promise<string>((resolve, reject) => {
    //         transporter.sendMail(mailOptions, function (err) {
    //             if(!err) {
    //                 resolve("Email sent successfully");
    //             } else {
    //                 reject("Error sending email: " + err.message);
    //             }
    //         });
    //     });
    

    try {
        // await sendMailPromise() //Nodemailer function
        await resend.emails.send({
            from: "contact@csatamu.org",
            to: "tamu.csa1963@gmail.com",
            subject: `Message from ${name} (${email} - ${subject})`,
            replyTo: email,
            text: message,
        });
        
        return NextResponse.json({success: true}, {status: 200});
    } catch (error) {
        return NextResponse.json({success: false, error: "Failed to send email"}, {status: 500});
    }

}