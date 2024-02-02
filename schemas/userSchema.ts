import constants from "@/lib/constants";
import { z } from "zod";

const userSchema = z
  .object({
    firstName: z
      .string()
      .min(3, "What's your first name")
      .max(20, "Name must be less than 52 characters"),
    lastName: z
      .string()
      .min(3, "What's your last name")
      .max(20, "Name must be less than 52 characters"),
    credential: z
      .string()
      .min(
        1,
        "Please enter a valid email address or phone number. You'll use this when you log in and if you ever need to reset your password."
      ),
    password: z
      .string()
      .regex(
        constants.passwordRe,
        "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."
      ),
    day: z.string(),
    month: z.string().min(3),
    year: z.string().refine((value) => Number(value) <= 2015, "error!"),
    gender: z.string({
      invalid_type_error:
        "Please choose a gender. You can change who can see this later.",
    }),
    pronoun: z
      .string()
      .optional()
      .refine((value) => value !== "1", {
        message: "Please select your pronoun",
      }),
  })
  .refine((data) => data.pronoun !== "1", {
    message: "Please select your pronoun",
  });

export type RawUser = z.infer<typeof userSchema>;
export default userSchema;
