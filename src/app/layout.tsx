import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "./nav/Navbar";
import Footer from './footer/Footer';

const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Best Rated Hair Braids Salon - VidBraids Artistic Hair Braiding Services",
  description: " Experience the beauty of hair braids with VID hair salon in Sandy Springs, Georgia. Our hair braids are not only stylish but protective for your natural hair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body >
      <Navbar />
        {children}
      {/* <Footer /> */}
      </body>
    </html>
  );
}
