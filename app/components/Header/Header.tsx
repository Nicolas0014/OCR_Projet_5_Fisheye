import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  showTitle?: boolean;
}

export default function Header({ showTitle = false }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6 mb-20">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Fisheye Home page"
          width={200}
          height={50}
        />
      </Link>
      {showTitle && <h1 className="text-xl text-primary">Nos photographes</h1>}
    </header>
  );
}
