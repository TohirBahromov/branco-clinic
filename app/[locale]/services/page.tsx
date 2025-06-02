import detailPages from "@/lang/services-pages.json";
import { AppLang } from "@/lib/types";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    locale: AppLang;
  };
}

const page = async ({ params }: PageProps) => {
  const { locale } = params;
  const firstDetailPageLink = detailPages[0].title.url;

  redirect(`/${locale}/services/${firstDetailPageLink}`);
  return <></>;
};

export default page;
