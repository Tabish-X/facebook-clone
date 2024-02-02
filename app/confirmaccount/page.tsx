import "@/styles/module.confirm.css";
import ConfirmUserForm from "@/components/confirm-user/ConfirmUserForm";
import decryptAuthToken from "@/helpers/decryptAuthToken";
import { redirect } from "next/navigation";

export default async function page() {
  const { error, user } = decryptAuthToken();
  // Example: Format a phone number and get country information
  if (!user) {
    return redirect("/");
  }
  const {
    contactInfo: { contact, contactType },
  } = user;
  
  return (
    <main className="h-full w-full flex items-center justify-center ">
      <div className="pt-24">
        <ConfirmUserForm contact={contact} type={contactType} />
      </div>
    </main>
  );
}
