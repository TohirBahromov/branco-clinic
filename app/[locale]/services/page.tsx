import detailPages from "@/lang/services-pages.json";
import { AppLang } from "@/lib/types";
import { redirect } from "next/navigation";

interface Props {
  params: {
    locale: AppLang;
  };
}

const page = ({ params }: Props) => {
  const lang = params.locale;
  const firstDetailPageLink = detailPages[0].title.url;

  redirect(`/${lang}/services/${firstDetailPageLink}`);
  return <></>;
};

export default page;
