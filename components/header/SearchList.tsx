"use client";

export default function SearchList({ active }: { active: boolean }) {
  if (!active) {
    return false;
  }

  return (
    <div id="search-list" className="">
      <div className="p-2 flex-col flex max-h-[clac(100vh_-_80px)] rounded-b-lg bg-white ">
        <div className="overflow-y-auto overflow-x-hidden overscroll-y-contain flex-col flex search-list relative z-0  ">
          <div className="flex flex-col relative flex-grow">
            <div>
              <ul className="flex flex-col ">
                <li>
                  <ul>
                    <li>
                      <div>
                        <div className="flex items-center justify-center h-9 w-full mx-auto ">
                          <span className="min-w-0 break-words block text-gray-30 text-sm leading-[1.3333] font-normal ">
                            <span className="overflow-x-hidden whitespace-nowrap text-ellipsis overflow-y-hidden block">
                              No recent searches
                            </span>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
