import sendEmail from "@/helpers/sendEmail";
import connectToDatabase from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import userModel from "@/models/userModel";
import decryptAuthToken from "@/helpers/decryptAuthToken";
import generateOTP from "@/helpers/generateOTP";

export async function GET(req: NextRequest) {
  const { error, user } = decryptAuthToken();
  if (error || !user) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  const otp = generateOTP(5);

  const emailPageLayout = {
    subject: "Email Verification",
    body: ` 
    <div
      class="container"
      style="max-width: 90%; margin: auto; padding-top: 20px"
    >
      <h2>Welcome to the club.</h2>
      <h4>You are officially In ✔</h4>
      <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
      <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${otp}</h1>
 </div>
  `,
  };

  try {
    await connectToDatabase();
    const sendMailRes = await sendEmail(
      user.contactInfo.contact,
      emailPageLayout
    );
    if (!sendMailRes) {
      return NextResponse.json({
        message: "Something went wrong while sending email",
      });
    }

    const token = await bcrypt.hash(otp.toString(), 9);
    const tokenExpiry = new Date().getTime() + 7200000; // 2 hours

    const updateUser = await userModel.findByIdAndUpdate(
      user.id,
      {
        token,
        tokenExpiry,
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      message: `Successfully send email to ${user.contactInfo.contact}`,
      user: updateUser,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
