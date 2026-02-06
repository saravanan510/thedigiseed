import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] overflow-hidden">
      <Image
        src="/banner.png"
        alt="Banner Image"
        fill
        sizes="100vw"
        priority
        style={{ objectFit: "cover" }}
        className="object-center"
      />
    </div>
  );
};

export default Banner;