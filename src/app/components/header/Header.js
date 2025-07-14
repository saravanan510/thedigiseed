"use client";
import Image from "next/image";
import Button from "../common/button/Button";
const Header = () => {
  return (
    <>
      <div className="container px-6 mx-auto h-20 flex justify-between items-center">
        <Image src="/thedigiseedlogo.svg" alt="logo" width={120} height={36} />

        <ul className="hidden lg:flex gap-6 ">
          <li>About Us</li>
          <li>Services</li>
          <li>Works</li>
        </ul>

        <div className="hidden lg:block">
          <Button type={"contained"}>Become a client</Button>
        </div>

        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="lg:hidden"
        />
      </div>
    </>
  );
};

export default Header;
