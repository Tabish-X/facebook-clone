import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { AuthUser } from "@/types/userTypes";

export default function (): { error: string | null; user: AuthUser | null } {
  const token = cookies().get("auth");
  if (!token) {
    return { error: "Token not found or expired", user: null };
  }
  const tokenValue = token.value;

  //@ts-ignore
  return jwt.verify(
    tokenValue,
    process.env.JWT_SECRET as string,
    (err, data: any) => {
      if (err) {
        return { error: "Invalid token", user: null };
      }

      return { error: null, user: data?.user };
    }
  );
}
