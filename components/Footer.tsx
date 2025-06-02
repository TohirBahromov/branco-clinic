import { AppLang } from "@/lib/types";
import Flexbox from "./ui/box";
import Image from "next/image";
import Link from "next/link";
import { callNumber, email } from "@/lib/constants";
import footer from "@/lang/footer.json";

interface Props {
  lang: AppLang;
}
const Footer = ({ lang }: Props) => {
  const date = new Date();
  const weekday = date.getUTCDay();

  return (
    <footer className="bg-primary relative before:absolute before:left-0 before:top-0 before:bg-left before:bg-no-repeat before:w-full before:h-full before:bg-[url('/images/background/footer-bg.svg')] before:pointer-events-none before:bg-contain">
      <div className="container">
        <section className="pt-[100px] pb-[10px] flex xl:flex-col gap-10">
          <Flexbox
            align="col"
            gap={5}
            center={false}
            className="max-w-[400px] xl:max-w-full xl:items-center"
          >
            <Image
              src="/logo-light.svg"
              alt="Barno's Clinic Logo"
              width={180}
              height={40}
            />
            <p className="text-sm text-white mb-4">{footer.hymn[lang]}</p>
            <Link
              href={`mailto:${email}`}
              className="text-md text-white font-semibold"
            >
              {email}
            </Link>
            <Link
              href={`tel:${callNumber}`}
              className="text-md text-white font-semibold"
            >
              {callNumber}
            </Link>
          </Flexbox>

          <Flexbox className="flex-1 md:!flex-col" gap={10} center={false}>
            <Flexbox align="col" center={false} className="flex-1">
              <h1 className="text-md font-semibold text-white relative mb-8 before:absolute before:left-0 before:-bottom-4 before:w-[30px] before:h-[2px] before:bg-white after:absolute after:right-0 after:-bottom-4 after:w-[calc(100%-35px)] after:h-[2px] after:bg-accent">
                {footer.socials[lang]}
              </h1>

              <ul className="flex flex-col">
                {Object.entries(footer.sociallinks).map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="pt-3 pb-[11px] border-b border-accent w-full"
                    >
                      <Link
                        href={item[1].url}
                        target="_blank"
                        className="text-white"
                      >
                        {item[1][lang]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Flexbox>

            <Flexbox align="col" center={false} className="flex-1">
              <h1 className="text-md font-semibold text-white relative mb-8 before:absolute before:left-0 before:-bottom-4 before:w-[30px] before:h-[2px] before:bg-white after:absolute after:right-0 after:-bottom-4 after:w-[calc(100%-35px)] after:h-[2px] after:bg-accent">
                {footer.workinghours[lang]}
              </h1>

              <ul className="flex flex-col">
                {Object.entries(footer.weekdays).map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`pt-3 pb-[11px] border-b border-accent w-full flex items-center justify-between text-white ${
                        weekday === index ? "bg-accent px-2" : ""
                      }`}
                    >
                      {item[1][lang]}

                      <span>{item[1].time}</span>
                    </li>
                  );
                })}
              </ul>
            </Flexbox>
          </Flexbox>
        </section>

        <section className="py-10 px-[10px] mt-[70px] border-t border-accent flex md:flex-col items-center justify-between">
          <span className="text-white text-xs">{footer.copyright[lang]}</span>
          <Link
            href="https://www.linkedin.com/in/tohirjon-baxromov-8aaba7297"
            target="_blank"
            className="text-white text-xs"
          >
            Powered by - Tohir Bahromov
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
