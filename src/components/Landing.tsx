// import { jbc } from "@reown/appkit/networks";
// import { useAppStateStore } from "../lib/AppStateStore";
import { useNavigate } from "react-router-dom";
import { Benefits } from "./landing/Benefits";
import ConnectWallet from "./landing/ConnectWallet";
import { Faq } from "./landing/Faq";
import { Footer } from "./landing/Footer";
import { Hero } from "./landing/Hero";
import { GoogleLogin } from "@react-oauth/google"
import { BASE_URL } from "../lib/services";
// import { useState } from "react";
import { useAppStateStore } from "../lib/AppStateStore";
import { useState, useEffect } from "react";

const Landing = () => {

  const { setUserId } = useAppStateStore();
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false); // Add state variable

  const getGoogleLogin = async (credentialResponse: any) => {
    const requestBody = { token: credentialResponse.credential }
    setRedirecting(true);
    try {
      const response = await fetch(`${BASE_URL}users/auth/google`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentialResponse.credential
        },
        method: 'POST',
        body: JSON.stringify(requestBody),
        redirect: 'follow',
        credentials: 'include'
      });
      const data = await response.json();
      setUserId(data.user_id)
    } catch (error) {
      console.log('error fetching user', error)
    } finally {
      setRedirecting(false);
  }

    useEffect(() => {
        if (user_id && !redirecting) { // Redirect only if user_id is set *and* we're not already redirecting
          navigate('/lists');
        }
      }, [user_id, navigate, redirecting]);

  return (
    <div className="bg-[#040404]">
      <GoogleLogin
        onSuccess={getGoogleLogin}
        onError={() => console.log('login failed')}
        auto_select={true}
      />
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
