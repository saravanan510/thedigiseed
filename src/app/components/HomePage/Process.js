import Button from "../common/button/Button";
import Image from "next/image";
const Process = () => {
  return (
    <section>
      <div className="container mx-auto px-6 2xl:px-20">
        <div className="mb-16 flex items-start justify-between">
          <h2>
            We deliver on time, in <br />
            <span className="opacity-50">days and weeks</span>
          </h2>
          <Button type={"contained"}>Let&apos;s Grow</Button>
        </div>
        <div class="grid grid-cols-6 gap-4">
          <div class="col-span-3 bg-[#fafafa] flex rounded-2xl">
            <div className="flex-1 p-8">
              <h4 className="mb-1">Onboard in 1 day</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={"/onboard.svg"} width={260} height={260} />
            </div>
          </div>
          <div class="col-span-3 bg-[#fafafa] flex rounded-2xl">
            <div className="flex-1 p-8">
              <h4 className="mb-1">Understand scope & strategy</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={"/strategy.svg"} width={260} height={260} />
            </div>
          </div>

          <div class="col-span-2 bg-[#fafafa] rounded-2xl">
            <div className="flex-1 p-8">
              <h4 className="mb-1">First design in 4-7 days</h4>
              <p>Lorem Ipsum is simply dummy.</p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={"/Design.svg"} width={330} height={180} />
            </div>
          </div>
          <div class="col-span-2 bg-[#fafafa] rounded-2xl">
            <div className="flex-1 p-8">
              <h4 className="mb-1">Website development in 10</h4>
              <p>Lorem Ipsum is simply dummy.</p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={"/Development.svg"} width={330} height={180} />
            </div>
          </div>
          <div class="col-span-2 bg-[#fafafa] rounded-2xl">
            <div className="flex-1 p-8">
              <h4 className="mb-1">Final launch</h4>
              <p>Lorem Ipsum is simply dummy.</p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={"/Launch.svg"} width={330} height={180} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
