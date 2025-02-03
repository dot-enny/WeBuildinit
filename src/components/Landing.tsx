import { Benefits } from "./landing/Benefits";
import { Faq } from "./landing/Faq";
import { Footer } from "./landing/Footer";
import { Hero } from "./landing/Hero";

const Landing = () => {


  return (
    // <div className="">
      <div className="bg-[#222222]">
        <Hero />
        <div className="max-w-[1440px] md:w-[85%] max-sm:px-4 mx-auto">
          <Benefits />
          <Faq />
          <Footer />
        </div>
      </div>
    // </div>
  );
};

export default Landing;
