import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppLang } from "@/lib/types";
import { availableLocales } from "@/lib/constants";
import { notFound } from "next/navigation";
import Mobile from "@/components/Mobile";
import { Toaster } from "@/components/ui/toaster";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Barno's Clinic",
  description: "Barno's Clinic - Your Health, Our Priority",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: AppLang };
}>) {
  const lang = locale;

  if (!availableLocales.includes(locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={`${jakartaSans.className} antialiased`}>
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />

        <Mobile lang={lang} />
        <Toaster />
      </body>
    </html>
  );
}
