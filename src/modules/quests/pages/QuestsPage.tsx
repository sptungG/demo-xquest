import { ArrowRightSvg, PlusSvg } from "../../../assets";
import QuestList from "../components/QuestList";
import TemplateList from "../components/TemplateList";
import PageProvider from "../contexts/PageContext";

const QuestPage = () => {
  return (
    <PageProvider>
      <div className="flex flex-col">
        <div className="h-14 lg:h-16 xl:h-20 bg-white w-full flex items-center border-b border-b-neutral-200">
          <div className="max-w-[980px] px-2 lg:px-5 w-full mx-auto flex items-center">
            <h2 className="font-[500] text-2xl">Quest</h2>

            <div className="flex items-center space-x-2 lg:space-x-4 ml-auto">
              <button className="flex-center rounded-lg font-[500] px-2 lg:px-5 border border-neutral-300 h-9 lg:h-10 text-sm">Use Template</button>
              <button className="flex-center text-white bg-primary-600 rounded-lg font-[500] px-5 h-9 lg:h-10 text-sm">
                <PlusSvg className="size-5" />
                <span className="hidden lg:flex">Create Quest</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 border-b border-b-neutral-200">
          <div className="w-full max-w-[980px] flex mx-auto pt-3 px-2 mb-2 lg:pt-10 lg:px-5 lg:mb-5">
            <h3 className="text-xl font-[500]">🌟 Templates</h3>

            <button className="text-xs flex-center ml-auto font-[500] text-primary-600">
              See all templates <ArrowRightSvg className="size-4" />
            </button>
          </div>
          <TemplateList />
        </div>

        <div className="bg-white w-full flex flex-col max-w-[980px] mx-auto px-2 py-5 lg:py-10 lg:px-5">
          <QuestList />
        </div>
      </div>
    </PageProvider>
  );
};

export default QuestPage;
