import Image from "next/image";

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 2xl:px-20">
        <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold">
          Client Testimonials
        </h3>
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="bg-[#fafafa] flex flex-col sm:flex-row items-center sm:items-stretch rounded-2xl w-full overflow-hidden">
            <div className="w-full sm:w-40 md:w-48 shrink-0 py-6 sm:py-0 flex justify-center items-center sm:flex-none">
              <Image
                src="/thedigiseedlogo.svg"
                width={100}
                height={100}
                alt="Client logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                We build more than just websites; we craft digital experiences
                designed to attract, engage, and convert your ideal customers.
              </p>
              <div>
                <p className="font-semibold text-sm sm:text-base">Lorem Ipsum</p>
                <p className="text-xs sm:text-sm text-gray-600">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
