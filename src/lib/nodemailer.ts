import nodemailer from "nodemailer";

export function getTransporter() {
  const gmailUser = (process.env.GMAIL_USER || process.env.SMTP_USER || "").trim();
  // Strip any accidental spaces from Google 16-character app passwords
  const rawPass = (process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || "").trim();
  const gmailPass = rawPass.replace(/\s+/g, "");

  // Standard Gmail Service Transport
  if (process.env.GMAIL_USER || !process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });
  }

  // Custom SMTP Transport fallback
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: gmailUser,
      pass: rawPass,
    },
  });
}

export const transporter = getTransporter();

export function getEmailConfig() {
  const user = (process.env.GMAIL_USER || process.env.SMTP_USER || "info@traveco.in").trim();
  const receiver = (process.env.TRAVECO_RECEIVER_EMAIL || process.env.CONTACT_EMAIL || "info@traveco.in").trim();
  const cc = (process.env.TRAVECO_CC_EMAIL || "travecomobility@gmail.com").trim();

  return {
    from: `"TRAVECO Mobility Website" <${user}>`,
    to: receiver,
    cc: cc || undefined,
  };
}

export const emailConfig = getEmailConfig();

export const mailOptions = {
  from: emailConfig.from,
  to: emailConfig.to,
  cc: emailConfig.cc,
};
