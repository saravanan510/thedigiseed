import Button from "../common/button/Button";

const Works = () => {
  return (
      <div className="mx-auto px-6 2xl:px-20 ">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 lg:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Turn your ideas into impactful <br className="hidden sm:block" />
            <span className="opacity-50">Solutions like them!</span>
          </h2>
          <Button type={"contained"}>
            <span className="text-sm md:text-base lg:text-lg">
              Start your Project
            </span>
          </Button>
        </div>

        {/* Works Grid */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="basis-full md:basis-1/2 flex flex-col gap-6 md:gap-12 lg:gap-24">
            <div className="w-full h-64 sm:h-80 md:h-[350px] lg:h-[400px] bg-gray-300 rounded-lg">
              1
            </div>
            <div className="w-full h-64 sm:h-80 md:h-[350px] lg:h-[400px] bg-gray-300 rounded-lg">
              2
            </div>
          </div>

          {/* Right Column */}
          <div className="basis-full md:basis-1/2 flex flex-col gap-6 md:gap-12 lg:gap-24 md:mt-12 lg:mt-24">
            <div className="w-full h-64 sm:h-80 md:h-[350px] lg:h-[400px] bg-gray-300 rounded-lg">
              3
            </div>
            <div className="w-full h-64 sm:h-80 md:h-[350px] lg:h-[400px] bg-gray-300 rounded-lg">
              4
            </div>
          </div>
        </div>
      </div>
  );
};

export default Works;
