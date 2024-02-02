import Image from "next/image";
import Link from "next/link";

export default function FacebookIcon() {
  return (
    <Link href="/" className="w-10 h-10 overflow-hidden rounded-full block">
      <Image
        height={32}
        width={32}
        src="/logo-icon.png"
        alt="Facebook-icon"
        className="w-full h-full"
      />
    </Link>
  );
}
