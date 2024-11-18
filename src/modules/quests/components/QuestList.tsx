import React, { useState } from "react";
import { PlusSvg, StarSvg } from "../../../assets";
import { useStoreState } from "../contexts/page-store";
import { cn } from "../../../utils/utils";
import CreateQuestCard from "./CreateQuestCard";

type TQuestListProps = { children?: React.ReactNode };

const QuestList = ({ children }: TQuestListProps) => {
  const quests = useStoreState((s) => s.quests);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Onboarding");

  return (
    <>
      <div className="flex items-start gap-2 lg:gap-3 pb-5 flex-wrap">
        {[{ name: "Onboarding" }, { name: "Invites" }, { name: "Special" }, { name: "Join" }, { name: "Quiz" }, { name: "Twitter" }].map(
          (item, index) => (
            <button
              key={item.name + index}
              onClick={() => setSelectedCategory(item.name)}
              className={cn(
                "flex-center rounded-lg py-2 px-3 h-8 bg-neutral-100 text-neutral-900 font-[500] text-xs",
                selectedCategory === item.name && "text-primary-600 bg-primary-100"
              )}
            >
              {item.name}
            </button>
          )
        )}
        <button className="flex-center rounded-lg size-8 bg-neutral-100 text-neutral-900 font-[500] text-xs">
          <PlusSvg className="size-5" />
        </button>
      </div>

      <div className="mb-2 lg:mb-5">
        <h3 className="text-xl font-[500]">👋 {selectedCategory}</h3>
      </div>

      <div className="flex-wrap gap-2 grid grid-cols-2 lg:gap-5 lg:grid-cols-3">
        <button
          className={cn("flex-center border border-sky-200 rounded-lg h-60 lg:h-[300px] cursor-pointer", isOpenCreate && "!hidden")}
          onClick={() => setIsOpenCreate(true)}
        >
          <PlusSvg className="size-10" />
        </button>
        {isOpenCreate && (
          <CreateQuestCard selectedCategory={selectedCategory} onFormSubmit={() => setIsOpenCreate(false)} onCancel={() => setIsOpenCreate(false)} />
        )}

        {quests
          .filter((item) => item?.category === selectedCategory)
          .map((item, index) => (
            <div key={item.name + index} className="p-2 lg:p-5 flex flex-col border border-sky-200 bg-sky-50 rounded-lg h-60 lg:h-[300px]">
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

                <div className="flex-center space-x-2 h-6 p-1.5 rounded-lg bg-sky-100 text-neutral-500 uppercase text-[10px]">{item.type}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default QuestList;
