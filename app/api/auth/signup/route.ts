import connectToDatabase from "@/lib/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { AuthUser } from "@/types/userTypes";
import { revalidatePath } from "next/cache";

// Creating an api end point for user signup...
// href= http://localhost:3000/api/auth/signup
// method= post
export async function POST(req: NextRequest) {
  // getting form data...
  const user = await req.json();

  const {
    firstName,
    lastName,
    fullName,
    contactInfo,
    credential,
    password,
    birthday,
    gender,
    pronoun,
  } = user;

  if (
    !firstName ||
    !lastName ||
    !fullName ||
    !contactInfo ||
    !credential ||
    !password ||
    !birthday ||
    !gender ||
    !pronoun
  ) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  } // checking if there are empty fields...

  try {
    // mongodb connection...
    await connectToDatabase();

    // checking if user email has already been registered...
    const isEmailExists = await userModel.findOne({
      contactInfo: {
        $elemMatch: {
          contact: contactInfo.contact,
        },
      },
    });

    if (isEmailExists) {
      return NextResponse.json(
        {
          message:
            "Entered email address or phone number is already registered",
        },
        { status: 403 }
      );
    }

    // finally creating user..
    const createUser = await userModel.create(user);
    const cookieUser: AuthUser = {
      confirm: createUser.confirm,
      id: createUser._id,
      username: createUser.username,
      contactInfo,
    };

    // Creating a token
    const token = jwt.sign(
      { user: cookieUser },
      process.env.JWT_SECRET as string
    );

    // Defining a response
    const response = NextResponse.json(
      { user: createUser, message: "Signed up successfully", token },
      { status: 201 }
    );

    
    // Setting the token as cookie named auth
    response.cookies.delete("auth")
    response.cookies.set("auth", token);
    revalidatePath("/confirmaccount")
    return response;
  } catch (error) {
    // catching if there are any server errors...
    console.error(error);
    return NextResponse.json(
      { error, message: "Internal Server" },
      { status: 500 }
    );
  }
}
