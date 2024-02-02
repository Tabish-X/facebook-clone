import userModel from "@/models/userModel";
import { AuthUser, ContactInfo } from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import connectToDatabase from "@/lib/db";

export async function POST(req: NextRequest) {
  const { contact, password } = await req.json();
  const cookieStore = cookies();
  const url = req.nextUrl.clone();
  url.pathname = "/confirmaccount";

  if (!contact || !password) {
    return NextResponse.json({ message: "Email/Phone and password to log in" });
  }

  try {
    await connectToDatabase()
    const userExists = await userModel.findOne({
      contactInfo: { $elemMatch: { contact } },
    });

    if (!userExists) {
      return NextResponse.json(
        { message: "Invalid credential" },
        { status: 400 }
      );
    }

    const passwordMathced = await userExists.MatchPassword(password);
    if (!passwordMathced) {
      return NextResponse.json(
        { message: "Invalid Credential" },
        { status: 400 }
      );
    }

    const contactInfo = userExists.contactInfo.map((data: any) => {
      if (contact === data.contact) {
        return data;
      }
    });

    const user: AuthUser = {
      id: userExists._id,
      confirm: userExists.confirm,
      contactInfo: contactInfo[0],
    };
    const token = jwt.sign({ user }, process.env.JWT_SECRET as string);
    cookieStore.set("auth", token);

    return NextResponse.json(
      { message: "User has been sign in successfully", user: userExists },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
