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
      <div className="container mx-auto px-6 mt-16">
        <h1>We don&apos;t design, We solve.</h1>
        <h1>
          From digital ideas to your next{" "}
          <span className="font-semibold">Launch</span>
        </h1>
        <div className="flex gap-4 mt-8">
          <Button type={"contained"}>Let&apos;s Grow</Button>
          <Button>See Our Works</Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
