import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-[60px] pt-[42px]">
      <div className="flex items-center justify-between bg-muted rounded-full h-[91px] px-[62px]">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Hutly"
            width={136}
            height={60}
            priority
          />
        </Link>

        {/* Nav Links */}
        <div className="flex gap-[50px] items-center text-[18px] font-medium tracking-[-0.36px] text-primary">
          <Link href="#" className="hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            Project
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            About Us
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            FAQ&apos;s
          </Link>
        </div>

        {/* Contact Button */}
        <button className="bg-primary text-white font-bold text-[18px] h-[91px] px-[43px] rounded-bl-[16px] rounded-tl-[16px] rounded-br-[100px] rounded-tr-[100px] -mr-[62px] hover:bg-primary/90 transition-colors cursor-pointer">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
