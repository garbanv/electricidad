import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Social from '../components/Social'

/* const inter = Inter({ subsets: ["latin"] }); */

export const metadata = {
  title: "Precios de la electricidad por hora en España - LuzAhora",
  description: "Precios de la electricidad por hora en España - LuzAhora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>
        <Social />
        <Header />
        {children}
        <Footer />


      </body>
    </html>
  );
}
