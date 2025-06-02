import { AppLang } from "@/lib/types";
import Form from "./Form";

type Params = Promise<{ locale: AppLang }>;
interface PageProps {
  params: Params;
}

const page = async (props: PageProps) => {
  const params = await props.params;
  const locale = params.locale;
  return (
    <>
      <section className="container py-[20px]">
        <Form lang={locale} />
      </section>
    </>
  );
};

export default page;
