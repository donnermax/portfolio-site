// export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("📩 API Route Hit: Received Request");

  try {
    // Parse and log request body
    const body = await req.json();
    console.log("📨 Received form data:", body);

    // Log environment variable statuses
    console.log("Environment Variables:", {
      GMAIL_USER: process.env.GMAIL_USER,
      GMAIL_PASSWORD_EXISTS: !!process.env.GMAIL_PASSWORD,
    });

    // Create the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    console.log("🚀 Nodemailer transporter created");

    // Verify the transporter using promise syntax for better error handling
    console.log("🔍 Verifying transporter...");
    try {
      await transporter.verify();
      console.log("✅ Nodemailer verification succeeded");
    } catch (verifyError) {
      console.error("❌ Nodemailer verification failed:", verifyError);
      throw verifyError; // Stop execution if verification fails
    }

    // Prepare mail options
    const mailOptions = {
      from: `"Maximilian Rodwell" <${process.env.GMAIL_USER}>`,
      to: "donnermax@outlook.com",
      subject: body.subject,
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    };
    console.log("📧 Mail options prepared:", mailOptions);

    // Send the email
    console.log("🚀 Sending email...");
    const emailResponse = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ API Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
