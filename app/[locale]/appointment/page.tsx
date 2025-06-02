import { AppLang } from "@/lib/types";
import Form from "./Form";

interface PageProps {
  params: { locale: AppLang };
}

const page = async ({ params }: PageProps) => {
  const { locale } = params;
  return (
    <>
      <section className="container py-[20px]">
        <Form lang={locale} />
      </section>
    </>
  );
};

export default page;
