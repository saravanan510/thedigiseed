import Button from "../common/button/Button";
const Process = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-start justify-between">
          <h2>
            We deliver on time, in <br />
            <span className="opacity-50">days and weeks</span>
          </h2>
          <Button type={"contained"}>Let&apos;s Grow</Button>
        </div>
      </div>
    </section>
  );
};
export default Process;
