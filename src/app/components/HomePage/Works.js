import Button from "../common/button/Button";
const Works = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-start justify-between">
          <h2>
            Turn your ideas into impactful <br />
            <span className="opacity-50">Solutions like them!</span>
          </h2>
          <Button type={"contained"}>Start your Project</Button>
        </div>
        <div className="flex gap-24">
          <div className="basis-1/2">
            <div className="w-full h-[400px] bg-gray-300">1</div>
            <div className="w-full mt-24 h-[400px] bg-gray-300">2</div>
          </div>
          <div className="basis-1/2">
            <div className="w-full mt-24 h-[400px] bg-gray-300">1</div>
            <div className="w-full mt-24 h-[400px] bg-gray-300">2</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Works;
