import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function SideNavigationButton({
  link,
  text,
  image,
}: {
  link: string;
  text: string;
  image: string | StaticImageData;
}) {
  return (
    <li className="w-full transition-colors duration-75 hover:bg-gray-10 rounded-md">
      <div className="px-2">
        <Link href={link}>
          <div className="flex items-center pr-2 justify-between gap-[6px]">
            <div className="w-7 h-7 my-2 flex items-center justify-center self-center overflow-hidden rounded-full">
              <Image
                height={36}
                width={36}
                src={image}
                alt={text}
                className="w-full h-full block m-auto"
              />
            </div>
            <div className="h-full flex flex-shrink items-center grow relative">
              <div className="w-full h-full py-2 flex items-stretch relative leading-[0] ">
                <div className="-my-[5px]">
                  <div className="my-[5px]">
                    <span className="font-medium text-sm break-words text-left">
                      {text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}
