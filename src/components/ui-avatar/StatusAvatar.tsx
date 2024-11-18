import React from "react";
import Image from "../ui/Image";
import { cn } from "../../utils/utils";

type TStatusAvatarProps = { src?: string, status?: string };

const StatusAvatar = ({ src, status }: TStatusAvatarProps) => {
  return (
    <button className={cn("relative size-8 lg:size-10 flex-center rounded-full", status === 'livestream' && "ring-[2px] ring-[#565ADD] ring-offset-0")}>
      <Image className="size-6 lg:size-8 rounded-full object-cover" src={src} />
      {status === "offline" && <span className="absolute right-0 bottom-0 rounded-full size-3 bg-red-500 border-2 border-white"></span>}
    </button>
  );
};

export default StatusAvatar;
