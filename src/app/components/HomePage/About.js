import Button from "../common/button/Button";
const About = () => {
  return (
    <div className="py-20 w-2/3 mx-auto flex flex-col items-center gap-6">
      <h3 className="text-center ">
        You pour your heart into your business every day and we see how much it
        matters. If your website isn’t reflecting that love and effort, you’re
        not alone. At TheDigiSeed, we turn underperforming websites into vibrant
        spaces that truly connect with your audience and support your growth.
        You deserve a site that aligns with your mission — let’s build that
        together.
      </h3>
      <Button type={"contained"}>Let&apos;s Grow</Button>
    </div>
  );
};
export default About;
