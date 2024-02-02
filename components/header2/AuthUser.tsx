"use client";

import Image from "next/image";
import demoUser from "@/assets/demoUser.jpg";
import {
  FaAngleDown,
  FaAngleLeft,
  FaCaretDown,
  FaCaretUp,
  FaChevronDown,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { usePathname } from "next/navigation";

export default function AuthUser() {
  const pathname = usePathname()
  const [dropdown, setDropdown] = useState(false);
  const confirmEmailPath = pathname === "/confirmaccount"
  
  const handleDropdown = () => {
    let image = document.getElementById("user_auth_image");
    let dropdownc = document.getElementById("auth_user_dropdown");
    image?.classList.add("drop_active");

    setTimeout(() => {
      image?.classList.remove("drop_active");
      if (dropdown) {
        setDropdown(false);
        dropdownc?.classList.remove("drop_active");
      } else {
        setDropdown(true);
        dropdownc?.classList.add("drop_active");
      }
    }, 100);
  };

  const placeholder = {
    user: {
      verifiedEmail: true,
      firstName: "Tabish",
      lastName: "Ali",
      emialSettings: {
        confirmed: false,
        token: "",
      },
    },
  };
  const { firstName, lastName } = placeholder.user;
  if (!placeholder.user.verifiedEmail) {
    return;
  }
  return (
    <article className="relative pr-4">
      {/* Display image and dropdown arrow */}
      {!confirmEmailPath ? (
        <div className="relative cursor-pointer" onClick={handleDropdown}>
          {/* User image */}
          <div
            id="user_auth_image"
            className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-transform"
          >
            <Image
              height={32}
              width={32}
              alt={`${firstName} ${lastName} loged in user`}
              src={demoUser}
              className="w-full h-full"
            />
          </div>

          {/* Dropdown arrow */}
          <span className="absolute -bottom-[2px] -right-[2px] z-10 text-black bg-gray-200 border-2 border-white rounded-full text-2xs font-bold h-4 w-4 flex items-center justify-center">
            <FaAngleDown />
          </span>
        </div>
      ) : (
        <div className="w-4 h-4 flex items-center justify-center">
          <button
            onClick={handleDropdown}
            className={`pr-1 text-lg text-gray-600`}
          >
            {dropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </div>
      )}
      {/* Dropdown component */}
      <Dropdown confirmEmailPath={confirmEmailPath}/>
    </article>
  );
}

// {user}: {user: User}
