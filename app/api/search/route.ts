import connectToDatabase from "@/lib/db";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let email = searchParams.get("email");
  let phone = searchParams.get("phone");

  if (!email && !phone) {
    return NextResponse.json({ message: "Any one field is required"}, {
      status: 400
    });
  }

  try {
    await connectToDatabase();
    const user = await userModel.findOne({
      contactInfo: { $elemMatch: { contact: email ? email : phone } },
    });

    if (user) {
      return NextResponse.json({ user, message: "User found successfully" });
    }

    return NextResponse.json({ user: null });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error, message: "Something went wrong." });
  }
}
