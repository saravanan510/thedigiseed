"use client";
import Image from "next/image";
import Link from "next/link";

const Button = ({ children, type, href }) => {
  const contained = (
    <div className="bg-linear-to-t from-[#242424] to-[#000] text-white tracking-wide flex gap-2 sm:gap-2.5 w-full sm:w-fit max-w-full rounded-[80px] p-1 sm:p-1.5 pl-4 sm:pl-5 text-xs sm:text-sm cursor-pointer shadow-lg">
      <span className="flex-1 sm:flex-none text-left sm:text-center py-1 sm:py-0">
        {children}
      </span>
      <div className="bg-white rounded-4xl flex justify-center items-center w-8 h-8 sm:w-[32px] sm:h-[32px] shrink-0">
        <Image
          src="./arrow-narrow-right.svg"
          alt=""
          width={20}
          height={20}
          className="sm:w-6 sm:h-6"
        />
      </div>
    </div>
  );

  const outlined = (
    <div className="border border-gray-300 min-h-11 h-auto py-2.5 flex justify-center items-center rounded-[80px] w-full sm:w-auto sm:min-w-[150px] px-6 font-medium tracking-wide text-xs sm:text-sm cursor-pointer">
      <span>{children}</span>
    </div>
  );

  const content = type === "contained" ? contained : outlined;

  if (href) {
    return (
      <Link href={href} className="inline-block w-full sm:w-auto">
        {content}
      </Link>
    );
  }

  return content;
};

export default Button;
