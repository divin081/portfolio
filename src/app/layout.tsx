import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "Divine",
  description: "My Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main> 
      </body>
    </html>
  );
}
