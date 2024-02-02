import { NextRequest, NextResponse } from "next/server";
import decryptAuthToken from "./helpers/decryptAuthToken";
import { User } from "./types/userTypes";

export default function middleware(req: NextRequest) {
  // const url = req.nextUrl.pathname;
  // const token = req.cookies.toke
  // const user:any = getAuthUser()

  // if (url === "/" || url === "/friends") {
  //   if (user) {
  //     if (user.confirm && user.contactInfo[0].verified) {
  //       return;
  //     } else {
  //       return NextResponse.redirect(new URL("/confirmaccount", req.url));
  //     }
  //   } else {
  //     if (!user) return NextResponse.redirect(new URL("/login", req.url));
  //   }
  // }
}
