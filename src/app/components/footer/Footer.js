"use client";
import Button from "../common/button/Button";
const Footer = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        <div className="flex mb-16">
          <div className="flex-1/2">
            <h2 className="mb-6">Let’s Create Something Amazing!</h2>
            <Button type={"contained"}>Let&apos;s Grow</Button>
          </div>
          <div className="flex-1/2 flex justify-end">
            <ul className="">
              <li>Linkedin</li>
              <li className="my-4">Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>@copyrights</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-[200px] font-bold mt-20 text-[#ebebeb]">
            TheDigiSeed
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Footer;
