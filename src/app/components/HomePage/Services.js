import Button from "../common/button/Button";

const ServicesData = [
  {
    title: "Website Design",
    image:"image/video",
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
    image:"image/video",
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
    image:"image/video",
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
    image:"image/video",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Responsive Design & UI/UX",
      "CMS & Custom Development",
      "Performance & Security Optimized",
    ],
    buttonText: "Mobile App Development",
  },
]


const Services = () => {
  return (
    <section>
      {
        ServicesData?.map((item, index) => {
          return(
            <div key={index} className="mx-auto px-6 2xl:px-20 flex flex-col md:flex-row mb-16 gap-6 md:gap-8">
              <div className="basis-full md:basis-1/2 ">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{item.title}</h2>
              </div>
              <div className="basis-full md:basis-1/2">
                <div className="w-full h-56 rounded-xl flex justify-center items-center bg-gray-200 mb-6">
                  {item.image}
                </div>
                <p>
                  {item.description}
                </p>
                <ul className="my-6 text-2xl font-medium">
                  {
                    item.features?.map((feature, idx) => (
                   <li key={idx} className="py-4 border-b-1 border-gray-300 text-base md:text-2xl font-semibold">
                     {feature}
                   </li>
                    ))
                  }
                </ul>
                <Button type={"contained"}>{item.buttonText}</Button>
              </div>
            </div>
          )
        })
      }
    </section>
  );
};
export default Services;
