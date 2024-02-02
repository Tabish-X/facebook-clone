"use client";

import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function UpdateContactInfo() {
  const [updateComp, setUpdateComp] = useState(false);
  const [contact, setContact] = useState("");
  const [error, setError] = useState("")

  return (
    <>
      <button
        type="button"
        className="bg-gray-200 text-sm_sm text-black rounded-md h-9 px-3 font-500 transition-colors hover:bg-gray-300"
        onClick={() => setUpdateComp(true)}
      >
        Update Contact Info
      </button>

      {updateComp && (
        <div className="fixed top-0 left-0 w-full h-full p-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff] opacity-70 z-[-1]" />
          <div className="w-full h-full flex items-center justify-center ">
            <div className="bg-white shadow w-[384px] md:w-[533px] h-fit flex flex-col justify-center rounded-md">
              <div className="p-4 w-full h-full flex items-center justify-between">
                <span className="text-black text-lg md:text-xl font-semibold">
                  Add email address or mobile number
                </span>
                <button
                  title="Close"
                  className="h-7 w-7 md:h-9 md:w-9 rounded-full flex items-center justify-center text-xl md:text-2xl text-gray-30 bg-gray-20"
                  onClick={() => setUpdateComp(false)}
                >
                  <FaXmark />
                </button>
              </div>

              <div className="px-4 pt-4 pb-1 w-full h-full">
                <div className="w-full h-full relative z-[1]">
                  <input
                    type="text"
                    id="change-contact-info-input"
                    className="shadow-input px-4 pt-[26px] pb-[10px] w-full h-full outline-none bg-transparent rounded-md border focus:border-blue-600 transition-shadow duration-75"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />

                  <label
                    htmlFor="change-contact-info-input"
                    id="change-contact-info-label"
                    className="absolute top-[19px] left-[17px] -z-[1] select-none transition-all duration-150 text-gray-30"
                  >
                    New email address or mobile number
                  </label>
                  <p className="w-full text-left text-xs text-red-500 pl-1 mt-1">{error}</p>
                </div>
              </div>

              <div className="px-4 py-3 text-right ">
                <button className="text-sm_sm font-semibold text-_theme_primary_blue"
                title="cancel"
                onClick={() => setUpdateComp(false)}
                >
                  Cancel
                </button>
                <button className="h-9 px-8 text-sm_sm font-semibold bg-_theme_primary_blue text-white rounded-md ml-4 ">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
