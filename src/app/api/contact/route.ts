// 1. Imports
// NextRequest: Represents the incoming HTTP request (like POST data from a form)
// NextResponse: Used to send a response back (JSON, status codes, etc.)
import { NextRequest, NextResponse } from "next/server";
// Resend: Email service SDK (used to send emails easily)
import { Resend } from "resend";
// ContactEmail: A React email template (custom UI for the email body)
import ContactEmail from "../../emails/ContactEmail";


// 2. Runtime configuration
// NB: This tells Next.js to run this API route in a Node.js environment, 
// which is necessary for using the Resend SDK and sending emails.
// If you remove this → email sending may break
export const runtime = "nodejs";

// 3. API Route Handler
// This file defines a POST API endpoint
export async function POST(req: NextRequest) {

  // 4. Try/Catch Block
  // try: Prevents your app from crashing if something goes wrong (like missing fields or email service issues)
  try {

    // 5. Extract Data from Request
    // Reads the JSON body sent from frontend. Example: (name, email, message)
    const { name, email, message } = await req.json();

    // in the if argument ensures fields are: not empty, not just spaces
    // .trim() removes spaces like " "
    if (!name?.trim() || !email?.trim() || !message?.trim()) {

      // If validation fails:Returns: status 400 = Bad request, JSON error message
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Environment Variable Check:Your API key must exist and Stored in .env.local
    if (!process.env.RESEND_API_KEY) {
      // If missing:Logs error (server side only)
      console.error("Missing RESEND_API_KEY");
      // Returns: status 500 = Internal Server Error, JSON error message
      return NextResponse.json(
        { success: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    // 8. Initialize Resend
    // Creates email client using your API key, Now you can send emails
    const resend = new Resend(process.env.RESEND_API_KEY);


// 9. Send Email
    //  This is the core logic: await resend.emails.send
    await resend.emails.send({

    // Email Configuration Explained
    // Sender email: Must be verified domain in Resend,
    // ! = "I guarantee it's not undefined" (TypeScript)
      from: process.env.CONTACT_FROM_EMAIL!, // VERIFIED DOMAIN EMAIL

      // Receiver email: Uses env variable OR fallback email
      to: process.env.CONTACT_TO_EMAIL || "tim.tchouamou@gmail.com",

      // Dynamic subject: Example output: New portfolio contact from Tim
      subject: `${
        process.env.CONTACT_SUBJECT_PREFIX || "New portfolio contact"
      } from ${name}`,
  //  When you click "reply", it goes to the user’s email
      replyTo: email,

  // Important: Uses a React component as email template
  // Cleaner than raw HTML
      react: ContactEmail({ name, email, message }),
    });
//  10. Success Response: Frontend receives: { success: true }
    return NextResponse.json({ success: true });
  } 

  // catch: Catches errors and returns a safe response without crashing the app

  // If ANYTHING fails:JSON parsing or Resend API fails or Missing env variables
  catch (error) {
    // Logs full error for debugging (server side only, not exposed to users)
    console.error("Contact API error:", error);

    // Sends safe error to user (no sensitive data)
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}


// This is a Next.js API route that handles contact form submissions. 
// It receives user input via a POST request, validates required fields,
//  and uses the Resend email service to send a formatted email using a 
// React template. It includes error handling for missing environment 
// variables and failed requests, and returns structured JSON responses
//  with appropriate HTTP status codes.
