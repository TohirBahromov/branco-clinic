import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Barno's Clinic",
  description: "Barno's Clinic - Your Health, Our Priority",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
