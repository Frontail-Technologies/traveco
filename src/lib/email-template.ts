export interface ApplicationEmailData {
  fullName: string;
  mobile: string;
  email: string;
  serviceType: string;
  destinationCountry?: string;
  nationality?: string;
  currentCountry?: string;
  expectedTravelDate?: string;
  message?: string;
  pageUrl?: string;
  submittedAt?: string;
}

export function generateApplicationEmailHtml(data: ApplicationEmailData): string {
  const {
    fullName,
    mobile,
    email,
    serviceType,
    destinationCountry = "Not specified",
    nationality = "Not specified",
    currentCountry = "Not specified",
    expectedTravelDate = "Not specified",
    message = "No additional message provided",
    pageUrl = "TRAVECO Website",
    submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  } = data;

  const cleanPhone = mobile.replace(/[^0-9+]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone.replace("+", "")}`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New TRAVECO Application Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #1e293b;
      background-color: #f8fafc;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 620px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
      border: 1px solid #e2e8f0;
    }
    .header {
      background: linear-gradient(135deg, #cca459 0%, #b6914c 100%);
      color: #ffffff;
      padding: 28px 32px;
      text-align: left;
    }
    .header-badge {
      display: inline-block;
      background-color: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 4px 10px;
      border-radius: 20px;
      margin-bottom: 8px;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.3px;
    }
    .content {
      padding: 32px;
    }
    .section-title {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      color: #94a3b8;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 16px;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 8px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
    .field {
      margin-bottom: 16px;
    }
    .label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #64748b;
      font-weight: 600;
      margin-bottom: 3px;
    }
    .value {
      font-size: 15px;
      color: #0f172a;
      font-weight: 600;
    }
    .value a {
      color: #b6914c;
      text-decoration: none;
    }
    .badge-service {
      display: inline-block;
      background: #fdf8ed;
      color: #b6914c;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 700;
      border: 1px solid #fae8c6;
    }
    .message-box {
      background-color: #f8fafc;
      border-left: 4px solid #b6914c;
      padding: 14px 16px;
      margin-top: 6px;
      border-radius: 0 8px 8px 0;
      white-space: pre-wrap;
      font-size: 14px;
      color: #334155;
      line-height: 1.6;
    }
    .quick-actions {
      margin-top: 28px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      gap: 12px;
    }
    .btn {
      display: inline-block;
      padding: 10px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      text-align: center;
    }
    .btn-primary {
      background-color: #b6914c;
      color: #ffffff !important;
    }
    .btn-whatsapp {
      background-color: #25D366;
      color: #ffffff !important;
    }
    .footer {
      background-color: #f8fafc;
      padding: 20px 32px;
      text-align: center;
      font-size: 12px;
      color: #94a3b8;
      border-top: 1px solid #f1f5f9;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="header-badge">New Website Enquiry</div>
      <h1>Application Request: ${serviceType}</h1>
    </div>
    
    <div class="content">
      <div class="section-title">Applicant Information</div>
      
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">
        <tr>
          <td width="50%" style="padding-bottom: 14px; vertical-align: top;">
            <div class="label">Full Name</div>
            <div class="value">${fullName}</div>
          </td>
          <td width="50%" style="padding-bottom: 14px; vertical-align: top;">
            <div class="label">Service Type</div>
            <div class="value"><span class="badge-service">${serviceType}</span></div>
          </td>
        </tr>
        <tr>
          <td width="50%" style="padding-bottom: 14px; vertical-align: top;">
            <div class="label">Mobile / WhatsApp</div>
            <div class="value"><a href="tel:${cleanPhone}">${mobile}</a></div>
          </td>
          <td width="50%" style="padding-bottom: 14px; vertical-align: top;">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </td>
        </tr>
        <tr>
          <td width="50%" style="padding-bottom: 14px; vertical-align: top;">
            <div class="label">Destination Country</div>
            <div class="value">${destinationCountry}</div>
          </td>
          <td width="50%" style="padding-bottom: 14px; vertical-align: top;">
            <div class="label">Expected Travel Date</div>
            <div class="value">${expectedTravelDate}</div>
          </td>
        </tr>
        <tr>
          <td width="50%" style="padding-bottom: 14px; vertical-align: top;">
            <div class="label">Nationality</div>
            <div class="value">${nationality}</div>
          </td>
          <td width="50%" style="padding-bottom: 14px; vertical-align: top;">
            <div class="label">Current Country / City</div>
            <div class="value">${currentCountry}</div>
          </td>
        </tr>
      </table>

      <div class="section-title">Message / Requirements</div>
      <div class="message-box">${message}</div>

      <div class="section-title" style="margin-top: 24px;">Submission Details</div>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="50%" style="vertical-align: top;">
            <div class="label">Submitted At</div>
            <div class="value" style="font-size: 13px; font-weight: normal; color: #64748b;">${submittedAt}</div>
          </td>
          <td width="50%" style="vertical-align: top;">
            <div class="label">Source Page</div>
            <div class="value" style="font-size: 13px; font-weight: normal; color: #64748b;">${pageUrl}</div>
          </td>
        </tr>
      </table>

      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
        <a href="mailto:${email}" class="btn btn-primary" style="margin-right: 8px; display: inline-block;">Reply to Applicant</a>
        <a href="${whatsappUrl}" class="btn btn-whatsapp" style="display: inline-block;">Chat on WhatsApp</a>
      </div>
    </div>
    
    <div class="footer">
      This application lead was securely captured by TRAVECO Mobility (traveco.in).
    </div>
  </div>
</body>
</html>
  `;
}

export function generateApplicationEmailPlainText(data: ApplicationEmailData): string {
  const {
    fullName,
    mobile,
    email,
    serviceType,
    destinationCountry = "Not specified",
    nationality = "Not specified",
    currentCountry = "Not specified",
    expectedTravelDate = "Not specified",
    message = "No additional message provided",
    pageUrl = "TRAVECO Website",
    submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  } = data;

  return `
NEW TRAVECO APPLICATION REQUEST
=========================================

Service Type:       ${serviceType}
Full Name:          ${fullName}
Mobile / WhatsApp:  ${mobile}
Email:              ${email}
Destination:        ${destinationCountry}
Nationality:        ${nationality}
Current Location:   ${currentCountry}
Expected Travel:    ${expectedTravelDate}

MESSAGE / REQUIREMENTS:
-----------------------------------------
${message}

SUBMISSION DETAILS:
-----------------------------------------
Source Page:  ${pageUrl}
Timestamp:    ${submittedAt}

QUICK ACTIONS:
- Reply Email: mailto:${email}
- Call/WhatsApp: tel:${mobile.replace(/[^0-9+]/g, "")}
`;
}

// Backward compatibility helper
export function contactEmailTemplate({
  name,
  email,
  phone,
  serviceType,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}) {
  return generateApplicationEmailHtml({
    fullName: name,
    email,
    mobile: phone,
    serviceType,
    message,
  });
}
