import Image from "next/image";

export default function TestLoading() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center ">
      <div className="w-12 h-12 overflow-hidden rounded-full block">
        <Image
          height={32}
          width={32}
          src="/logo-icon.png"
          alt="Facebook-icon"
          className="w-full h-full"
        />
      </div>

      <div className="flex items-center justify-center space-x-2 mt-5">
        <div className="w-2 h-2 rounded-full bg-gray-300 loading-animation loading-animation-1"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300 loading-animation loading-animation-2"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300 loading-animation loading-animation-3"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300 loading-animation loading-animation-4"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300 loading-animation loading-animation-5"></div>
      </div>
    </main>
  );
}
