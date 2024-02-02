"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationButton({
  svg,
  link,
  title,
}: {
  svg: React.ReactNode;
  link: string;
  title: string;
}) {
  const pathname = usePathname();

  return (
    <li
    className={`hidden ${title==="Group" ? "min-[1100px]:flex": "lg:flex"} w-28 h-full flex-col items-center justify-endrelative z-[1] relative`}
      id="nav-link"
    >
      <div
        id="nav-title"
        className="absolute top-[58px] left-1/2 -translate-x-1/2  p-2 rounded-md mr-2 items-center justify-center overflow-hidden text-white text-xs flex opacity-0 transition-opacity delay-100"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[-1] " />
        {title}
      </div>

      <div className="py-1 px-[1px] w-full h-full ">
        <Link
          href={link} //bg-gray-20
          className={clsx(
            "text-2xl h-full w-full flex items-center justify-center rounded-md transition-all",
            {
              ["hover:bg-gray-20 text-gray-30"]: pathname !== link,
              ["text-_theme_primary_blue"]: pathname === link,
            }
          )}
        >
          {svg}
        </Link>
      </div>

      <div className="w-full h-[3px] px-[3px]">
        <span
          className={`h-full w-full block rounded-tl-[1px] rounded-tr-[1px] transition-colors duration-75 ${
            pathname === link ? "bg-_theme_primary_blue " : "bg-white"
          }`}
        ></span>
      </div>
    </li>
  );
}
