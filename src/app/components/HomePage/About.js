import Button from "../common/button/Button";

const About = () => {
  return (
    <section>
      <div className="mx-auto px-6 2xl:px-20 flex flex-col items-center">
        <h3 className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 text-center mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium text-gray-700">
          Many business owners pour their hearts into their work, only to find
          their websites don&apos;t reflect that dedication. At TheDigiSeed, we
          transform underperforming websites into vibrant platforms that truly
          connect with your audience, aligning with your mission and supporting
          your growth.
        </h3>
        <Button type={"contained"}>
          <span className="text-sm md:text-base lg:text-lg">
            Let&apos;s Grow
          </span>
        </Button>
      </div>
    </section>
  );
};

export default About;