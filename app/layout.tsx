import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./styles/globals.css";
import Footer from "@/components/Footer";
import MediaDecor from "@/components/ui/decoration/mediaDecor";
import Header from "@/components/Header";
import { siteInfo } from "@/data";
import TitleSpinner from "@/components/ui/decoration/titleSpinner";

const firaCode = Fira_Code({
  variable: "--font-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "loading...",
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body className="flex flex-col min-h-screen w-full">
        <TitleSpinner />
        <MediaDecor />

        <Header />

        <main className="flex flex-col gap-12 mb-12 flex-1 mt-16 max-w-5xl px-0 mx-4 lg:px-4 lg:w-full lg:mx-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
