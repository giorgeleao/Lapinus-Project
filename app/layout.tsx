import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lapinus",
  description: "Plataforma inteligente para tutores de coelhos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}