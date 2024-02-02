import { parsePhoneNumberFromString } from "libphonenumber-js";

function normalizePhoneNumber(phoneNumber: string) {
  // Remove non-digit characters from the phone number
  return phoneNumber.replace(/\D/g, "");
}

export default function formatPhoneNumber(phoneNumber: string) {
  // Normalize the phone number
  const normalizedNumber = normalizePhoneNumber(phoneNumber);

  // Parse the normalized phone number
  const parsedNumber = parsePhoneNumberFromString(normalizedNumber);

  if (parsedNumber) {
    // Get country information
    const country = parsedNumber.country;

    return { formattedNumber: parsedNumber, country };
  } else {
    return { formattedNumber: null, country: null }; // Invalid or unparseable phone number
  }
}
