import { notFound } from "next/navigation";
import { AppLang } from "@/lib/types";
import Sidebar from "./Sidebar";

// Langs
import detailPages from "@/lang/services-pages.json";
import Image from "next/image";

interface Props {
  params: {
    title: string;
    locale: AppLang;
  };
}

const page = async ({ params }: Props) => {
  const lang = await params.locale;
  const title = await params.title;

  const currentPage = detailPages.find((item) => item.title.url === title);
  const otherPages = detailPages.filter((item) => item !== currentPage);

  if (!currentPage) {
    notFound();
  }

  return (
    <div className="py-[80px] xl:pt-[40px] container flex xl:flex-col gap-[60px] relative">
      <section className="flex flex-col gap-[30px] xl:w-full">
        <h1 className="text-2xl font-semibold">{currentPage.title[lang]}</h1>
        <div className="relative w-full h-[500px]">
          <Image
            src={currentPage.img}
            fill
            alt={currentPage.title[lang] + " image"}
            className="object-cover rounded-[40px]"
          />
        </div>
        {currentPage.contents[lang].map((item, index) => (
          <p key={index} className="text-textColor">
            {item} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Officia enim saepe quisquam culpa iusto quasi itaque mollitia
            eligendi tempora corrupti dicta, quam, id commodi praesentium, non
            pariatur minus maxime. Optio, laboriosam ab? Accusantium eum dolore
            dolorem ratione minima dolor officia iure eligendi. Quaerat, sint
            rerum tenetur cumque eum aperiam eaque, iusto voluptatum ipsa
            consectetur nisi? Perferendis expedita in ut, vel maiores facere
            cumque enim. Sint saepe quidem modi perferendis qui cum sunt atque
            cumque nam obcaecati, alias temporibus debitis minima laboriosam aut
            omnis? Nisi placeat accusantium, aspernatur nihil, quod tempore,
            veniam aut asperiores neque ab explicabo! Eaque dolores tempora at
            nulla dicta repellendus, atque vitae nihil debitis ullam libero.
            Aspernatur reprehenderit quia labore perferendis odit sapiente nobis
            natus debitis eius.
          </p>
        ))}
      </section>
      <Sidebar lang={lang} pages={otherPages} />
    </div>
  );
};

export default page;
