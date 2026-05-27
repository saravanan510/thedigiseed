import Button from "../common/button/Button";

const CTA = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 2xl:px-20 text-center text-white flex flex-col items-center gap-2 sm:gap-3">
        <p className="text-sm sm:text-base md:text-lg text-gray-300">
          Have a project in mind?
        </p>
        <h1 className="text-white !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl w-full max-w-2xl my-2 sm:my-4 leading-tight">
          Design. Develop. Launch.
        </h1>
        <div className="w-full sm:w-auto max-w-xs sm:max-w-none mt-2 sm:mt-4">
          <Button type={"contained"}>Let&apos;s Grow</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
