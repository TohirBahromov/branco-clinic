import detailPages from "@/lang/services-pages.json";
import { AppLang } from "@/lib/types";
import { redirect } from "next/navigation";

type Params = Promise<{ locale: AppLang }>;
interface PageProps {
  params: Params;
}

const page = async (props: PageProps) => {
  const params = await props.params;
  const locale = params.locale;

  const firstDetailPageLink = detailPages[0].title.url;

  redirect(`/${locale}/services/${firstDetailPageLink}`);
  return <></>;
};

export default page;
