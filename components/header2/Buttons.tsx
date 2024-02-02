"use client";

import { FaBell, FaFacebookMessenger, FaPlus } from "react-icons/fa6";
import Icon from "./Icon";
import { usePathname } from "next/navigation";

export default function Buttons() {
    const pathname = usePathname()
    let confirmEmailPath = pathname === "/confirmaccount"
    if(confirmEmailPath){
        return
    }

  return (
    <div className="inline-flex gap-2 flex-row-reverse relative">
      <Icon title="Notification">
        <FaBell />
      </Icon>
      <Icon title="Messenger">
        <FaFacebookMessenger />
      </Icon>
      <Icon title="Create">
        <FaPlus />
      </Icon>
    </div>
  );
}
