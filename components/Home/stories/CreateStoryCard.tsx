"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default function CreateStoryCard() {
  return (
    <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-md mb-2 relative">
      <Link
        href="/stories/create"
        aria-label="Story Card"
        className="rounded-md overflow-hidden w-[144px] h-full shadow-md relative z-0"
        id="card"
      >
        <div
          id="hover"
          className="absolute top-0 left-0 w-full h-full bg-black opacity-0 z-[1] transition-opacity duration-300"
        />

        <div className="flex flex-col w-full h-full justify-between">
          <div id="image-wrapper" className="w-full h-full overflow-hidden">
            <img
              src="/images/demoUser.jpg"
              alt=""
              className="w-full h-full object-cover origin-center transition-all duration-300 "
            />
          </div>
          <div
            id="placeholder"
            className=" pt-6 pb-2 px-4 flex items-center justify-center relative bg-white"
          >
            <div
              id="plus-icon"
              className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center  rounded-full border-[5px] border-white"
            >
              <div className="flex items-center justify-center bg-_theme_primary_blue w-full h-full rounded-full">
                <span className="text-lg text-white ">
                  <FaPlus />
                </span>
              </div>
            </div>
            <span className="text-xs font-500">Create story</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
