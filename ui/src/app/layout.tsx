import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

const source_code_pro = Source_Code_Pro({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pegam",
  description:
    "✅ Beat digital overload ✅ Incremental revenue &amp; profits. Powerful, easy to use postcard marketing automation built for Shopify &amp; Ecommerce. Try it risk-free.📬",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="root">
      <head>
      <meta content="Pegam - #1 Direct Mail Marketing for Shopify &amp; Ecommerce Brands" property="og:title" />
      <meta content="✅ Beat digital overload ✅ Incremental revenue &amp; profits. Powerful, easy to use postcard marketing automation built for Shopify &amp; Ecommerce. Try it risk-free.📬" property="og:description" />
      <meta content="../../assets/Group 7.png" property="og:image" />
      <meta content="Pegam - #1 Direct Mail Marketing for Shopify &amp; Ecommerce Brands" property="twitter:title" />
      <meta content="✅ Beat digital overload ✅ Incremental revenue &amp; profits. Powerful, easy to use postcard marketing automation built for Shopify &amp; Ecommerce. Try it risk-free.📬" property="twitter:description"/>
      <meta content="../../assets/Group 7.png" property="twitter:image" />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className={`${source_code_pro.className} ${inter.className}`}>
        <div className="container">
          <Header />

          {children}
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
