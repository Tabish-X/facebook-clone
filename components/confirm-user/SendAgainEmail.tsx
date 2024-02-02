"use client";

import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import LoadingSpinner from "../LoadingSpinner";
import sendConfirmationEmail from "@/lib/sendConfirmationEmail";

export default function SendAgainEmail({ email }: { email: string }) {
  const [comp, setComp] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    setComp(true);
    try {
      await sendConfirmationEmail();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="text-_theme_secondary_blue text-sm_sm hover:underline mb-2"
        onClick={sendEmail}
      >
        Send Email Again
      </button>

      {comp && loading ? (
        <Loading />
      ) : (
        comp && (
          <div className="fixed top-0 left-0 w-full h-full p-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff] opacity-70 z-[-1]" />
            <div className="w-full h-full flex items-center justify-center ">
              <div className="bg-white shadow w-[384px] md:w-[533px] h-fit flex flex-col justify-center rounded-md">
                <div className="p-4 w-full h-full flex items-center justify-between">
                  <span className="text-black text-lg md:text-xl font-semibold">
                    Email sent
                  </span>
                  <button
                    title="Close"
                    className="h-7 w-7 md:h-9 md:w-9 rounded-full flex items-center justify-center text-xl md:text-2xl text-gray-30 bg-gray-20"
                    onClick={() => setComp(false)}
                  >
                    <FaXmark />
                  </button>
                </div>

                <div className="px-4 pt-4 w-full h-full">
                  <p className="leading-tight text-gray-30 text-[17px] ">
                    To confirm your email address, click on the Confirm your
                    Account button in the email that we've just sent to{" "}
                    <strong>{email}</strong>. Make sure that you check your spam
                    folder.
                  </p>
                </div>

                <div className="px-4 py-3 text-right ">
                  <button
                    onClick={() => setComp(false)}
                    className="h-9 px-8 text-sm_sm font-semibold bg-_theme_primary_blue text-white rounded-md ml-4 "
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full p-0 h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff] opacity-70 z-[-1]" />
      <div className="w-full h-full flex items-center justify-center ">
        <div className="bg-white text-gray-30 shadow w-[384px] md:w-[533px] h-56 flex items-center justify-center rounded-md">
          <LoadingSpinner height="30px" width="30px" borderSize="3px" />
        </div>
      </div>
    </div>
  );
}
