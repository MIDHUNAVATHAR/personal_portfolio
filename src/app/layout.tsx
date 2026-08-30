import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Logsfolio | Developer Portfolio",
  description:
    "A clean looking FREE portfolio template for devs. Built with NextJS & TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <div className="h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
