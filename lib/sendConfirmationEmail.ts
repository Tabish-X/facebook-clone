// import decryptAuthToken from "@/helpers/decryptAuthToken";
// import connectToDatabase from "./db";
// import sendEmail from "@/helpers/sendEmail";
// import bcrypt from "bcryptjs";
// import userModel from "@/models/userModel";
// import generateOTP from "@/helpers/generateOTP";
// import { cookies } from "next/headers";

// export default async function sendConfirmationEmail(): Promise<any> {
//   "use server"
//   const { error, user } = decryptAuthToken();
//   const cookieStore = cookies();
//   let limit = cookieStore.get("limit");
//   if (limit) {
//     return { error: "Limit exceeded" };
//   }
//   if (error || !user) {
//     return { error };
//   }

//   const otp = generateOTP(5);

//   const emailPageLayout = {
//     subject: "Email Verification",
//     body: `
//     <div
//       class="container"
//       style="max-width: 90%; margin: auto; padding-top: 20px"
//     >
//       <h2>Welcome to the club.</h2>
//       <h4>You are officially In ✔</h4>
//       <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
//       <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${otp}</h1>
//  </div>
//   `,
//   };

//   try {
//     await connectToDatabase();
//     const sendMailRes = await sendEmail(
//       user.contactInfo.contact,
//       emailPageLayout
//     );
//     if (!sendMailRes) {
//       return {
//         error: "Something went wrong while sending email",
//       };
//     }

//     const token = await bcrypt.hash(otp.toString(), 9);
//     const tokenExpiry = new Date().getTime() + 720000; // 2 hours

//     const updateUser = await userModel.findByIdAndUpdate(
//       user.id,
//       {
//         token,
//         tokenExpiry,
//       },
//       {
//         new: true,
//       }
//     );

//     cookieStore.set("limit", "???");
//     return { error: null, success: true, updateUser };
//   } catch (error) {
//     console.error(error);
//     throw new Error("Something went wrong");
//   }
// }
import axios from "axios";
import toast from "react-hot-toast";

export default async function sendConfirmationEmail() {
  try {
    const res = await axios.get("/api/auth/sendemail");
    return res;
  } catch (error: any) {
    console.error("Error: ", error.message);
    toast.error(error?.response?.data.messsage);
  }
}
