// 'use client'
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAPP from "@/components/WhatsAPP";
import Script from 'next/script';
export const metadata = {
  title: "GMA International School",
  description: "join us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
<meta name="google-site-verification" content="aMSefhxbnfWy8cL8BYR3TAXwbMi1RCTzBFXb-92GddQ" />
<Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-83VR4WZ5JK"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-83VR4WZ5JK');
        `}
      </Script>

</head>
      <body>

        <Header />
        {children}
        <Footer />
      <WhatsAPP />
     
      </body>
    </html>
  );
}
