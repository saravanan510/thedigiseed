import Image from "next/image";

const Teams = () => {
  return (
    <section>
      <div className="mx-auto px-6 2xl:px-20">
        <h3 className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Meet Our Team
        </h3>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 lg:gap-12">
          {/* Team Names List */}
          <div className="w-full md:w-auto md:flex-1 md:max-w-[800px]">
            <ul className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              <li className="py-2 md:py-3 hover:text-blue-600 transition-colors cursor-pointer">
                David Carson
              </li>
              <li className="py-2 md:py-3 hover:text-blue-600 transition-colors cursor-pointer">
                David Carson
              </li>
              <li className="py-2 md:py-3 hover:text-blue-600 transition-colors cursor-pointer">
                David Carson
              </li>
              <li className="py-2 md:py-3 hover:text-blue-600 transition-colors cursor-pointer">
                David Carson
              </li>
              <li className="py-2 md:py-3 hover:text-blue-600 transition-colors cursor-pointer">
                David Carson
              </li>
            </ul>
          </div>

          {/* Team Member Image */}
          <div className="w-full md:w-auto flex justify-center md:justify-end flex-shrink-0">
            <Image 
              src={"/profile.png"} 
              width={200} 
              height={200} 
              alt="Team member profile"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;