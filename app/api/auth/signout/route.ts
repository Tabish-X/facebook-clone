import decryptAuthToken from "@/helpers/decryptAuthToken";
import connectToDatabase from "@/lib/db";
import userModel from "@/models/userModel";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const { user, error } = decryptAuthToken();
  if (error || !user) {
    return NextResponse.json({ message: error });
  }
  try {
    await connectToDatabase();
    const userExists = await userModel.findById(user.id);
    if (!userExists) {
      return NextResponse.json({ message: "User not found" }, { status: 402 });
    }

    cookieStore.delete("auth");
    return NextResponse.json({ message: "Successfully log out user" });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
