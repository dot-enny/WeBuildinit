import { Benefits } from "./landing/Benefits";
import { Faq } from "./landing/Faq";
import { Footer } from "./landing/Footer";
import { Hero } from "./landing/Hero";

const Landing = () => {


  return (
    <div className="max-w-[1440px] md:w-[85%] max-sm:px-4 mx-auto">
      <Hero />
      <Benefits />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
