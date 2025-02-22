import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const bebas = Bebas_Neue({
  variable: "--title",
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  variable: "--poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Talifouni",
  description:
    "Découvrez l’alliance parfaite entre innovation, style et performance chez **Taliphouni**, votre boutique en ligne préférée pour les derniers smartphones. Que vous cherchiez à améliorer votre appareil, à offrir le cadeau idéal ou à explorer les dernières technologies, nous sommes là pour vous servir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable}  ${bebas.variable} antialiased`}>
        <Nav/>
        <div className="grid gap-14 p-14 ">{children}</div>
      </body>
    </html>
  );
}
