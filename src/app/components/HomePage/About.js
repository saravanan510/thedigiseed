import Button from "../common/button/Button";
const About = () => {
  return (
    <section>
      <div className="container mx-auto px-6 2xl:px-20 flex flex-col items-center">
        <h3 className="w-9/12 text-center mb-6 ">
          Many business owners pour their hearts into their work, only to find
          their websites don&apos;t reflect that dedication. At TheDigiSeed, we
          transform underperforming websites into vibrant platforms that truly
          connect with your audience, aligning with your mission and supporting
          your growth.
        </h3>
        <Button type={"contained"}>Let&apos;s Grow</Button>
      </div>
    </section>
  );
};
export default About;
