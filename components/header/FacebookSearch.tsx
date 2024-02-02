"use client";

import { useRef, useState } from "react";
import SearchIconSvg from "../svg/SearchIconSvg";
import SearchList from "./SearchList";
import LeftArrowSvg from "../svg/LeftArrowSvg";

export default function FacebookSearch() {
  const [active, makeActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const animateSearchArea = () => {
    const searchArea = document.getElementById("search-area");
    searchArea?.classList.add("active");
    makeActive(true);
  };

  const closeSearchArea = () => {
    const searchArea = document.getElementById("search-area");
    searchArea?.classList.remove("active");
    makeActive(false);
  };

  return (
    <div
      id="search-area"
      className="fixed left-0 top-0 w-28 min-[1259px]:w-80 h-14 max-w-[100vw] z-[2]"
    >
      <div className="">
        <div className="w-full relative block before:bottom-0 before:top-0 before:right-0 before:left-0 before:absolute before:content-[''] before:opacity-0 search-shadow rounded-b-lg">
          <div className="flex px-4 -mb-2 h-14 ">
            <div className="w-full">
              <div className="w-full flex items-center ">
                <div
                  onClick={closeSearchArea}
                  className="w-9 flex items-center flex-shrink-0 "
                >
                  <div
                    id="left-arrow"
                    className="opacity-0 translate-x-6 translate-y-0 transition-[opacity,transform] duration-100 ease-linear"
                  >
                    <div className="w-9 ">
                      <div className="w-7 ">
                        <div className="p-0 m-0 min-w-0 min-h-0 bg-transparent align-bottom inline-flex cursor-pointer items-stretch relative ">
                          <LeftArrowSvg />

                          <div
                            id="arrow-hover"
                            className="bg-[#0000000d] absolute -inset-2 rounded-full opacity-0 transition-opacity duration-100 ease-linear"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="space"
                  className="w-3 flex flex-shrink-0 h-14 will-change-[width] transition-[width] duration-100 ease-linear"
                >
                  &nbsp;
                </div>
                <label className="w-full flex items-stretch relative min-w-[40px] min-h-[40px] rounded-full bg-_theme_primary_gray">
                  <button
                    onClick={() => inputRef.current && inputRef.current.focus()}
                    id="search-icon"
                    className="whitespace-nowrap flex items-center pl-3 transition-[margin-right,opacity,transform] duration-100 ease-linear"
                    type="button"
                  >
                    <SearchIconSvg />
                  </button>
                  <input
                    id="search-input"
                    autoFocus
                    type="text"
                    placeholder="Search Facebook"
                    className="pl-6 min-[1259px]:px-2 h-10 min-w-0 text-_dark flex-shrink basis-auto bg-transparent pr-2 relative flex-grow outline-none pt-[7px] pb-[9px] transition-[margin-right,opacity,transform] duration-100 ease-linear"
                    onFocus={animateSearchArea}
                    ref={inputRef}
                  />
                </label>
              </div>
            </div>
          </div>

          <SearchList active={active} />
        </div>
      </div>
    </div>
  );
}
