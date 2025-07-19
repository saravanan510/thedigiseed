import Image from "next/image";
const Testimonial = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        <h3 className="mb-8">Client Testimonials</h3>
        <div className="flex gap-6">
          <div className="bg-[#fafafa] flex items-center rounded-2xl w-[1000px]">
            <div className="w-48 h-48 flex justify-center items-center flex-1/3 ">
              <Image src="/thedigiseedlogo.svg" width={100} height={100} />
            </div>
            <div className="p-4">
              <p className="text-lg mb-4">
                We build more than just websites; we craft digital experiences
                designed to attract, engage, and convert your ideal customers.
              </p>
              <div>
                <p className="font-semibold">Lorem Ipsum</p>
                <p className="text-sm">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
