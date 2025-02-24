import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.scss";
import { Header } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["800", "700", "600", "500", "400","300"],
});
const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "400", "300", "200"],
});

export const metadata: Metadata = {
  title: "Wellstar Facility Management",
  description: "Wellstar Facility Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmsans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
