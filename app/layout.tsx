import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

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
    ssr: false,
  });

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QWGSFHCZJK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QWGSFHCZJK');
            `,
          }}
        />
        <link rel="icon" href="/images/vagaspace_logo.svg" sizes="any" />
        <title>Vagaspace | Vacation rentals for digital nomads, & more</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={inter.className}>
        <SearchModal />

        <Navbar />
        <main className="min-h-[100vh] antialiased bg-background">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
