// import { jbc } from "@reown/appkit/networks";
// import { useAppStateStore } from "../lib/AppStateStore";
import { useNavigate } from "react-router-dom";
import { Benefits } from "./landing/Benefits";
import ConnectWallet from "./landing/ConnectWallet";
import { Faq } from "./landing/Faq";
import { Footer } from "./landing/Footer";
import { Hero } from "./landing/Hero";
import { GoogleLogin } from "@react-oauth/google"

const Landing = () => {

  // const { walletAddress } = useAppStateStore();
  const navigate = useNavigate();

  return (
    <div className="bg-[#040404]">
      <GoogleLogin onSuccess={(credentialResponse) => { navigate('/tasks'); console.log(credentialResponse) }} onError={() => console.log('login failed')} />
      <Hero />
      <div className="max-w-[1440px] md:w-[85%] max-sm:px-4 mx-auto">
        <Benefits />
        <Faq />
        <Footer />
      </div>
      {/* {
        walletAddress === '' && */}
        <ConnectWallet />
      {/* } */}
    </div>
  );
};

export default Landing;
