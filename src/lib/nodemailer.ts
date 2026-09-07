import nodemailer from "nodemailer";

export function getTransporter() {
  const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || "";
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || "";

  // Conceptual Gmail service transport
  if (process.env.GMAIL_USER || !process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });
  }

  // Fallback to custom SMTP host if explicitly defined
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });
}

export const transporter = getTransporter();

export const emailConfig = {
  from: `"TRAVECO Mobility Website" <${process.env.GMAIL_USER || process.env.SMTP_USER || "info@traveco.in"}>`,
  to: process.env.TRAVECO_RECEIVER_EMAIL || process.env.CONTACT_EMAIL || "info@traveco.in",
  cc: process.env.TRAVECO_CC_EMAIL || "travecomobility@gmail.com",
};

export const mailOptions = {
  from: emailConfig.from,
  to: emailConfig.to,
  cc: emailConfig.cc,
};
