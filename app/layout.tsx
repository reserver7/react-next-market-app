import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import getCurrentUser from "./actions/getCurrentUser";
import Script from "@/node_modules/next/script";
import ToastProvider from "../components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser} />
        <ToastProvider />
        {children}
        <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a511983808697362b68b0674898209fb&libraries=services,clusterer&autoload=false" />
      </body>
    </html>
  );
}
