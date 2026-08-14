import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Courier_Prime } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const courier = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Origen Restaurante — Edición Ibagué",
  description:
    "Una gaceta gastronómica: currys de autor, bowls, arroces al wok, parathas y cocina vegetariana artesanal en Ibagué. Sedes La Samaria y Centro.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${jakarta.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-origen-paper text-origen-ink font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
