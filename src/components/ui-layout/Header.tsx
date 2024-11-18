import { ChatSvg, GiftSvg, LogoSvg, LogoTextSvg } from "../../assets";
import { cn } from "../../utils/utils";
import Image from "../ui/Image";

type THeaderProps = { className?: string };

const Header = ({ className }: THeaderProps) => {
  return (
    <header className={cn("w-dvw bg-white border-b border-neutral-200", className)}>
      <div className="mx-auto h-12 lg:h-14 xl:h-16 w-full flex items-center gap-x-6 px-5">
        <div className="flex items-center">
          <LogoSvg className="size-6" />
          <LogoTextSvg className="w-[58px] h-[11px]" />
        </div>
        <div className="items-center text-sm space-x-6 hidden sm:flex">
          <span>Communities</span>
          <span>QuesterCamp</span>
        </div>
        <div className="flex items-center ml-auto space-x-4">
          <button className="size-8 flex-center relative">
            <GiftSvg className="size-8" />
            <span className="absolute right-0 top-0 rounded-full size-2 bg-red-500"></span>
          </button>
          <button className="size-8 flex-center relative">
            <ChatSvg className="size-8" />
            <span className="absolute right-0 top-0 rounded-full size-2 bg-red-500"></span>
          </button>

          <button>
            <Image
              className="size-8 rounded-full"
              src="https://s3-alpha-sig.figma.com/img/1bc5/43da/457577b060696ace24655daeb08b02da?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iDYNYXSURhtwqGGMU-ZZjBMg5uzH2mDJAf-mcIQRmV2ktApfsVUZ1CpjA2eL7cJfdSuK5BpojGerRyELRpS-12zhlcCI4s5G-vVI44g3koCiqK9sOCuNBcMXwaUYP-e6BB19U1CAo3pl42kWEN1Tiilksk1Q57NaDUq9EoUJiMM3XYpTRN11BI5noal4jb8ajtKEOkRXPhDKvEa9j7soS-SzREl6p0cjoauyWnT1019niI3jeu0yHsjYOCFThmrgll8wYpVDSMZwSRT9BUjAt2C3oAQSzlq~~jizGLOIz1gwLDnKtPRu6Yo12i582TfnUxeHt-0c8A9rMf38tXTZsg__"
              alt="avatar"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
