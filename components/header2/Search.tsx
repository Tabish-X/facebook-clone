"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { FaArrowLeft, FaFacebook, FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Search() {
  const [focus, setFocus] = useState(false);
  let pathname = usePathname();
  let confirmEmailPath = pathname === "/confirmaccount";

  const handleClick = () => {
    const navBarButton = document.getElementById("nav-button")
    if(focus){
      navBarButton?.classList.remove("hidden")
      navBarButton?.classList.add("flex")
      setFocus(false)
    } else {
      navBarButton?.classList.add("hidden")
      navBarButton?.classList.remove("flex")
      setFocus(true)
    }
  }

  return (
    <>
      <div
        className={clsx(
          "w-28 min-[1260px]:w-80 bg-white rounded-md relative z-50 transition-all",
          {
            ["w-80 h-14"]: focus,
            ["h-14"]: !focus,
          }
        )}
      >
        {!confirmEmailPath && (
          <>
            <div
              className={clsx(
                "relative max-h-[512px] w-28 min-[1260px]:w-80 bg-white rounded-md",
                {
                  ["w-80 pt-14 shadow-sh-2"]: focus,
                }
              )}
            >
              <div
                className={clsx("", {
                  ["px-4 pb-4 pt-2"]: focus,
                })}
              >
                <p className="text-gray-30 text-center text-sm">
                  No recent searches
                </p>
              </div>
            </div>

            <div
              className={clsx(
                "fixed top-0 left-0 w-28 min-[1260px]:w-[318px] h-14 bg-white z-20",
                { ["w-[318px]"]: focus }
              )}
            >
              <div className="pl-2 pr-3 w-full h-full">
                <div className="w-full h-14 flex items-center justify-end ">
                  <div
                    className={clsx("transition-all duration-100 ease-linear", {
                      ["mr-2 h-9 w-9 text-lg"]: focus,
                      ["h-0 w-0 text-[0px] opacity-0"]: !focus,
                    })}
                    onClick={handleClick}
                  >
                    <span className="text-center m-auto h-full w-full text-inherit flex items-center justify-center hover:bg-[#f0f2f5] transition-colors rounded-full cursor-pointer text-gray-30 ">
                      <span className="text-gray-30">
                      <FaArrowLeft />
                      </span>
                    </span>
                  </div>

                  <label
                    className={clsx(
                      "h-10 rounded-full overflow-hidden bg-[#f0f2f5] flex items-center justify-center transition-all ease-linear delay-100",
                      {
                        ["w-[252px] min-[1260px]:w-[252px]"]: focus,
                        ["w-10 min-[1260px]:w-60"]: !focus,
                      }
                    )} //initial width w-60
                  >
                    <span
                      className={clsx("text-gray-30 relative min-[1260px]:ml-3", {
                        ["-left-4 text-[1px] opacity-0 ml-0"]: focus,
                      })} //Initially block
                    >
                      <FaMagnifyingGlass />
                    </span>

                    <input //Initial width w-212px
                      type="text"
                      id="search-input"
                      placeholder="Search Facebook"
                      className={clsx(
                        "h-full rounded-full text-gray-30 outline-none border-none bg-transparent min-[1260px]:pl-2 min-[1260px]:pr-3 transition-all ease-linear",
                        {
                          ["w-[244px] min-[1260px]:w-[244px] pl-3 pr-3"]: focus,
                          ["w-0 min-[1260px]:w-[212px] "]: !focus,
                        }
                      )}
                      onFocus={handleClick}
                      onBlur={handleClick}
                    />
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        <Link
          href="/"
          title="Facebook"
          className={clsx("fixed top-2 left-0 ml-4", {
            ["z-40"]: !focus,
          })}
        >
          <span className="text-[40px] text-[#0866ff] ">
            <FaFacebook />
          </span>
        </Link>
      </div>
    </>
  );
}
