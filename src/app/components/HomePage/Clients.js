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
    <section className="!py-8 sm:!py-10 md:!py-12 mt-2 sm:mt-4">
      <div className="mx-auto px-4 sm:px-6 2xl:px-20">
        <h4 className="mb-4 sm:mb-6 md:mb-8 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-2">
          Trusted By Clients Worldwide
        </h4>
        <div className="-mx-4 sm:mx-0 overflow-x-auto md:overflow-x-hidden pb-2 scrollbar-hide snap-x snap-mandatory">
          <ul className="flex justify-start md:justify-between items-center gap-8 sm:gap-10 md:gap-10 lg:gap-12 px-4 sm:px-0 min-w-max md:min-w-0 md:w-full">
            {clientLogos.map((client) => (
              <li
                key={client.id}
                className="flex-shrink-0 snap-center w-16 sm:w-20 md:w-24 lg:w-28"
              >
                <Image
                  src={client.src}
                  width={112}
                  height={42}
                  alt={client.alt}
                  className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
