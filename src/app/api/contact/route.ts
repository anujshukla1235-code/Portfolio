import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, token } = body;

    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify Turnstile Token
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { error: "Invalid captcha token" },
        { status: 403 }
      );
    }

    // TODO: Use Resend to send the actual email here.
    // For now, we mock the successful response.
    
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
