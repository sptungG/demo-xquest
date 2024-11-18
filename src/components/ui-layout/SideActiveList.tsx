import React from "react";
import StatusAvatar from "../ui-avatar/StatusAvatar";
import { useStoreActions, useStoreState } from "../../contexts/app-store";
import { PanelLeftCloseSvg, PanelLeftOpenSvg } from "../../assets";

type TSideActiveListProps = { children?: React.ReactNode };

const SideActiveList = ({ children }: TSideActiveListProps) => {
  const isOpenSidebar = useStoreState((s) => s.isOpenSidebar);
  const toggleSidebar = useStoreActions((a) => a.toggleSidebar);
  return (
    <div className="bg-neutral-100 w-12 lg:w-14 xl:w-20 shrink-0 h-full overflow-y-auto overflow-x-hidden flex flex-col items-center">
      <div className="flex flex-col items-center gap-3 py-2 lg:py-5">
        <StatusAvatar src="https://s3-alpha-sig.figma.com/img/68d4/1472/12c92d759da909e6e1a2aa6a3693fa64?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zx6y6JqXcdlufalradCSLdg3XcjVtZdtT6lbwKHPlLsEqg7wNtBdDRKZbbdoBeEAHhe7fJKiLo81avAAsGTh1gqnSQIc2KIKw3avsZQNCO98HksqXnAjTdtNM-VBbbp6AK3fr8nW~JEjI7oT-rAMmcchBVWycXvypExnrsBKtxiI2mLOYuPc8813BlmHYeHNEJ2BIVAEBeUHpTtnivFNzeXPull59P9U8kCoqcZuWvWmL65oYFWE~KCN~~uTetojxqTem5IfQFQnTDI1ZkOCjni3wuqljrI0dneJNA16HxRnS-JbV0QsRnJZ2fwWio4G44wX3OZBBMUcRckYNX2iHQ__" />
        <StatusAvatar src="https://s3-alpha-sig.figma.com/img/8b04/d6a4/ea20d3edc5436027f296166bbc187281?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZNekLYnQh0i15Jl-jDocpAUkdnaDrgy-bOzONkOv098Zp2Al4p~QsSqGQLhqE9RdK2ygM7K22V5ujqsJOaDWCUOJ5EfJHbU5Aqh90J6OvFopnQ9Fl62e9ERUEETcR4BW4lYMWPhmLhG0QbY8JxySeGmPLBr4GjblAJH8ne3OPwo6adh1h8W1JdE0YXqMUrMTv1CZJX4ymci033CYrjgwWo6Gn53Ju4oIBTn~uEIRa9Pd3dOhFS41Fz6to222N8ZAfwDMHFa4RY~8HJxxk1lYKAWO4Q5BJNXfrY~rvnxLfxNuxPmeKrtSdjplpB17UbeGoDNDfMrz93bBWE41LKP09g__" />
        <StatusAvatar src="https://s3-alpha-sig.figma.com/img/89ff/4a07/4e4fc630f4c73afefd6a640a13fdf379?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=affWZ4~6Sjdq2pGhofS24Bh~KOKwEED2YDju3lsv~OYCVa0XkJbx~jK4M5dPchztOz2ng~r8xraIQQU9XSTha9XyxALYdlULJdUMfMnLGDCuk39mPiCbPkZzA3voXcXPNFjQz7hCMHyWnoKOk1bYHG26hrB~KWO9ls-Hb1nI2rJ~IgbcOZzBCBAHxF57Da1-M-H8z0aSQG-Rmt3qbeQNJ8YheZDZ5nRdJQDB8z1h7QFpgzZmI3GygxF-VrJc8VClcN9e4B3~tQ65glotbKpOsaL1XGag5vfhrEZSlaNaSU0SaetGdJXC89Qmo5wvyrtS7Scd~MfrNnuKXsnQaoJGwA__" />

        <div className="h-0.5 rounded bg-neutral-200 w-9"></div>

        <StatusAvatar src="https://s3-alpha-sig.figma.com/img/fd86/d94f/4e94b328c3f9ad7ea5bcbf1e8c71d9b0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXIHUSoZSN3siBCh76OSDW55NgBtkjNTKZmNXYzUJj2lLh3SXhX~vL9PaQQIFNL1NxuTTCGjsnUD3lnsmL3ciWKzC~lxHweydtJPaDCU~ZQ9i-cCRQIVkGUM3VZAQBtA~zcaSkS7Zd5kkuFYJTmRsfMH5e1yKvux6pdr~csxvZ1hEA312MTZShhbxqjkZ04s096Noq2fZPzhUfguBMa3kxM0XOPfTt1TCcXBShJM6O7Z2vkj4ZNfoujx1TcPN1x7Fou5ojlb8zz3Mjts3IUz4~v7oaKOztaOMwBJSUGN48xTfsBunM4zCAQeJMVv2ISpddef6MG0lgX8na0Le35-cQ__" />
        <StatusAvatar
          status="offline"
          src="https://s3-alpha-sig.figma.com/img/ead6/3c6b/f570dd1b4dad944cb679e75feb1b9355?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IfMjOjXCpSaWkoc~-dXR0IEMZsdiUPOFg57DpNwlR~-aBu8RhvRbWbaNbHRq4ObauPgCSJUyskFZszx5Qe3gyBrPDyHz~A5i6A4sFnfX180FDM5k6UW2DiRWMhHnm6daPdX-y5tvAoMmLO-r3WJu8p~WVJp1vOfbM7MdgV3Kbdo2vf0DRjQ3yEKb12aEIUdfPBAbB1n2LNsOjSBblWART3Lq~KX8eU0ZrHP2wlxUmRLzrFDLoXk-0AG7trjv8scdlKn5KmKqGIrYLn7cMYcQtA1h2lq3BJVBkxPaGEObLQBtyDLYME5lz~dRNq4zwQT4mtSIYFPZ0KLTdz~wWNqOMw__"
        />

        <StatusAvatar src="https://s3-alpha-sig.figma.com/img/16cd/a06f/e58245b133007b70a9d49de44e9c652b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n8Btsq6t8r~dNPhiXjbZtAc0A89myMIiC8BFAji17pyFn99o6y21HCkY7tv0O3tzMd0LYQOnzeU8-oVu0HhOIgY9fejghW1rKn1GxEZi9kkhbBbuDB-aiUrxAvYexjld7fU46sbvSiuOHoc3K~2toYIomUfHf2PKW1vDB2lDG2wwT6WjD~dLllgF52wgjA0INrD1SCJYr5b-JWNUEvye-MUM4Zhmmjbdq0U~fjJpLoCgNOwcAxWah3WyQzS6sPGPc1rmXxJgpb2XZud-iF8eaeT7rsvC1KlrDULTLUUNtCSGQLc9GePPSq~Kux3ShRnzwTj7Sr8bHIslsJvW-pPuxQ__" />

        <StatusAvatar
          status="livestream"
          src="https://s3-alpha-sig.figma.com/img/098d/a5e7/236241bd5602c30b95f35c0175702b3b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JaMWHLYoV7xf3PM1UzC~dcN3zLqTQxTNoraUGz7xhZfGMbe2FETi~O8CFdX14SdVtJgXB73M~J8UfAIyjPDk3B6x1ss8zfBhZ-9f4WtldAcEo2VDz9dy4yQ92WZ5kEEKIu0fEKXux9Bj9lkFH3i2xuEZb-gIRY6FipzGQepfoQ9dWpP0oGo-QU8XMLuWjbTKTcCZHMSB2SVgQs0KQHvETlP-lSbhO-dWl9mBxs-qwIVPkQrAtad3QzzGfgoynZpJwFbmWOzVCYgpRax1PQn-OdvirBDxg4WwlyAxyhdm08uWSr~JPolUlYRR5RuaIVRtKSl~oCPuhHgOk-Ee2VeoHA__"
        />

        <StatusAvatar src="https://s3-alpha-sig.figma.com/img/835f/fcb2/ae027ab0494e9d86dce8426fa60cd16d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q5ldSgo9JLdXM~cQd3oHwNARqqgpgcE9BkO4uuKwFAPAnpI0Tg7ca4Z3I3NFOhQMIPrMaDnYinQ3Iw7M1BLjbIiT1gzWrZfWypfTwlxSFK9q5RtsUbEZP0X0M3LfjsA-R4UiNwKLM3ne8LS8lIz-2QDH7Qp432ZzgYqH3X9byhzYd77VI08gbdoH3am6h5b0n4L4kLtcjlmxmPNwgGteu5BP0zOhOV8JxKl3LP1Yba2jTIgpPC6j2J~ijlKDtBsGtAYwUYEV3NiYdVxrKk4sBxo9e4p1KRxcN6tMBu~SBBXzP99j6kGEWbM2ox9YX8LrajArNCdW4rvXipyMsgGpxg__" />

        <StatusAvatar
          status="offline"
          src="https://s3-alpha-sig.figma.com/img/5e11/aa16/671f40239ba7a8a2945339f776703944?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e7h8dEzujLeD61JueKN1K9WQ6dFHJCmKu78QU99lU80~wyP42Fyd9qB-3UZPkOpLWBtJm4OIlebFHGpwww2u2hCO4mWCfwtnuXiPNPqd8GGA-2U0J79fb9f68DTv28J9RSC~tGeaJsCEtp8x~XSp8gUNbkm7wBltDvuvUpGmec02HYOCYfFiSZbqtFMd1pEphUCfi~svFlYStVYmQJV0Xjbqly-WPr8hiE4NmvCD9ELZZkFLlvH4MSdtapEuICMa5otPF3OTkAMD1KmN05u~8ldbysRu7UEcMhS~grrE1hwv1O55je8QNw0SfEUBldXNuHALUm6eNh1g-6n3elt-Wg__"
        />
      </div>

      <div className="h-0.5 rounded bg-neutral-200 w-9 mt-auto lg:hidden"></div>

      <button className="w-14 xl:w-20 py-4 flex items-center justify-center sticky bottom-0 lg:hidden" onClick={() => toggleSidebar()}>
        {isOpenSidebar ? <PanelLeftCloseSvg className="size-6" /> : <PanelLeftOpenSvg className="size-6" />}
      </button>
    </div>
  );
};

export default SideActiveList;
