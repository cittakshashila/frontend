"use client";
import Image from "next/image";
import useHighlightScroll from "@/hooks/useHighlightScroll";
import TakshashilaText from "../../../public/takshashila-text-2024.svg";
import TakshashilaLogo from "../../../public/register-logo.svg";
import Year from "../../../public/2024-travel.svg";
import { useState } from "react";
import { useProfileButton } from "@/hooks/useProfileButton";
import { API_URL } from "@/libs/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth, useOTP } from "@/store";
import {User} from "@/libs/types";
import {NavBar} from "@/components";
import OtpInput from 'react-otp-input';

const Register = () => {
  const { activeSection } = useHighlightScroll();
  const activeStyle = "border-cream";
  const defaultStyle =
    "no-underline	text-cream border border-transparent transition-all duration-200 p-[3px] rounded";
  const { login } = useProfileButton();
  const { auth, setVerificationStatus } = useAuth();
  const OTP = useOTP((state)=>state.otp);
  const router = useRouter();

  const [name, setName] = useState("");
  const [clg_name, setClgName] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [verifyOtp, setOtpVerify] = useState(false)
  const [otp, setOtp] = useState('');

  const registerUser = async () => {
    console.log(auth)
    try {
      if(auth?.verified) {
        const data = await axios.post(
        `${API_URL}/user`,
            {
             name,
             clg_name,
             phone_no,
            },
            {
                headers: { authorization: `Bearer ${auth?.access_token}` },
            },
        );
        if (data.status === 200) router.push("/event-list");
      }else{
        console.log(OTP)
        setOtpVerify(true)
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const checkOTP = () => {
    if(otp === OTP) {
        setOtpVerify(true)
        console.log("Verified")
    }else{
        alert("OTP invalid")
    }
  }

  if (!auth) {
    login();
    return (
      <main className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <span className="font-passport text-white text-3xl">
            Click Login and Fill this for to complete Registeration
          </span>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-paint-effect bg-cover bg-center bg-[#272727]  h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
      <NavBar/>
      { verifyOtp ?
        <section className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="bg-[rgba(0,0,0,0.5)] text-[#fafafa] p-5">
                <div className="text-3xl font-oranienbaum py-5 text-center">Enter your OTP</div>
                    <div className="flex justify-center">
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span> </span>}
                          renderInput={(props) => <input {...props}/>}
                          inputStyle={{
                            width: '3rem',
                            height: '4rem',
                            margin: '20px 0.5rem',
                            fontSize: '1.5rem',
                            borderRadius: 4,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            border: '2px solid rgba(255,255,255,0.3)',
                          }}
                        />
                    </div>
                <div className="text-center font-oranienbaum my-3 text-lg">We have sent you the OTP through mail</div>
                <div className="text-center font-oranienbaum my-3 text-lg">Do not refresh this page</div>
                <div className="flex justify-center">
                    <button className="bg-[rgb(230,230,230)] text-black py-2 px-5 text-xl mb-5" onClick={()=>checkOTP()}>Verify</button>
                </div>
            </div>
        </section>
      : <section
        data-section
        className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-5 lg:snap-start"
      >
        <div className="relative w-[70vw] h-[70vh] bg-[#FAFAFA] rounded-lg overflow-hidden">
          <div className="bg-[#D9D9D9] h-[50px] border rounded-tr-lg rounded-tl-lg w-[100%]">
            <Image
              className="pt-2 pl-5"
              alt="takshashila-text"
              src={TakshashilaText}
            />
          </div>
          <div className="ml-5 text-xl md:text-2xl lg:text-3xl font-passport">
            <div className="ml-5 my-[1.5rem] sm:my-[30px] font-passport">
              <input
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="z-[100]"
              ></input>
            </div>
            <div className="ml-5 my-[1.5rem] sm:my-[30px] font-passport">
              from{" "}
              <input
                placeholder="College"
                value={clg_name}
                onChange={(e) => setClgName(e.target.value)}
              ></input>{" "}
              to chennai institute of technology
            </div>
            <div className="ml-5 my-[1.5rem] sm:my-[30px]  font-passport">
              <input
                placeholder="mobile"
                value={phone_no}
                onChange={(e) => setPhoneNo(e.target.value)}
              ></input>
            </div>
            <div className="ml-5 mt-[1rem] mb-[0.5rem] sm:my-[30px]">
              <span className="font-passport">{auth.email}</span>
            </div>
            <div className="flex ml-5 flex-row font-bold  pr-5 align-center flex-wrap gap-2 md:gap-6 text-[20px] sm:text-xl md:text-2xl lg:text-3xl w-[90%] justify-center mb-[20px] items-center font-passport">
              <div className="z-30">GENERAL</div>
              <div className="z-30">WORKSHOP</div>
              <div className="z-30">PRO-SHOW</div>
              <button
                className="rounded-lg p-2 bg-[#1E1E1E] z-[50] text-[#FFFFFF]"
                onClick={() => registerUser()}
              >
                Register
              </button>
            </div>
          </div>
          <Image
            className="absolute top-0 sm:right-[10%] w-fit h-[140%] opacity-[70%]"
            src={TakshashilaLogo}
            alt="Takshashila-logo"
          />
          <Image
            className="absolute right-16 top-16 lg:bottom-[30%] w-fit md:bottom-[50%] h-fit opacity-[70%]"
            src={Year}
            alt="World-Map"
          />
        </div>
      </section> 
      }
    </main>
  );
};

export default Register;
