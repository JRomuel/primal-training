import StarRating from "./StarRating";

const testimonial = {
  text: "They make it super easy and safe to find a room for rent, prioritizing both convenience and safety. The customer support team is exceptionally responsive and genuinely helpful, ensuring a smooth experience. I wholeheartedly endorse this platform.",
  author: "Ashley Cooper",
};

function TestimonialCard() {
  return (
    <div className="bg-white rounded-[44px] p-[40px] w-[524px] h-[431px] flex flex-col justify-between shrink-0">
      <p className="text-[24px] leading-[36px] text-text-secondary">
        {testimonial.text}
      </p>
      <div className="flex flex-col items-end gap-[8px]">
        <p className="text-[27px] font-medium tracking-[-0.675px] text-black">
          {testimonial.author}
        </p>
        <StarRating />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-[60px] mt-[80px]">
      <div className="bg-muted rounded-[80px] px-[88px] py-[100px]">
        {/* Top row */}
        <div className="flex gap-[265px] items-start">
          <h2 className="text-[132px] font-bold leading-[1.02] tracking-[-3.97px] w-[835px] shrink-0">
            What our customers say
          </h2>
          <TestimonialCard />
        </div>

        {/* Bottom row */}
        <div className="flex gap-[26px] mt-[26px]">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
