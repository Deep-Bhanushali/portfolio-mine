import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { user_name, user_email, subject, message } = await req.json();

    // Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to YOU (the portfolio owner)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      replyTo: user_email,
      subject: `New Portfolio Inquiry: ${subject}`,
      text: `
        You have a new message from your portfolio contact form.
        
        Name: ${user_name}
        Email: ${user_email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #3B82F6;">🚀 New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${user_name}</p>
          <p><strong>Email:</strong> ${user_email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9fafb; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    };

    // 2. Confirmation Email to the SENDER
    const senderMailOptions = {
      from: process.env.EMAIL_USER,
      to: user_email,
      subject: `Thanks for reaching out, ${user_name}!`,
      text: `
        Hi ${user_name},
        
        Thank you for contacting me through my portfolio. I have received your message regarding "${subject}" and I will get back to you as soon as possible.
        
        Best regards,
        Deep Bhanushali
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; color: #333;">
          <h2 style="color: #3B82F6;">Hello ${user_name},</h2>
          <p>Thanks for reaching out! I've received your message regarding <strong>"${subject}"</strong>.</p>
          <p>I usually respond within 24-48 hours. Looking forward to connecting with you!</p>
          <br />
          <p>Best regards,</p>
          <p><strong>Deep Bhanushali</strong><br />MERN Stack Developer & AI/ML Enthusiast</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">This is an automated confirmation. Please do not reply directly to this email.</p>
        </div>
      `,
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(senderMailOptions),
    ]);

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
