"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default function StoryCard() {
  return (
    <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-sm mb-2 relative">
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

        <div className="flex flex-col w-full h-full justify-between relative">
          <div id="image-wrapper" className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <img
              src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t51.29350-10/420846309_752849346323339_6793429162895199846_n.jpg?stp=dst-jpg_p235x165&_nc_cat=105&ccb=1-7&_nc_sid=1a7029&_nc_eui2=AeFIjnZPoNrqXzPNiWUybpr8ud2GNUsYkEe53YY1SxiQR2G2FLsB70rkkH4Lfbz6Y_-5ST-N_kDYJXU8sG0Hz-PE&_nc_ohc=JlHezZOjn2MAX_Qjkjv&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfCpoukLqKzAv19jFS50qq7_jM7N8R4mUDolMIbBIsPT7w&oe=65B710D2"
              alt=""
              className="w-full h-full object-cover origin-center transition-all duration-300 "
            />

          </div>
          <div
            id="placeholder"
            className="absolute bottom-0 left-0 pb-2 px-4 flex items-center justify-center z-[1]"
          >
            {/* The page or indivisual name will appear here. */}
            <span className="text-xs font-500 text-white">The Misha Agarwal Show</span> 
          </div>

          <div
              id="account-pfp"
              className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center  rounded-full border-4 border-[#075CE5] overflow-hidden shadow-sh-3"

            >
              <div className="flex items-center justify-center bg-_theme_primary_blue w-full h-full rounded-full">
                <img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/235252434_357030319337604_5934553720928904668_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=596444&_nc_eui2=AeHtxcJw0yobTOlCJxQ4jtsk44_PtdMw5M7jj8-10zDkzicmxx66V6klP7Vf5S6I0dYDMnAJcI21402puUKE1VEF&_nc_ohc=AzJlXEoSsUcAX8_nlH9&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfCJgVsX7zeXwHf7MGVHXv4MGbtQFB9_uHIFlP9Trj-xBQ&oe=65B901D8" alt="account-pfp" />
              </div>
            </div>
        </div>
      </Link>
    </div>
  );
}
