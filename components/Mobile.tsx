import Link from "next/link";
import navigation from "@/lang/navbar.json";
import { AppLang } from "@/lib/types";
import { MobileClientDropdown, MobileClientProvider } from "./MobileClient";

interface Props {
  lang: AppLang;
}

const Mobile = async ({ lang }: Props) => {
  return (
    <>
      <MobileClientProvider>
        <ul className="p-[10px] text-white flex flex-col items-center justify-center h-full gap-4">
          {Object.entries(navigation.list).map(([key, value], index) => {
            return (
              <>
                {"dropdown" in value && value.dropdown ? (
                  <MobileClientDropdown
                    lang={lang}
                    text={value[lang]}
                    dropdownUrl={value.url}
                    items={value.dropdown}
                  />
                ) : (
                  <li
                    key={index}
                    className="relative p-[13px] flex items-center gap-2 mx-[5px] group w-full justify-between bg-white text-accent rounded-xl"
                  >
                    <Link
                      href={`/${lang + value.url}`}
                      className="text-sm leading-[1.6em] font-medium flex items-center gap-2 justify-between w-full"
                    >
                      {value[lang]}
                    </Link>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </MobileClientProvider>
    </>
  );
};

export default Mobile;
