import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({
  variable: "--font-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kazbek | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable}`}>
        <Header />

        <main className="mt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}