import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Social from '../components/Social'
import Script from 'next/script'

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

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ANALYTICS_KEY}`} />
      <Script   id="g_analytics">
      {`
             window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.G_ANALYTICS_KEY});

              });
          `}
  

      </Script>
    </html>
  );
}
