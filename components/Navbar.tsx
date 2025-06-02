import { AppLang } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import navbar from "@/lang/navbar.json";
import Flexbox from "./ui/box";
import IconHolder from "./ui/icon-holder";
import { callNumber } from "@/lib/constants";
import { headers } from "next/headers";
import Language from "./Language";
import Hamburger from "./Hamburger";
import Icon from "./Icon";

interface Props {
  lang: AppLang;
}

const Navbar = async ({ lang }: Props) => {
  const headersList = await headers();
  const pathname = headersList.get("x-current-path") || "";

  return (
    <nav className="sticky bg-white z-10 top-0 left-0 right-0 container flex items-center justify-between py-[10px] rounded-b-lg">
      {/* Left side logo */}
      <Image
        src="/logo-dark.svg"
        alt="Barno Clinic Logo"
        width={180}
        height={40}
      />

      {/* Middle List */}
      <ul className="p-[10px] xl:hidden">
        {Object.entries(navbar.list).map(([key, value], index) => {
          return (
            <li
              key={index}
              className="relative p-[13px] flex items-center gap-2 mx-[5px] group"
            >
              <Link
                href={`/${lang + value.url}`}
                className="text-sm leading-[1.6em] font-medium flex items-center gap-2"
              >
                {value[lang]}

                {"dropdown" in value && (
                  <Icon
                    svg="/svg/icons/chevron-down.svg"
                    width={18}
                    height={18}
                    className="duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>

              {"dropdown" in value && value.dropdown && (
                <ul className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 flex flex-col bg-accent w-max text-white p-4 rounded-lg invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                  {value.dropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={`/${lang + value.url}/${item.title.url}`}
                      className="w-full"
                    >
                      <li className="py-2" key={index}>
                        {item.title[lang]}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      {/* Right side */}
      <Flexbox gap={2} className="p-[10px] z-10 md:flex-row-reverse">
        <Hamburger />
        <Language pathname={pathname} lang={lang} />
        <Flexbox gap={4}>
          <Link
            href={`tel:${callNumber
              .split(" ")
              .filter((item) => item !== " ")
              .join("")}`}
          >
            <IconHolder
              icon="/svg/icons/phone-call.svg"
              shape="circle"
              size={40}
            />
          </Link>
          <Flexbox align="col" center={false} className="md:hidden">
            <h1 className="text-sm font-normal">{navbar.call[lang]}</h1>
            <Link
              href={`tel:${callNumber
                .split(" ")
                .filter((item) => item !== " ")
                .join("")}`}
              className="text-[18px] leading-[21px] font-bold"
            >
              {callNumber}
            </Link>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </nav>
  );
};

export default Navbar;
