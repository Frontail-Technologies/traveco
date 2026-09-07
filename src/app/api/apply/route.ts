import { NextResponse } from "next/server";
import {
  generateApplicationEmailHtml,
  generateApplicationEmailPlainText,
  ApplicationEmailData,
} from "@/lib/email-template";
import { transporter, mailOptions } from "@/lib/nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Spam Protection: Honeypot check
    if (body._hp || body.honeypot || body.website) {
      console.warn("Spam honeypot triggered on /api/apply");
      // Silently return success to mislead bots without sending email
      return NextResponse.json(
        { message: "Thank you. Your request has been received. TRAVECO will contact you shortly." },
        { status: 200 }
      );
    }

    // Extract and trim fields (support both fullName/name and mobile/phone)
    const fullName = (body.fullName || body.name || "").toString().trim();
    const mobile = (body.mobile || body.phone || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const serviceType = (body.serviceType || "General Consultation").toString().trim();
    const destinationCountry = (body.destinationCountry || body.destination || "").toString().trim();
    const nationality = (body.nationality || "").toString().trim();
    const currentCountry = (body.currentCountry || "").toString().trim();
    const expectedTravelDate = (body.expectedTravelDate || body.travelDate || "").toString().trim();
    const message = (body.message || "").toString().trim();
    const pageUrl = (body.pageUrl || req.headers.get("referer") || "TRAVECO Website").toString().trim();

    // 2. Server-side required field validation
    if (!fullName) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!mobile || mobile.length < 6) {
      return NextResponse.json(
        { error: "A valid mobile or WhatsApp number is required." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!serviceType) {
      return NextResponse.json(
        { error: "Service Type is required." },
        { status: 400 }
      );
    }

    const applicationData: ApplicationEmailData = {
      fullName,
      mobile,
      email,
      serviceType,
      destinationCountry: destinationCountry || undefined,
      nationality: nationality || undefined,
      currentCountry: currentCountry || undefined,
      expectedTravelDate: expectedTravelDate || undefined,
      message: message || undefined,
      pageUrl,
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    const htmlContent = generateApplicationEmailHtml(applicationData);
    const textContent = generateApplicationEmailPlainText(applicationData);

    // 3. Send email with Nodemailer
    await transporter.sendMail({
      from: mailOptions.from,
      to: mailOptions.to,
      cc: mailOptions.cc,
      replyTo: email,
      subject: `New TRAVECO Application Request - ${serviceType}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Thank you. Your request has been received. TRAVECO will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting application via Nodemailer:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us on WhatsApp." },
      { status: 500 }
    );
  }
}
