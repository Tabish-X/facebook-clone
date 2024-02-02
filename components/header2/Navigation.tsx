"use client";
import { usePathname } from "next/navigation";
import HomeSvg from "./svg/HomeSvg";
import FriendsSvg from "./svg/FriendsSvg";
import VideoSvg from "./svg/VideoSvg";
import MarketplaceSvg from "./svg/MarketplaceSvg";
import GroupsSvg from "./svg/GroupsSvg";
import NavigationButton from "./NavigationButton";
import ShowNavButton from "./ShowNavButton";

export default function Navigation(this: any) {
  const pathname = usePathname();
  let confirmEmailPath = pathname === "/confirmaccount";
  if (confirmEmailPath) {
    return;
  }

  const navigationLinks = [
    {
      svg: <HomeSvg active={pathname === "/"} />,
      link: "/",
      title: "Home",
    },
    {
      svg: <FriendsSvg active={pathname === "/friends"} />,
      link: "/friends",
      title: "Friends",
    },
    {
      svg: <VideoSvg active={pathname === "/videos"} />,
      link: "/videos",
      title: "Profile",
    },
    {
      svg: <MarketplaceSvg active={pathname === "/marketplace"} />,
      link: "/marketplace",
      title: "Marketplace",
    },
    // {
    //   svg: <MarketplaceSvg active={pathname === "/marketplace"} />,
    //   link: "/marketplace",
    //   title: "Marketplace",
    // },
  ];

  return (
    <nav className="w-full h-full pl-3 ">
      <ul className="flex items-center gap-2 justify-start w-full h-full relative ">
        {navigationLinks.map(({ svg, link, title }, id) => (
          <NavigationButton svg={svg} link={link} title={title} key={id} />
        ))}

        <NavigationButton
          svg={<GroupsSvg active={pathname === "/groups"} />}
          link="/groups"
          title="Group"
        />
        <ShowNavButton />
      </ul>
    </nav>
  );
}


