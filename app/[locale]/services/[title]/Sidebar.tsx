import Icon from "@/components/Icon";
import { AppLang } from "@/lib/types";
import Link from "next/link";
import Flexbox from "@/components/ui/box";
import { callNumber } from "@/lib/constants";

// Lang
import sidebar from "@/lang/detail-services-sidebar.json";

interface Props {
  lang: AppLang;
  pages: {
    id: number;
    title: {
      url: string;
      uz: string;
      ru: string;
    };
    contents: {
      uz: string[];
      ru: string[];
    };
    img: string;
  }[];
}
const Sidebar = ({ lang, pages }: Props) => {
  return (
    <>
      <section className="sticky xl:relative xl:w-full xl:min-w-full top-0 flex flex-col gap-[40px] w-[390px] min-w-[390px]">
        {/* Other services */}
        <article className="p-10 rounded-[40px] bg-secondary">
          <h1 className="text-md font-medium mb-[30px]">
            {sidebar["services-title"][lang]}
          </h1>
          <ul className="flex flex-col gap-5">
            {pages.map((item) => (
              <Link
                key={item.id}
                className="w-full"
                href={`/${lang}/services/${item.title.url}`}
              >
                <li className="flex items-center justify-between p-4 rounded-xl bg-white group">
                  <span className="duration-300 group-hover:text-accent">
                    {item.title[lang]}
                  </span>
                  <Icon
                    svg="/svg/icons/plus.svg"
                    width={24}
                    height={24}
                    className="duration-300 group-hover:rotate-45"
                  />
                </li>
              </Link>
            ))}
          </ul>
        </article>

        {/* Working hours */}
        <article className="p-10 rounded-[40px] bg-primary text-white font-medium">
          <h1 className="text-md pb-[30px] mb-[30px] border-b border-[#555574]">
            {sidebar["workinghours-title"][lang]}
          </h1>
          <ul className="flex flex-col gap-[30px]">
            {sidebar["workinghours-days"].map((item, index) => (
              <li className="w-full flex items-center justify-between">
                <span>{item.daytime[lang]}</span>
                <span>{item.time[lang]}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Contact */}
        <article className="p-[30px] rounded-[40px] bg-white border border-divider flex gap-[30px]">
          <Icon
            svg="/svg/icons/operator.svg"
            width={60}
            height={60}
            color="#5E5EEE"
          />
          <Flexbox align="col" center={false}>
            <h2 className="text-textColor mb-3">{sidebar.call.title[lang]}</h2>
            <h1 className="text-[22px] leading-7 mb-[10px] font-semibold">
              {sidebar.call.desc[lang]}
            </h1>
            <Link href={`tel:${callNumber}`} className="text-textColor">
              {callNumber}
            </Link>
          </Flexbox>
        </article>
      </section>
    </>
  );
};

export default Sidebar;
