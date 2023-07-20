import Footer from "../../components/footer";
import Header from "../../components/header";
import "./globals.scss";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
