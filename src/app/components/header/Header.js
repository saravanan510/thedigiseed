"use client";
import Image from "next/image";
import Button from "../common/button/Button";
const Header = () => {
  return (
    <>
      <div className="container px-6 mx-auto h-20 flex justify-between items-center border-b border-b-gray-200">
        <Image src="/thedigiseedlogo.svg" alt="logo" width={100} height={32} />

        <ul className="hidden lg:flex gap-8">
          <li>About Us</li>
          <li>Services</li>
          <li>Works</li>
        </ul>

        <div className="hidden lg:block">
          <Button type={"contained"}>Become a Client</Button>
        </div>

        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="lg:hidden"
        />
      </div>
    </>
  );
};

export default Header;
