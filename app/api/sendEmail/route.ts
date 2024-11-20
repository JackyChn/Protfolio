import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createGuest } from "@/app/services/apiSubmitInfo";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();

    const { fullName, email, phone, message } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save guest info to Supabase
    await createGuest({ fullName, email, phone, message });

    // Configure Nodemailer for sending email
    const transporter = nodemailer.createTransport({
      host: "smtp.qq.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your QQ email
        pass: process.env.EMAIL_PASSWORD, // Your QQ SMTP authorization code
      },
    });

    const mailOptions = {
      from: `"Message Notification" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Message: ${message || "N/A"}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({
      message: "Guest info saved and email sent successfully!",
    });
  } catch (error: any) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Failed to process the request", error: error.message },
      { status: 500 }
    );
  }
}
