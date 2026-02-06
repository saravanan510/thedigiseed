"use client";
import Button from "../common/button/Button";

const Footer = () => {
  return (
    <section>
      <div className="mx-auto px-6 2xl:px-20">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row mb-10 md:mb-12 lg:mb-16 gap-8 md:gap-6">
          {/* Left Section - CTA */}
          <div className="flex-1">
            <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Let's Create Something Amazing!
            </h2>
            <Button type={"contained"}>
              <span className="text-sm md:text-base lg:text-lg">
                Let&apos;s Grow
              </span>
            </Button>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex-1 flex justify-start md:justify-end">
            <ul className="text-base md:text-lg lg:text-xl font-medium">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Linkedin
              </li>
              <li className="my-3 md:my-4 hover:text-blue-600 transition-colors cursor-pointer">
                Facebook
              </li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Instagram
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 py-6 border-t border-gray-200">
          {/* Copyright */}
          <div>
            <p className="text-sm md:text-base text-gray-600">
              © 2024 TheDigiSeed. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 text-sm md:text-base">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        {/* Optional Large Brand Text - Uncomment if needed */}
        {/* <div className="overflow-hidden">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[150px] xl:text-[200px] font-bold mt-12 md:mt-16 lg:mt-20 text-[#ebebeb] whitespace-nowrap">
            TheDigiSeed
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;