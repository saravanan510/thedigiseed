"use client";
import Image from "next/image";
import Button from "../common/button/Button";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="container px-6 mx-auto 2xl:px-20 h-20 flex justify-between items-center border-b border-b-gray-200">
        <Image src="/thedigiseedlogo.svg" alt="logo" width={120} height={32} />

        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex gap-8">
            <li>About Us</li>
            <li>Services</li>
            <li>Works</li>
          </ul>
          <div className="hidden lg:block">
            <Button type={"contained"}>Become a Client</Button>
          </div>
        </div>
        {open ? (
          <Image
            src="/close.svg"
            alt="menu"
            width={24}
            height={24}
            className="lg:hidden"
            onClick={handleMenu}
          />
        ) : (
          <Image
            src="/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="lg:hidden"
            onClick={handleMenu}
          />
        )}
      </div>
      {/* Menu slider */}
      {open && (
        <div className="bg-[#f4f4f4] h-dvh">
          <div className="container mx-auto p-6">
            <ul className="mb-6">
              <li className="py-4 border-b-1 border-gray-200">About Us</li>
              <li className="py-4 border-b-1 border-gray-200">Services</li>
              <li className="py-4 border-b-1 border-gray-200">Works</li>
            </ul>
            <div className="">
              <Button type={"contained"}>Become a Client</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
