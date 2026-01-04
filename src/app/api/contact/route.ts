import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "../../emails/ContactEmail";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { success: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!, // VERIFIED DOMAIN EMAIL
      to: process.env.CONTACT_TO_EMAIL || "tim.tchouamou@gmail.com",
      subject: `${
        process.env.CONTACT_SUBJECT_PREFIX || "New portfolio contact"
      } from ${name}`,
      replyTo: email,
      react: ContactEmail({ name, email, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
