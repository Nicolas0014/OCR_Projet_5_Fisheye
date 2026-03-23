import type { Metadata } from "next";
import "./globals.css";

// Components
import Header from "./components/Header/Header";

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
      <body>
        <Header showTitle={true} />
        {children}
      </body>
    </html>
  );
}
