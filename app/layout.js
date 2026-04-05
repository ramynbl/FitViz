import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitViz - Virtual Try-On pour le E-commerce",
  description: "Une API de virtual try-on pour les plateformes e-commerce. Essayez avant d'acheter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
