import Button from "../common/button/Button";
const CTA = () => {
  return (
    <section className="bg-black">
      <div className="text-center text-white flex flex-col items-center">
        <p>Have a project in mind?</p>
        <h1 className="text-white w-full my-4">Design. Develop. Launch.</h1>
        <Button type={"contained"}>Let&apos;s Grow</Button>
      </div>
    </section>
  );
};
export default CTA;
