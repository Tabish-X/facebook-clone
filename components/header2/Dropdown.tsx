"use client";

import Link from "next/link";
import demoUser from "@/assets/demoUser.jpg";
import Image from "next/image";
import {
  FaChevronRight,
  FaCircleQuestion,
  FaDoorOpen,
  FaGear,
  FaMessage,
  FaMoon,
} from "react-icons/fa6";
import logout from "@/lib/logout";

export default function Dropdown({
  confirmEmailPath,
}: {
  confirmEmailPath: boolean;
}) {
  if (confirmEmailPath) {
    return (
      <div
        id="auth_user_dropdown"
        className="absolute top-8 right-4 w-28 p-2 text-center font-500 block bg-white z-30 border rounded-md pt-3 shadow-md scale-0 transition-transform duration-75 origin-top-right"
      >
        <button onClick={logout}>Sign out</button>
      </div>
    );
  }

  const placeholder = {
    user: {
      profileImage: demoUser,
      name: "Tabis H",
    },
  };

  return (
    <div
      id="auth_user_dropdown"
      className="absolute top-11 right-4 block bg-white z-50 border rounded-md pt-3 shadow-md scale-0 transition-transform duration-75 origin-top-right"
    >
      {/* Mail profile */}
      <div className="w-[328px] mx-4 --shadow-2 rounded-md p-1 ">
        <Link href="/code.tabish" className="">
          <div className="w-full rounded-md py-3 px-2 transition-all hover:bg-gray-20 flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden block">
              <Image
                width={30}
                height={30}
                alt={placeholder.user.name}
                src={placeholder.user.profileImage}
                className="w-full h-full"
              />
            </div>

            <strong className="font-500">{placeholder.user.name}</strong>
          </div>
        </Link>
        <div className="w-full px-3">
          <div className="w-full border-b border-gray-10"></div>
        </div>
      </div>

      {/* Options */}
      <div className="py-4 px-3 mt-2">
        <div className="flex items-center justify-between transition-colors duration-75 hover:bg-gray-20 p-2 rounded-md cursor-pointer">
          <div className="w-full flex items-center gap-2 ">
            <span className="h-9 w-9 rounded-full bg-gray-10 flex items-center justify-center text-xl">
              <FaGear />
            </span>

            <span className="text-sm font-500">Settings & privacy</span>
          </div>

          <span className="text-2xl text-gray-500">
            <FaChevronRight />
          </span>
        </div>
        <div className="flex items-center justify-between transition-colors duration-75 hover:bg-gray-20 p-2 rounded-md cursor-pointer">
          <div className="w-full flex items-center gap-2 ">
            <span className="h-9 w-9 rounded-full bg-gray-10 flex items-center justify-center text-xl">
              <FaCircleQuestion />
            </span>

            <span className="text-sm font-500">Help & support</span>
          </div>

          <span className="text-2xl text-gray-500">
            <FaChevronRight />
          </span>
        </div>
        <div className="flex items-center justify-between transition-colors duration-75 hover:bg-gray-20 p-2 rounded-md cursor-pointer">
          <div className="w-full flex items-center gap-2 ">
            <span className="h-9 w-9 rounded-full bg-gray-10 flex items-center justify-center text-2xl">
              <FaMoon />
            </span>

            <span className="text-sm font-500">Display & accessiblity</span>
          </div>

          <span className="text-2xl text-gray-500">
            <FaChevronRight />
          </span>
        </div>
        <div className="flex items-center justify-between transition-colors duration-75 hover:bg-gray-20 p-2 rounded-md cursor-pointer">
          <div className="w-full flex items-center gap-2 ">
            <span className="h-9 w-9 rounded-full bg-gray-10 flex items-center justify-center text-lg">
              <FaMessage />
            </span>

            <span className="text-sm font-500">Give feedback</span>
          </div>
        </div>

        <div className="flex items-center justify-between transition-colors duration-75 hover:bg-gray-20 p-2 rounded-md cursor-pointer">
          <div className="w-full flex items-center gap-2 ">
            <span className="h-9 w-9 rounded-full bg-gray-10 flex items-center justify-center text-xl">
              <FaDoorOpen />
            </span>

            <span className="text-sm font-500" onClick={logout}>Log out</span>
          </div>
        </div>
      </div>

      <p className="text-2xs text-gray-500 px-4 pb-4">
        Privacy • Terms • Advertising • Ad Choices • Cookies • More • Tabish |
        Facebook | Clone &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}
