import Image from "next/image";

export default function Features() {
  return (
    <section className="px-[60px] mt-[80px]">
      <div className="flex gap-[46px]">
        {/* Left Image */}
        <div className="relative w-[447px] h-[1203px] rounded-[80px] overflow-hidden shrink-0">
          <Image
            src="/images/feature-img-left.jpg"
            alt="Interior design"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-muted rounded-[80px] relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute right-[200px] top-[365px]">
            <Image
              src="/images/feature-img1.svg"
              alt=""
              width={330}
              height={330}
            />
          </div>
          <div className="absolute right-[100px] bottom-[165px]">
            <Image
              src="/images/feature-img1.svg"
              alt=""
              width={330}
              height={330}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-[49px] px-[180px] py-[250px]">
            <h2 className="text-[76px] font-bold leading-[1.02] tracking-[-2.28px] w-[876px]">
              We can bring to life everything you&apos;ve ever envisioned and
              dreamed of &ndash; your ideals and desires are our creations.
            </h2>
            <p className="text-[22px] leading-[36px] max-w-[876px]">
              Our purpose is to transform your wildest dreams into reality.
              Regardless of how unconventional your vision may be, we possess the
              capability to craft your dream home, fulfilling your every desire.
            </p>
            <button className="bg-primary text-white font-bold text-[18px] h-[74px] w-[226px] rounded-[26px] hover:bg-primary/90 transition-colors cursor-pointer">
              See More
            </button>
          </div>

          {/* Satisfied Clients */}
          <div className="absolute right-[220px] top-[100px]">
            <p className="text-[18px] font-medium leading-[28px]">
              Satisfied Clients
            </p>
            <p className="text-[72px] font-bold leading-[85px]">8.4M+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
