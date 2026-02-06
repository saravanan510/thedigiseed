import Button from "../common/button/Button";
import Image from "next/image";

const Process = () => {
  return (
    <section>
      <div className="mx-auto px-6 2xl:px-20">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 lg:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We deliver on time, in <br className="hidden sm:block" />
            <span className="opacity-50">days and weeks</span>
          </h2>
          <Button type={"contained"}>
            <span className="text-sm md:text-base lg:text-lg whitespace-nowrap">
              Let&apos;s Grow
            </span>
          </Button>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {/* First Row - 2 Cards */}
          <div className="sm:col-span-2 lg:col-span-3 bg-[#fafafa] flex flex-col md:flex-row rounded-2xl overflow-hidden">
            <div className="flex-1 p-6 md:p-8">
              <h4 className="mb-1 text-lg sm:text-xl md:text-2xl font-semibold">
                Onboard in 1 day
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center p-4 md:p-0">
              <Image 
                src={"/onboard.svg"} 
                width={260} 
                height={260} 
                alt="Onboard"
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60"
              />
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 bg-[#fafafa] flex flex-col md:flex-row rounded-2xl overflow-hidden">
            <div className="flex-1 p-6 md:p-8">
              <h4 className="mb-1 text-lg sm:text-xl md:text-2xl font-semibold">
                Understand scope & strategy
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center p-4 md:p-0">
              <Image 
                src={"/strategy.svg"} 
                width={260} 
                height={260} 
                alt="Strategy"
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60"
              />
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="sm:col-span-2 lg:col-span-2 bg-[#fafafa] rounded-2xl overflow-hidden flex flex-col">
            <div className="flex-1 p-6 md:p-8">
              <h4 className="mb-1 text-lg sm:text-xl md:text-2xl font-semibold">
                First design in 4-7 days
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                Lorem Ipsum is simply dummy.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end p-4">
              <Image 
                src={"/Design.svg"} 
                width={330} 
                height={180} 
                alt="Design"
                className="w-full h-auto max-w-[280px] sm:max-w-[330px]"
              />
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-2 bg-[#fafafa] rounded-2xl overflow-hidden flex flex-col">
            <div className="flex-1 p-6 md:p-8">
              <h4 className="mb-1 text-lg sm:text-xl md:text-2xl font-semibold">
                Website development in 10
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                Lorem Ipsum is simply dummy.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end p-4">
              <Image 
                src={"/Development.svg"} 
                width={330} 
                height={180} 
                alt="Development"
                className="w-full h-auto max-w-[280px] sm:max-w-[330px]"
              />
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-2 bg-[#fafafa] rounded-2xl overflow-hidden flex flex-col">
            <div className="flex-1 p-6 md:p-8">
              <h4 className="mb-1 text-lg sm:text-xl md:text-2xl font-semibold">
                Final launch
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                Lorem Ipsum is simply dummy.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end p-4">
              <Image 
                src={"/Launch.svg"} 
                width={330} 
                height={180} 
                alt="Launch"
                className="w-full h-auto max-w-[280px] sm:max-w-[330px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
