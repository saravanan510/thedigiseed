import Hero from "./components/HomePage/Hero";
import Clients from "./components/HomePage/Clients";

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-0">
      <Hero />
      <Clients />
    </div>
  );
}
