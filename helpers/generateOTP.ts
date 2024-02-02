export default function generateOTP(length: number) {
  // Ensure length is a positive integer
  if (isNaN(length) || length <= 0) {
    throw new Error("length must be a positive integer");
  }

  // Calculate the minimum and maximum values for the specified number of length
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  // Generate a random number within the specified range
  const otp = Math.floor(Math.random() * (max - min + 1)) + min;

  // Return the OTP as a string
  return otp.toString();
}

console.log(generateOTP(7));
