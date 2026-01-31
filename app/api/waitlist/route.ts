import { NextRequest, NextResponse } from "next/server";

interface WaitlistEntry {
  name: string;
  email: string;
  interestedKits: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, interestedKits } = body as WaitlistEntry;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!interestedKits || interestedKits.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one kit" },
        { status: 400 }
      );
    }

    // In production, you would save this to a database (e.g. Supabase, Firebase, etc.)
    // For now, log to server console
    console.log("New waitlist signup:", {
      name,
      email,
      interestedKits,
      signedUpAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
    });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
