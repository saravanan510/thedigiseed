import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Image
        src="/banner.png"
        alt="Banner Image"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Banner;
