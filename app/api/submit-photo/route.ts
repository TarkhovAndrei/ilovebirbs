import { NextRequest, NextResponse } from "next/server";

interface PhotoSubmission {
  name: string;
  email: string;
  birdType: string;
  location: string;
  caption: string;
  photoUrl: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, birdType, caption, photoUrl, location } =
      body as PhotoSubmission;

    // Validate required fields
    if (!name || !email || !birdType || !caption || !photoUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(photoUrl);
    } catch {
      return NextResponse.json(
        { error: "Invalid photo URL" },
        { status: 400 }
      );
    }

    // In a production app, you would:
    // 1. Save to a database (pending review queue)
    // 2. Send notification email to admin
    // 3. Send confirmation email to user
    //
    // For this demo, we'll just log and return success
    console.log("New photo submission:", {
      name,
      email,
      birdType,
      location,
      caption,
      photoUrl,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Photo submitted successfully! It will be reviewed and added to the gallery.",
    });
  } catch (error) {
    console.error("Photo submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit photo" },
      { status: 500 }
    );
  }
}
