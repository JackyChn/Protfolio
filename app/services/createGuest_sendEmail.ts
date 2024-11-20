"use server";

import { NewGuest } from "./apiSubmitInfo";
import { supabase } from "./supabase";

import nodemailer from "nodemailer";
export async function create_send(newGuest: NewGuest) {
  try {
    // 1. Save guest info to Supabase
    const { error } = await supabase.from("users").insert([newGuest]);
    if (error) {
      console.error("Error saving guest to Supabase:", error);
      throw new Error("Failed to save guest information");
    }

    // 2. Configure Nodemailer for sending email
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
      subject: `New Message from ${newGuest.fullName}`,
      text: `
          Name: ${newGuest.fullName}
          Email: ${newGuest.email}
          Phone: ${newGuest.phone || "N/A"}
          Message: ${newGuest.message || "N/A"}
        `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return { message: "Guest info saved and email sent successfully!" };
  } catch (error) {
    console.error("Error in create_send:", error);
    throw new Error("Failed to process guest information or send email");
  }
}
