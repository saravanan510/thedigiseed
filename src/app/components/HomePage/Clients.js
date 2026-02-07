"use client";
import Image from "next/image";

const Clients = () => {
  const clientLogos = [
    { id: 1, src: "https://www.creativepoint.in/wp-content/uploads/2025/05/cln-3.png", alt: "Rotary Club" },
    { id: 2, src: "https://www.creativepoint.in/wp-content/uploads/2025/05/cln-1.png", alt: "Client 2" },
    { id: 3, src: "https://www.creativepoint.in/wp-content/uploads/2025/06/cln-4.png", alt: "Client 3" },
    { id: 4, src: "https://www.creativepoint.in/wp-content/uploads/2025/05/cln-6.png", alt: "Client 4" },
    { id: 5, src: "https://www.creativepoint.in/wp-content/uploads/2025/06/cln-8.png", alt: "Client 5" },
    { id: 6, src: "https://www.creativepoint.in/wp-content/uploads/2025/05/cln-9.svg", alt: "Client 6" },
    { id: 7, src: "https://www.creativepoint.in/wp-content/uploads/2025/06/cln-11.png", alt: "Client 7" },
  ];

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
      <div className="mx-auto px-6 2xl:px-20">
        <h4 className="mb-6 sm:mb-8 md:mb-10 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Trusted By Clients Worldwide
        </h4>
        <div className="overflow-x-hidden overflow-y-hidden pb-4 scrollbar-hide">
          <ul className="flex justify-start md:justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 min-w-max md:min-w-0">
            {clientLogos.map((client) => (
              <li
                key={client.id}
                className="flex-shrink-0 w-16 min-w-[64px] sm:w-20 sm:min-w-[80px] md:w-24 md:min-w-[96px] lg:w-28 lg:min-w-[112px]"
              >
                <Image
                  src={client.src}
                  width={112}
                  height={42}
                  alt={client.alt}
                  className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                 unoptimized/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;