"use client";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="container mx-auto px-6 md:px-0 h-20 flex justify-between items-center">
        <Image src="/thedigiseedlogo.svg" alt="logo" width={120} height={36} />
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </div>
    </>
  );
};

export default Header;
