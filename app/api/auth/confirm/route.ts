import decryptAuthToken from "@/helpers/decryptAuthToken";
import connectToDatabase from "@/lib/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  const { otp } = await req.json();
  const { user } = decryptAuthToken();
  if (!user) {
    return NextResponse.json(
      { message: "Session expired or invalid path" },
      { status: 403 }
    );
  }

  try {
    await connectToDatabase();
    const authUser = await userModel.findById(user.id);
    const validateOtp = await bcrypt.compare(otp, authUser.token);
    if (!validateOtp) {
      return NextResponse.json(
        { message: "Invalid verification code" },
        { status: 400 }
      );
    }

    const checkExpiry = Date.now() < authUser.tokenExpiry;
    if (!checkExpiry) {
      return NextResponse.json({
        message: "Verification code expired. Please try again.",
      });
    }

    const confirmUser = await userModel.findOneAndUpdate(
      {
        _id: user.id,
        contactInfo: { $elemMatch: { contact: user.contactInfo.contact } },
      },
      {
        confirm: true,
        token: "",
        tokenExpiry: "",
        $set: { "contactInfo.$.verified": true },
      },
      {
        new: true,
      }
    );

    const res = NextResponse.json({
      message: "User has been confirmed successfully",
      confirmUser,
    });
    const tokenData = {
      ...user,
      confirm: true,
    };
    const token = jwt.sign(
      { user: tokenData },
      process.env.JWT_SECRET as string
    );
    res.cookies.set("auth", token);

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
