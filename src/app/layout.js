import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from '@nextui-org/react'
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Urban Dwellings",
  description: " Modern Interior furniture store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Header/>
          {children}
          <Footer/>
        </NextUIProvider>
        </body>
    </html>
  );
}
