"use client";

import Link from "next/link";
import FacebookSvg from "../FacebookSvg";
import "@/styles/module.header.css";
import FacebookSearch from "./FacebookSearch";
import { usePathname } from "next/navigation";
import HomeSvg from "../header2/svg/HomeSvg";
import Navigation from "./Navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/login") {
    return false;
  }

  return (
    <header>
      {/* Facebook Icon */}
      <div className="fixed top-0 left-0 flex items-center ml-4 z-[3] h-14">
        <Link
          href="/"
          className="p-0 m-0 min-w-0 min-h-0 bg-transparent basis-auto flex-shrink-0 inline-block relative z-0 "
        >
          <FacebookSvg />
        </Link>
      </div>

      {/* Search Box */}
      <FacebookSearch />

      {/* Navigation */}
      <Navigation/>

    </header>
  );
}
