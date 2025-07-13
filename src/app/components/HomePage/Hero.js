"use client";
import Button from "../common/button/Button";
const Hero = () => {
  return (
    <div className="flex items-center my-30">
      <div>
        <h1>Design. Develop. Market. Grow.</h1>
        <h5>
          At TheDigiSeed, we build digital ecosystems design, development,
          marketing, and maintenance to help your business thrive online.
        </h5>
        <div className="flex gap-4 mt-8">
          <Button type={"contained"}>Let&apos;s Grow</Button>
          <Button>See Our Works</Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
