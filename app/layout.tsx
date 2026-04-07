import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fisheye",
  description:
    "Plateforme de partage de photos pour les passionnés de photographie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
