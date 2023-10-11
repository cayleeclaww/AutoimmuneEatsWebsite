import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Autoimmune Eats",
  description: "Radical nutrition for autoimmune disease",
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html> */}
      <Header />
      <main className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </main>
    </>
  );
}
