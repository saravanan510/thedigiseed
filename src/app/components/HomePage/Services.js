import Button from "../common/button/Button";
const Services = () => {
  return (
    <section>
      <div className="container mx-auto px-6 2xl:px-20 flex">
        <div className="basis-1/2">
          <h2>Website Design</h2>
        </div>
        <div className="basis-1/2">
          <div className="w-full h-56 rounded-xl flex justify-center items-center bg-gray-200 mb-6">
            image/video
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <ul className="my-6 text-2xl font-medium ">
            <li className="py-4 border-b-1 border-gray-300">
              Responsive Design & UI/UX
            </li>
            <li className="py-4 border-b-1 border-gray-300">
              CMS & Custom Development
            </li>
            <li className="py-4 border-b-1 border-gray-300">
              Performance & Security Optimized
            </li>
          </ul>
          <Button type={"contained"}>Website Design</Button>
        </div>
      </div>
    </section>
  );
};
export default Services;
