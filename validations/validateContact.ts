import constants from "@/lib/constants";

export default function (contact: string): {
  success: boolean;
  type: string | undefined;
} {
  let emailRe = constants.emailRe;

  let phoneRe = constants.phoneRe;
  const email = emailRe.test(contact);
  const phone = phoneRe.test(contact);
  let type: string | undefined = email ? "email" : phone ? "phone" : undefined;

  if (!email && !phone) {
    return { success: false, type };
  }

  return { success: true, type };
}
