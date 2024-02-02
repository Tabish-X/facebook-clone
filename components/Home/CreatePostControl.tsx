import Image from "next/image";
import demoUser from "@/assets/demoUser.jpg";

export default function CreatePostControl() {
  return (
    <div className="w-full pt-3 pb-[10px] px-4 bg-white block mt-4 rounded-md shadow-sh-post-wrapper">
      {/* Create a post and user pfp */}
      <div className="flex items-center ">
        {/* User pfp */}
        <div className="h-10 w-10 rounded-full overflow-hidden basis-11">
          <Image
            height={40}
            width={40}
            alt="Some User"
            src={demoUser}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Create post button */}
        <div className="w-full h-10 py-2 px-3 rounded-3xl ml-2 transition-colors bg-_theme_primary_gray hover:bg-[#e4e6e9]">
          <button className="h-full w-full bg-transparent border-none outline-none text-left text-[17px] text-gray-60 ">
            What's on your mind, Name?
          </button>
        </div>
      </div>

      {/* Some buttons */}
      <div className="mt-[10px] border-t">
        <div className=" flex items-center justify-center mt-2">
        <button className="flex items-center justify-center gap-2 transition-colors hover:bg-gray-20 h-10 w-[156px] rounded-md">
          <span className="h-6 w-6 flex items-center justify-center">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png?_nc_eui2=AeHvXheyc4f6oEROSpFmWKF03Eh3Wgl8GJPcSHdaCXwYk6iVEt7M1_tu6q_Dn9j6uvGJKVfC0v-JckLmbuBFyfY-"
              alt=""
              className="w-full h-full "
            />
          </span>
          <span className="text-sm font-semibold text-gray-30">Live video</span>
        </button>
        <button className="flex items-center justify-center gap-2 transition-colors hover:bg-gray-20 h-10 w-[156px] rounded-md">
          <span className="h-6 w-6 flex items-center justify-center">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png?_nc_eui2=AeEaqA1QjS9u_fogcaJfp9mHfK5Z1qDG7FV8rlnWoMbsVaHgX6Xvr4At9HmVscSCWrtQllliRskz7Xfl8ZDcYLHj"
              alt=""
              className="w-full h-full "
            />
          </span>
          <span className="text-sm font-semibold text-gray-30">
            Photo/video
          </span>
        </button>
        <button className="flex items-center justify-center gap-2 transition-colors hover:bg-gray-20 h-10 w-[156px] rounded-md">
          <span className="h-6 w-6 flex items-center justify-center">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png?_nc_eui2=AeFoMCMhY_f-MrnZukXOb4Eiv2_PAiqLvPK_b88CKou88rFC4ImO-EeAg1OkAM_JMBiHlGyy67mWRfNiYb79ewLJ"
              alt=""
              className="w-full h-full "
            />
          </span>
          <span className="text-sm font-semibold text-gray-30">
            Feeling/activity
          </span>
        </button>
        </div>
      </div>
    </div>
  );
}
