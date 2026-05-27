import Button from "../common/button/Button";

const ServicesData = [
  {
    title: "Website Design",
    image: "image/video",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Responsive Design & UI/UX",
      "CMS & Custom Development",
      "Performance & Security Optimized",
    ],
    buttonText: "Website Design",
  },
  {
    title: "Branding",
    image: "image/video",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Logo Design",
      "Visual Identity",
      "Branding Guidelines",
      "Communications",
    ],
    buttonText: "Branding",
  },
  {
    title: "Digital Marketing",
    image: "image/video",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Certified Google Partners",
      "Dedicated Account Managers",
      "Comperhensive reporting",
      "Full Service",
    ],
    buttonText: "Digital Marketing & SEO",
  },
  {
    title: "Mobile App Development",
    image: "image/video",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Responsive Design & UI/UX",
      "CMS & Custom Development",
      "Performance & Security Optimized",
    ],
    buttonText: "Mobile App Development",
  },
];

const Services = () => {
  return (
    <section>
      {ServicesData?.map((item, index) => (
        <div
          key={index}
          className="mx-auto px-4 sm:px-6 2xl:px-20 flex flex-col md:flex-row mb-10 sm:mb-12 md:mb-16 gap-6 md:gap-8 lg:gap-12"
        >
          <div className="basis-full md:basis-1/2 md:sticky md:top-24 md:self-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {item.title}
            </h2>
          </div>
          <div className="basis-full md:basis-1/2">
            <div className="w-full h-48 sm:h-56 md:h-64 rounded-xl flex justify-center items-center bg-gray-200 mb-4 sm:mb-6 text-gray-500 text-sm">
              {item.image}
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {item.description}
            </p>
            <ul className="my-4 sm:my-6">
              {item.features?.map((feature, idx) => (
                <li
                  key={idx}
                  className="py-3 sm:py-4 border-b border-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-semibold"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <div className="w-full sm:w-auto max-w-xs sm:max-w-none">
              <Button type={"contained"}>{item.buttonText}</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
