import Hero from "./components/HomePage/Hero";
import Clients from "./components/HomePage/Clients";
import Banner from "./components/HomePage/Banner";
import About from "./components/HomePage/About";
import Services from "./components/HomePage/Services";
import Works from "./components/HomePage/Works";
import Process from "./components/HomePage/Process";
import Testimonial from "./components/HomePage/Testimonial";
import Teams from "./components/HomePage/Teams";
import CTA from "./components/HomePage/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Banner />
      <About />
      <Services />
      <Works />
      <Process />
      <Testimonial />
      <Teams />
      <CTA />
    </div>
  );
}
