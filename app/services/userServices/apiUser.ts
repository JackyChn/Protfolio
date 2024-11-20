"use server";

import { supabase } from "../supabase";
import nodemailer from "nodemailer";

export async function createUser(newGuest: User) {
  const { data, error } = await supabase.from("users").insert([newGuest]);
  if (error) {
    console.error("Error saving guest", error);
    throw new Error("Failed to save guest information");
  }

  return data;
}

export async function getUser(fullName: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("fullName", fullName);

  if (error) {
    console.error("Error getting guest:", error);
    throw new Error("Failed to get guest information");
  }

  // Check if no rows were returned
  if (!data || data.length === 0) {
    console.log("No user found with the given fullName.");
    return null; // Explicitly return null when no user exists
  }

  // Return the first user if rows exist
  return data[0];
}

export async function create_send(newGuest: User) {
  try {
    // 0. Check if the user exists
    const existingUser = await getUser(newGuest.fullName);
    if (existingUser) {
      console.log("User already exists:", existingUser);
      throw new Error(
        "You've already send the message, please do not send again ☺"
      );
    }

    // 1. Save guest info to Supabase
    await createUser(newGuest);

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
  } catch (error: unknown) {
    console.error("Error in create_send:", error);

    // Safely handle and re-throw the error with the appropriate message
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      // Fallback for unexpected error types
      throw new Error("An unexpected error occurred.");
    }
  }
}
