import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anuj Bharti — Performance Marketing Specialist",
  description:
    "Performance marketing specialist in New Delhi. ₹2Cr ad spend managed, ₹4.8Cr revenue, 4–10x ROAS across 13 Meta & Google Ads accounts.",
  keywords:
    "Anuj Bharti, performance marketing specialist, Meta Ads expert, Google Ads expert, Facebook Ads freelancer, ROAS optimization, lead generation, PPC specialist New Delhi, digital marketing India",
  authors: [{ name: "Anuj Bharti" }],
  openGraph: {
    type: "profile",
    siteName: "Anuj Bharti — Performance Marketing Specialist",
    title: "Anuj Bharti — Performance Marketing Specialist | Meta & Google Ads",
    description:
      "₹2Cr ad spend managed · ₹4.8Cr revenue generated · 4–10x ROAS · 3,000+ leads · 65,186 conversions driven across 13 client accounts.",
    url: "https://anuj-bharti.vercel.app/",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
