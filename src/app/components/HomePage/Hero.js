"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { SplitText } from "gsap/SplitText";
import Button from "../common/button/Button";
gsap.registerPlugin(SplitText);

const Hero = () => {
  const titleRef = useRef();
  const splitTextRef = useRef(null);

  useGSAP(
    () => {
      if (titleRef.current) {
        splitTextRef.current = new SplitText(titleRef.current, {
          type: "words",
        });
        gsap.from(splitTextRef.current.words, {
          opacity: 0,
          y: -50,
          stagger: 0.09,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.3,
        });
      }
    },
    { scope: titleRef }
  );

  useEffect(() => {
    return () => {
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);

  return (
    <section>
<<<<<<< Updated upstream
      <div className="mx-auto px-6 2xl:px-20 my-5 sm:my-6 md:my-8 lg:my-10 xl:my-12"> 
        <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-tight md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.15]"
        >
          We don&apos;t design, We solve.
          <br className="hidden sm:block" />
          From digital ideas to your next{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Launch
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
          <Button type={"contained"}>
              Let&apos;s Grow
          </Button>
          <Button>
              See Our Works
          </Button>
=======
      <div className="container mx-auto px-6 2xl:px-20 mt-16">
        <h1 className="">
          We don&apos;t{" "}
          <span className="bg-[#fafafa] px-2 border-2 border-[#808080]">
            design
          </span>
          , We solve. <br /> From digital ideas to your next{" "}
          <span className="font-semibold">Launch</span>
        </h1>

        <div className="flex gap-4 mt-8">
          <Button type={"contained"}>Let&apos;s Grow</Button>
          <Button>See Our Works</Button>
>>>>>>> Stashed changes
        </div>
      </div>
    </section>
  );
};

export default Hero;