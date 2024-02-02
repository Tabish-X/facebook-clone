"use client";

import "@/styles/module.header.css";
import AuthUser from "./AuthUser";
import Search from "./Search";
import Buttons from "./Buttons";
import Navigation from "./Navigation";

export default function Header({}) {
  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full h-14 flex items-center justify-between bg-white border-sm z-50 shadow-[0px_1px_8px_#00000017]"
    >
      <>
        {/* Left side division */}
        <Search />

        {/* Navbar */}
        <Navigation />
        {/* <NavigationButton title="More" /> */}
      </>

      {/* Right side division */}

      <div className="w-[16%] h-full flex items-center justify-end gap-2 ">
        <Buttons />

        {/* Auth user component */}
        <AuthUser />
      </div>
    </header>
  );
}
