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

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "tim.tchouamou@gmail.com";

    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: toEmail,
        subject: `${process.env.CONTACT_SUBJECT_PREFIX || "New portfolio contact"} from ${name}`,
        replyTo: email,
        react: ContactEmail({ name, email, message }),
      });
    } else {
      console.warn("RESEND_API_KEY not set. Skipping email send.");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
