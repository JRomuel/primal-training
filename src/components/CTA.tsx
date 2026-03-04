import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-[60px] mt-[80px] pb-[80px]">
      <div className="bg-dark rounded-[80px] px-[100px] py-[125px]">
        {/* Top content */}
        <div className="flex justify-between items-start">
          {/* Left - Text */}
          <div className="text-white">
            <h2 className="text-[175px] font-medium leading-[175px] tracking-[-3.5px] mb-[75px]">
              Start Your
              <br />
              Project Now!
            </h2>
            <p className="text-[44px] font-light leading-[53px]">
              Made for you convenience for a
              <br />
              more beautiful future for you and
              <br />
              your family
            </p>
          </div>

          {/* Right - Contact Button */}
          <button className="bg-white/5 text-white font-bold text-[27px] w-[320px] h-[344px] rounded-[77px] hover:bg-white/10 transition-colors cursor-pointer shrink-0">
            Contact Us
          </button>
        </div>

        {/* Bottom footer bar */}
        <div className="mt-[220px] bg-white/[0.03] rounded-[80px] h-[134px] flex items-center px-[91px]">
          {/* Logo */}
          <Image
            src="/images/footer-logo.svg"
            alt="Hutly"
            width={96}
            height={39}
          />

          {/* Footer links */}
          <div className="ml-auto flex gap-[50px] text-[20px] font-medium text-white tracking-[-0.4px]">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              About Us
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              Management
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              Project
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              FAQ&apos;s
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
