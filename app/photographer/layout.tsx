import Header from "@/app/components/Header/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header showTitle={false} />
      {children}
    </>
  );
}
