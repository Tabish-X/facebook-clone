export default function Icon({
  children,
  squared,
  className,
  title,
}: {
  children: React.ReactNode;
  squared?: boolean;
  className?: string;
  title: string;
}) {
  return (
    <div className="relative h-full">
      <button
        className={`${
          squared ? "rounded-md" : "rounded-full"
        } h-10 w-10  flex items-center justify-center text-black text-xl bg-gray-10 ${
          className ? className : ""
        }`}
        title=""
        id="header_icon"
      >
        {children}
      </button>

      <span
        className="absolute top-12 -right-4 w-fit p-2 bg-[#000000c0] text-white text-xs rounded-md text-[] text-center hidden"
        id="header_icon_title"
      >
        {title}
      </span>
    </div>
  );
}
