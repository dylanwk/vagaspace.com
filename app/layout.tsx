import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vagaspace Agency",
  description: "The Travel Agency tailored to Remote Workers",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const SearchModal = dynamic(() => import("@/components/modals/SearchModal"), {
    ssr: false
  })

  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchModal />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>

    </html>
  );
}
