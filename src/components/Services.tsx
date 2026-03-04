const services = [
  {
    number: "01",
    title: "Furniture\nDesign",
    description:
      "The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences.",
    dark: true,
  },
  {
    number: "02",
    title: "Interior\nDetails",
    description:
      "Incorporating interior detailing introduces dimension, tactile qualities, and captivating visual elements to a room, enhancing the overall design through the addition of those final embellishments.",
    dark: false,
  },
  {
    number: "03",
    title: "Home\nRevamping",
    description:
      "The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences.",
    dark: false,
  },
];

export default function Services() {
  return (
    <section className="px-[60px] mt-[80px]">
      <div className="bg-muted rounded-[80px] px-[88px] py-[100px]">
        <h2 className="text-[132px] font-bold leading-[1.02] tracking-[-3.97px] w-[835px] mb-[80px]">
          Services
        </h2>

        <div className="flex gap-[26px]">
          {services.map((service) => (
            <div
              key={service.number}
              className={`w-[515px] h-[680px] rounded-[40px] overflow-hidden relative ${
                service.dark
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              {/* Number */}
              <p className="absolute right-[40px] top-[40px] text-[72px] font-medium leading-[76px]">
                {service.number}
              </p>

              {/* Content */}
              <div className="absolute left-[40px] top-[216px] flex flex-col gap-[48px]">
                <h3 className="text-[72px] font-medium leading-[72px] whitespace-pre-line">
                  {service.title}
                </h3>
                <p
                  className={`text-[24px] leading-[1.5] w-[436px] ${
                    service.dark ? "text-white" : "text-primary"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
