import Image from "next/image";
const Teams = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        <h3 className="mb-8">Meet Our Team</h3>
        <div className="flex ">
          <div className="w-[800px]">
            <ul className="text-3xl font-semibold">
              <li className="py-2">David Carson</li>
              <li className="py-2">David Carson</li>
              <li className="py-2">David Carson</li>
              <li className="py-2">David Carson</li>
              <li className="py-2">David Carson</li>
            </ul>
          </div>
          <div>
            <Image src={"/profile.png"} width={200} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Teams;
