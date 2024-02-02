import { monthAbbreviations } from "@/helpers/data";
import { RawUser } from "@/schemas/userSchema";
import { User } from "@/types/userTypes";
import validateContact from "@/validations/validateContact";
import axios from "axios";

export default async function formatUser(
  user: RawUser
): Promise<{ error: string | null; user: User | null }> {
  const { success, type } = validateContact(user.credential);
  if (!success || !type) {
    return {
      user: null,
      error:
        "Please enter a valid email address or phone number. You'll use this when you log in and if you ever need to reset your password.",
    };
  }

  let birthdayString = `${user.day}/${user.month}/${user.year}`;

  const userObj: User = {
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: `${user.firstName} ${user.lastName}`,
    contactInfo: {
      contact: user.credential,
      contactType: type,
      verified: false,
    },
    credential: user.credential,
    password: user.password,
    birthday: formatBirthday(birthdayString),
    gender: user.gender,
    pronoun:
      user.gender === "male"
        ? "He/Him"
        : user.gender === "female"
        ? "She/Her"
        : user.pronoun,
    // redirectUrl: `confirm?$${type}=${user.credential}`,
  };

  try {
    let url = `/api/search?${type}=${user.credential}`;
    const checkDuplicate = await axios.get(url);
    if (checkDuplicate.data.user) {
      console.log(checkDuplicate);

      return {
        user: null,
        error: `Entered ${type} is already registered to a different account`,
      };
    }
    return { user: userObj, error: null };
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong")
  }
}
export function formatBirthday(dateString: string): Date {
  // Split the input string into day, month, and year
  let dateParts = dateString.split("/");
  let day = parseInt(dateParts[0], 10);
  let monthString = dateParts[1];
  let year = parseInt(dateParts[2], 10);

  // Map month abbreviations to numeric values

  let month = monthAbbreviations.indexOf(monthString);

  // Create a new Date object using the extracted components
  let formattedDate = new Date(year, month, day);

  // Use toLocaleDateString to get the formatted date string
  // let result = formattedDate.toLocaleDateString();
  return formattedDate;
}
