import LeftSideBar from "@/components/Home/LeftSideBar";
import Main from "@/components/Home/Main";
import RightSideBar from "@/components/Home/RightSideBar";
import "@/styles/module.home.css";

export default async function Home() {
  return (
    <main className="fixed top-0 left-0 h-full w-full z-[-1]">
      <div className="w-full h-full flex ">
        <div className="relative top-14 left-0 w-full h-full">
          <div className="flex w-full h-full text-left">
            <div
              id="left-side-bar"
              className="w-full h-full lg:relative -left-full lg:left-0 lg:w-[22%] absolute top-0 bg-_theme_primary_gray transition-all duration-100"
            >
              <LeftSideBar />
            </div>
            <Main />

            <RightSideBar />
          </div>
        </div>
      </div>
    </main>
  );
}
