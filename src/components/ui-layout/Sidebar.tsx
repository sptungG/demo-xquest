import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BarchartSvg, FlashSvg, ReviewSvg, SettingSvg, TrophySvg } from "../../assets";
import { cn } from "../../utils/utils";
import { useStoreActions, useStoreState } from "../../contexts/app-store";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isOpenSidebar = useStoreState((s) => s.isOpenSidebar);
  const toggleSidebar = useStoreActions((a) => a.toggleSidebar);

  return (
    <div
      className={cn(
        "max-lg:bg-white w-52 xl:w-60 shrink-0 h-full overflow-y-auto overflow-x-hidden border-r border-r-neutral-200 z-50",
        isOpenSidebar ? "max-lg:flex max-lg:flex-col max-lg:absolute max-lg:top-0 max-lg:left-12 max-lg:pt-12 max-lg:z-10" : "max-lg:hidden"
      )}
    >
      <div className="flex flex-col p-2 xl:p-5">
        <button className="w-full flex-center rounded-lg border border-neutral-300 px-5 py-2.5 text-sm h-10 mb-5 font-[500]">My Townhall</button>

        <div className="flex flex-col mb-5">
          <div className="px-3 text-[10px] text-neutral-400 mb-2 uppercase">Quest</div>
          <SidebarItemLink to="/quests?status=active" isActive={pathname === "/quests"} label="Active" icon={<FlashSvg className="size-5" />} />
        </div>

        <div className="flex flex-col">
          <div className="px-3 text-[10px] text-neutral-400 mb-2 uppercase">Admin</div>
          <SidebarItemLink
            to="/review-submissions"
            label="Review Submission"
            isActive={pathname === "/review-submissions"}
            icon={<ReviewSvg className="size-5" />}
          />
          <SidebarItemLink to="/leaderboard" label="Leaderboard" isActive={pathname === "/leaderboard"} icon={<TrophySvg className="size-5" />} />
          <SidebarItemLink to="/statistics" label="Statistics" isActive={pathname === "/statistics"} icon={<BarchartSvg className="size-5" />} />
          <SidebarItemLink to="/settings" label="Settings" isActive={pathname === "/settings"} icon={<SettingSvg className="size-5" />} />
        </div>
      </div>

      <div className="text-sm flex flex-col sm:hidden mt-auto pb-3">
        <span className="flex items-center text-sm text-neutral-700 h-9 pl-6 pr-3 underline">Communities</span>
        <span className="flex items-center text-sm text-neutral-700 h-9 pl-6 pr-3 underline">QuesterCamp</span>
      </div>
    </div>
  );
};

type TSidebarItemLinkProps = { to: string; icon: React.ReactNode; label: string; isActive?: boolean };
const SidebarItemLink = (props: TSidebarItemLinkProps) => {
  return (
    <Link
      to={props.to}
      className={cn("flex items-center text-neutral-700 h-10 px-3 py-2.5 rounded-lg gap-2", props?.isActive && "text-primary-600 bg-primary-50")}
    >
      {props.icon}
      <span className="uppercase text-xs">{props.label}</span>
    </Link>
  );
};

export default Sidebar;
