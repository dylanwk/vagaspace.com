import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vagaspace | Vacation rentals for digital nomads, & more",
    template: "%s | Vagaspace Agency",
  },
  description: "Vagaspace | Vacation rentals for digital nomads, & more",
  keywords: [
    "Travel Agency",
    "Nomad Hotel",
    "Monthly Furnished Rentals",
    "Free Hotel Booking",
    "Remote Workers",
    "Digital Nomads",
    "Vacation Rentals",
    "Vagaspace",
  ],
  authors: [
    {
      name: "dylanwk",
      url: "https://vagaspace.com",
    },
  ],
  creator: "dylanwk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vagaspace.com",
    title: "Vagaspace | Vacation rentals for digital nomads, & more",
    description: "Vagaspace | Vacation rentals for digital nomads, & mores",
    siteName: "Vagaspace",
  },
  icons: {
    icon: "/images/vagaspace_logo_circle.png",
    shortcut: "/vagaspace_logo_circle.png",
    apple: "/vagaspace_logo_circle.png",
  },
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
        {/* Google Analytics */}
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

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WJ2DG5GG');
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJ2DG5GG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
