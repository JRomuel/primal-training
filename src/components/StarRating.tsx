import Image from "next/image";

export default function StarRating() {
  return (
    <div className="flex gap-[4px]">
      {[...Array(5)].map((_, i) => (
        <Image
          key={i}
          src="/images/star.svg"
          alt="star"
          width={15}
          height={15}
        />
      ))}
    </div>
  );
}
