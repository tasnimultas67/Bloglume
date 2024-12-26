import { Outfit } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "BlogLume — Your go-to destination for the latest news and insightful blogs",
  description:
    ": Your go-to destination for the latest news and insightful blogs. At BlogLume, we illuminate every corner of the world with our comprehensive coverage and thought-provoking articles. Stay informed and inspired with our diverse range of topics, from current events to lifestyle tips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Header />
        <ReactLenis root>{children}</ReactLenis>

        <Footer />
      </body>
    </html>
  );
}
