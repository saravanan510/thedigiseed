import Hero from "./components/HomePage/Hero";
import Clients from "./components/HomePage/Clients";
import Banner from "./components/HomePage/Banner";
import About from "./components/HomePage/About";
import Services from "./components/HomePage/Services";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-6 md:px-0">
        <Hero />
        <Clients />
      </div>
      <Banner />
      <div className="container mx-auto px-6 md:px-0">
        <About />
        <Services />
      </div>
    </div>
  );
}
