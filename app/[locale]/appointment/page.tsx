import { AppLang } from "@/lib/types";
import Form from "./Form";

interface Props {
  params: { locale: AppLang };
}

const page = async ({ params }: Props) => {
  const lang = await params.locale;
  return (
    <>
      <section className="container py-[20px]">
        <Form lang={lang} />
      </section>
    </>
  );
};

export default page;
