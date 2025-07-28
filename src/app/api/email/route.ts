import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { name, email, message, subject } = await request.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.CSA_EMAIL,
            pass: process.env.CSA_APP_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.CSA_EMAIL,
        to: process.env.CSA_EMAIL,
        subject: `Message from ${name} (${email} - ${subject})`,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err) {
                if(!err) {
                    resolve("Email sent successfully");
                } else {
                    reject("Error sending email: " + err.message);
                }
            });
        });
    
    try {
        await sendMailPromise()
        return NextResponse.json({message: "Email sent successfully"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500});
    }

}