import React from "react";
import { ChevronRightSvg, StarSvg } from "../../../assets";
import { useStoreState } from "../contexts/page-store";

type TTemplateListProps = { children?: React.ReactNode };

const TemplateList = ({ children }: TTemplateListProps) => {
  const templateQuests = useStoreState((s) => s.templateQuests);
  return (
    <div className="max-w-[980px] w-full mx-auto relative">
      <div className="pb-2 lg:pb-10 px-2 lg:px-5 w-full overflow-x-auto overflow-y-hidden">
        <div className="flex items-center">
          {templateQuests.map((item, index) => (
            <div key={item.name + index} className="h-44 lg:h-60 p-2 lg:p-5 w-[200px] flex flex-col border border-neutral-200 rounded-lg shrink-0 mr-2 lg:mr-5">
              <div className="flex-[1_1_auto] min-h-0 flex-col flex">
                <div className="mb-3 font-[500] text-neutral-900 truncate-2">{item.name}</div>
                <div className="text-neutral-700 text-sm truncate-2">{item.desc}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-center space-x-2">
                  <span className="bg-secondary-100 size-6 flex-center rounded-lg">
                    <StarSvg className="size-3" />
                  </span>
                  <span className="text-secondary-500 font-[500]">{item.star || "N/A"}</span>
                </div>

                <div className="flex-center space-x-2 h-6 p-1.5 rounded-lg bg-neutral-100 text-neutral-500 uppercase text-[10px]">{item.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="size-10 hidden xl:flex items-center justify-center rounded-full bg-white border border-neutral-300 absolute right-0 translate-x-1/2 top-[calc(50%-20px)] -translate-y-1/2 shadow-lg">
        <ChevronRightSvg className="size-5" />
      </button>
    </div>
  );
};

export default TemplateList;
