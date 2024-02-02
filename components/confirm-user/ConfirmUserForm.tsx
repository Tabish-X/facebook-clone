"use client";

import { FormEvent, useEffect, useState } from "react";
import SendAgainEmail from "./SendAgainEmail";
import TextInput from "./TextInput";
import UpdateContactInfo from "./UpdateContactInfo";
import axios from "axios";
import sendConfirmationEmail from "@/lib/sendConfirmationEmail";
import { FormButton } from "../Buttons";

export default function ConfirmUserForm({
  contact,
  type,
}: {
  contact: string;
  type: string;
}) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let buttonDisability = value.length < 5;

  const handleConfirmation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!value) {
      setError(`Please provide the confirmation code sent to your ${type}`);
    }

    try {
      await axios.post("/api/auth/confirm", { otp: value });
      setValue("");
      setError("");
      localStorage.removeItem("limit")
    } catch (error: any) {
      setError(error?.response?.data.message);
      console.error("Some Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const limit = localStorage.getItem("limit");
    if (!limit) {
      (async () => {
        const sendEmail = await sendConfirmationEmail();
        console.log(sendEmail);
        localStorage.setItem("limit", "/[???]..");
      })();
    }
  }, []);

  return (
    <form
      className=" rounded-md shadow-md bg-white w-[500px] overflow-hidden"
      onSubmit={handleConfirmation}
    >
      <div className="p-4">
        {type === "email" ? (
          <h2 className="font-bold text-xl ">Enter the code from your email</h2>
        ) : (
          <h2 className="font-bold text-xl ">
            Enter the code from the text message
          </h2>
        )}
      </div>

      <div className="p-4 border-t">
        {type === "email" ? (
          <p className="text-sm_sm text-gray-30 leading-[19px]">
            Let us know that this email address belongs to you. Enter the code
            from the email sent to <strong>{contact}</strong>
          </p>
        ) : (
          <p className="text-sm_sm text-gray-30 leading-[19px]">
            Let us know if this mobile number belongs to you. Enter the code in
            the SMS sent to <strong>{contact}</strong>
          </p>
        )}

        {/* Error div */}
        {error && (
          <p className="p-2 mt-2 bg-red-200 border border-red-500 rounded-md text-xs text-red-800">
            {error}
          </p>
        )}

        <TextInput value={value} setValue={setValue} />

        {type === "email" && <SendAgainEmail email={contact} />}
      </div>

      <div className="px-4 py-3 text-right space-x-2 --shadow-3">
        <UpdateContactInfo />
        <FormButton loading={loading} disability={buttonDisability}>
          Continue
        </FormButton>
      </div>
    </form>
  );
}
