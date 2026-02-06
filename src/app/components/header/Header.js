"use client";
import Image from "next/image";
import Button from "../common/button/Button";
import { useState, useEffect } from "react"; // Import useEffect

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
        <header className="top-0 z-50 border-b border-b-gray-200">
          {/* <div className="container px-6 mx-auto h-16 sm:h-20 flex justify-between items-center">  */}
          <div className="w-full max-w-screen-2xl px-6 mx-auto h-16 sm:h-20 flex justify-between items-center">        
            <Image src="/thedigiseedlogo.svg" alt="logo" width={120} height={32} />

        <div className="flex items-center gap-8 ">
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
        <div className="bg-[#f4f4f4] h-dvh w-full top-20 absolute z-50">
          <div className="container mx-auto p-6">
            <ul className="mb-6">
              <li className="py-4 border-b border-gray-200">About Us</li>
              <li className="py-4 border-b border-gray-200">Services</li>
              <li className="py-4 border-b border-gray-200">Works</li>
            </ul>
            <div className="">
              <Button type={"contained"}>Become a Client</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
