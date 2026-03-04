import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-[60px] mt-[40px]">
      {/* Background shape */}
      <div className="relative">
        <Image
          src="/images/hero-bg.svg"
          alt=""
          width={1800}
          height={1203}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Hero content overlay */}
      <div className="relative -mt-[1100px]">
        {/* Top section with stats, headline, images */}
        <div className="flex gap-[40px]">
          {/* Left column - Stats & Intro */}
          <div className="w-[545px] flex flex-col pt-[80px] pl-[86px]">
            {/* Capital Raised */}
            <div className="mb-[20px]">
              <p className="text-[20px] font-medium tracking-[-0.2px] leading-[30px]">
                Capital raised
              </p>
              <p className="text-[72px] font-bold leading-[85px]">$3.5M+</p>
            </div>

            {/* Description */}
            <p className="text-[22px] leading-[36px] tracking-[-0.66px] w-[378px] mb-[60px]">
              Crafted for your comfort, to enhance the beauty of your present
              lifestyle but also paves the way for a more aesthetically pleasing
              and harmonious future for both you and your cherished family.
            </p>

            {/* Hero Side Image */}
            <div className="relative w-[545px] h-[715px] rounded-[56px] overflow-hidden">
              <Image
                src="/images/hero-side.svg"
                alt="Modern building exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column - Main headline & image */}
          <div className="flex-1 pt-[60px]">
            {/* Main Headline */}
            <h1 className="text-[153px] font-bold leading-[1.07] tracking-[-6.12px] mb-[40px]">
              We craft the
              <br />
              future dwelling.
            </h1>

            {/* Main Hero Image */}
            <div className="relative w-full h-[712px] rounded-[56px] overflow-hidden">
              <Image
                src="/images/hero-main.jpg"
                alt="Modern residential building"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Introduction section */}
        <div className="pl-[86px] mt-[-400px] relative z-10 w-[422px]">
          <p className="text-[24px] font-medium mb-[29px]">Introduction</p>
          <h2 className="text-[50px] font-medium leading-[1.12] tracking-[-1px] text-[#191623] mb-[29px]">
            A vision for liveable, sustainable &amp; affordable.
          </h2>
          <button className="bg-primary text-white font-bold text-[18px] h-[74px] px-[24px] rounded-[26px] hover:bg-primary/90 transition-colors w-[226px] cursor-pointer">
            Start Exploring
          </button>
        </div>
      </div>
    </section>
  );
}
