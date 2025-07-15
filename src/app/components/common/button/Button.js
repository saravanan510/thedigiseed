"use client";
import Image from "next/image";
const Button = ({ children, type }) => {
  if (type == "contained") {
    return (
      <div className="bg-linear-to-t from-[#242424] to-[#000] text-white tracking-wide flex gap-2.5 max-w-fit rounded-[80px] p-1.5 pl-5 text-sm cursor-pointer shadow-lg ">
        <button className="cursor-pointer">{children}</button>
        <div className="bg-white rounded-4xl flex justify-center items-center w-[32px] h-[32px] ">
          <Image
            src="./arrow-narrow-right.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="border border-gray-300 h-11 flex justify-center rounded-[80px] w-[150px] text-base font-medium tracking-wide cursor-pointer">
        <button className="cursor-pointer">{children}</button>
      </div>
    );
  }
};
export default Button;
