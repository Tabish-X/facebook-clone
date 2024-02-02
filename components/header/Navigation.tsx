"use client";

import Link from "next/link";
import React from "react";
import HomeSvg from "../header2/svg/HomeSvg";
import FriendsSvg from "../header2/svg/FriendsSvg";
import VideoSvg from "../header2/svg/VideoSvg";
import MarketplaceSvg from "../header2/svg/MarketplaceSvg";
import { usePathname } from "next/navigation";
import GroupsSvg from "../header2/svg/GroupsSvg";
import { FaBars } from "react-icons/fa6";
import BarsSvg from "./svg/BarsSvg";

export default function Navigation() {
  const pathname = usePathname();
  const navigationLinks = [
    {
      svg: <HomeSvg active={pathname === "/"} />,
      link: "/",
      title: "home",
    },
    {
      svg: <FriendsSvg active={pathname === "/friends"} />,
      link: "/friends",
      title: "friends",
    },
    {
      svg: <VideoSvg active={pathname === "/videos"} />,
      link: "/videos",
      title: "videos",
    },
    {
      svg: <MarketplaceSvg active={pathname === "/marketplace"} />,
      link: "/marketplace",
      title: "marketplace",
    },

    {
      svg: <GroupsSvg active={pathname === "/groups"} />,
      link: "/groups",
      title: "groups",
    },

    {
      svg: <BarsSvg active={pathname === "/bookmarks"} />,
      link: "/bookmarks",
      title: "more",
    },
  ];
  return (
    <div className="fixed top-0 right-0 z-[1] left-0 ">
      <div className="flex flex-col relative z-0 h-14 bg-white">
        <div className="flex flex-col relative z-[0] justify-end  ">
          <div className="flex h-14 justify-center ">
            <ul className="flex justify-center items-end flex-grow  px-[110px] space-x-2 max-[700px]:justify-start">
              {navigationLinks.map((data, i) => {
                const { svg, link, title } = data;
                const active = link === pathname;

                return (
                  <li
                    id={`${title}-link`}
                    className={`min-[1100px]:max-w-[111.6px] flex-grow min-w-[50px] nav-button max-[1099px]:max-w-[calc(15vw_-_55px)] max-[700px]:hidden ${
                      active && "active"
                    } `}
                    key={i}
                  >
                    <span className="">
                      <div className="flex items-center relative h-14 ">
                        <div className="b-border absolute bottom-0 left-[2px] bg-_theme_primary_blue h-[3px] transition-transform duration-200 scale-y-0 right-[2px] rounded-tl-[1px] rounded-tr-[1px] origin-[bottom_center] "></div>
                        <Link
                          href={link}
                          className="w-full p-0 m-0 justify-center h-full bg-transparent touch-manipulation flex-col flex items-center relative"
                        >
                          <span className="relative svg-span">{svg}</span>
                          <div className="hover-overlay rounded-lg inset-[4px_0px] bg-[#0000000d] transition-opacity duration-100 absolute opacity-0"></div>
                        </Link>
                      </div>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className="h-[7px] absolute right-0 z-0 left-0 -bottom-[6px]"
          style={{
            backgroundImage:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAOBAMAAAD3WtBsAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAD29va1cB7UAAAAB3RSTlMCCwQHGBAaZf6MKAAAABpJREFUCNdjSGNIY3BhCGUQBEJjIFQCQigAACyJAjLNW4w5AAAAAElFTkSuQmCC)",
            backgroundSize: "1px 7px",
            backgroundRepeat: "repeat-x",
          }}
        ></div>
      </div>
    </div>
  );
}
