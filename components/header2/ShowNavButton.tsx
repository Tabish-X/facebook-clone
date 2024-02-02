"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";

export default function ShowNavButton() {
  const pathname = usePathname();
  const active = pathname === "/navigation";

  return (
    <li
      className="w-12 h-14 flex flex-col items-center justify-between z-[1] min-[1100px]:hidden "
      id="nav-button"
    >
      <div
        id="nav-title"
        className="absolute top-[58px] left-1/2 -translate-x-1/2  p-2 rounded-md mr-2 items-center justify-center overflow-hidden text-white text-xs flex opacity-0 transition-opacity delay-100"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[-1] " />
        More
      </div>

      <div className="py-1 px-[1px] w-full h-full ">
        <Link
          href={!active ? "/navigation": "/"}
          className={clsx(
            "text-2xl h-full w-full flex items-center justify-center rounded-md transition-colors",
            {
              ["hover:bg-gray-20 text-gray-30"]: !active,
              ["text-_theme_primary_blue"]: active,
            }
          )}
        >
          <span
            className={`w-full h-full flex items-center justify-center text-2xl ${
              active ? "#0866ff" : "text-gray-30"
            }`}
          >
            <FaBars />
          </span>
        </Link>
      </div>

      <div className="w-full h-[3px] px-[3px]">
        <span
          className={`h-full w-full block rounded-tl-[1px] rounded-tr-[1px] transition-colors duration-75 ${
            active ? "bg-_theme_primary_blue " : "bg-white"
          }`}
        ></span>
      </div>
    </li>
  );
}
