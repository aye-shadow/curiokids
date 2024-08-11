import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';

async function sendEmailWithRetries(transporter: nodemailer.Transporter, mailOptions: nodemailer.SendMailOptions, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await transporter.sendMail(mailOptions);
      return; // Email sent successfully
    } catch (error) {
      console.error(`Attempt ${attempt} - Error sending email:`, error);
      if (attempt === retries) {
        throw error; // If it's the last attempt, throw the error
      }
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, feedbackType, title, steps, priority } = body;

    const reportId = uuidv4();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_PASS!,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Compose email
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.GMAIL_USER!,
      to: process.env.ADMIN_EMAIL!,
      subject: `New Feedback Report: ${title}`,
      html: `
        <h1>New Feedback Report Received</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Feedback Type:</strong> ${feedbackType}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Steps to Reproduce:</strong> ${steps}</p>
        <p><strong>Priority Level:</strong> ${priority}</p>
        <p><strong>Report ID:</strong> ${reportId}</p>
      `,
    };

    // Send email
    await sendEmailWithRetries(transporter, mailOptions);

    return NextResponse.json({ message: 'Feedback report submitted and email sent successfully' });
  } catch (error) {
    console.error('Error submitting feedback or sending email:', error);
    return NextResponse.json({ error: 'Error submitting feedback or sending email' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'This endpoint only supports POST requests' });
}


