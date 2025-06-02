import { AppLang } from "@/lib/types";
import Form from "./Form";

interface Props {
  params: { locale: AppLang };
}

const page = ({ params }: Props) => {
  const lang = params.locale;
  return (
    <>
      <section className="container py-[20px]">
        <Form lang={lang} />
      </section>
    </>
  );
};

export default page;
