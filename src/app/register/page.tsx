"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OtpInput from 'react-otp-input';
import axios from "axios";
import { z } from 'zod'; 
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify'; 
import { useAuth, useOTP } from "@/store";
import { useProfileButton } from "@/hooks/useProfileButton";
import { NavBar } from "@/components";
import { useForm } from 'react-hook-form'; 
import { API_URL } from "@/libs/utils";
import TakshashilaText from "../../../public/takshashila-text-2024.svg";
import TakshashilaLogo from "../../../public/register-logo.svg";
import Year from "../../../public/2024-travel.svg";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { login } = useProfileButton();
  const { auth } = useAuth();
  const OTP = useOTP((state)=>state.otp);
  const router = useRouter();

  const [verifyOtp, setOtpVerify] = useState(false)
  const [otp, setOtp] = useState('');

  const schema = z.object({
    name: z.string().min(4).max(50),
    college: z.string().min(3),
    mobile: z.string().length(10),
  });

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (errors.name) {
      toast.error("name should have min of 4 letters");
    }
    if (errors.college) {
      toast.error("College name should have min of 3 letters");
    }
    if (errors.mobile) {
      toast.error("mobile no should contain 10 digits");
    }
    if (errors.email) {
      toast.error("Invalid email");
    }
  }, [errors])

  const onSubmit = async (data:any) => {
    try {
      await schema.validateAsync(data); 
      if (auth?.verified) {
        const postData = { ...data, phone_no: data.mobile }; 
        const response = await axios.post(
          `${API_URL}/user`,
          postData,
          { headers: { authorization: `Bearer ${auth?.access_token}` } }
        );
        if (response.status === 200) router.push("/event-list");
      } else {
        setOtpVerify(true);
      }
    } catch(err){
      toast.error("error occured")
    }
  };

  const checkOTP = () => {
    if (otp === OTP) {
      setOtpVerify(true);
      console.log("Verified");
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <main className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
      <NavBar />
      {verifyOtp ? (
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
      ) : (
        <section className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-5 lg:snap-start">
          <div className="relative w-[70vw] h-[70vh] bg-[#FAFAFA] rounded-lg overflow-hidden">
            <div className="bg-[#D9D9D9] h-[50px] border rounded-tr-lg rounded-tl-lg w-[100%]">
              <Image
                className="pt-2 pl-5"
                alt="takshashila-text"
                src={TakshashilaText}
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}> 
              <div className="ml-5 text-xl md:text-2xl lg:text-3xl font-passport">
                <div className="ml-5 my-[1.5rem] sm:my-[30px] font-passport">
                  <input
                    type="text"
                    placeholder="name"
                    {...register('name', { required: true })} 
                    className="bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1"
                  />
                </div>
                <div className="ml-5 my-[1.5rem] sm:my-[30px] font-passport">
                  from{" "}
                  <input
                    type="text"
                    placeholder="College"
                    {...register('college', { required: true })}
                    className="bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1"
                  />
                </div>
                <div className="ml-5 my-[1.5rem] sm:my-[30px]  font-passport">
                  <input
                    type="text"
                    placeholder="mobile"
                    {...register('mobile', { required: true })}
                    className="bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1"
                  />
                </div>
                <div className="ml-5 mt-[1rem] mb-[0.5rem] sm:my-[30px]">
                  <span className="font-passport">{auth.email}</span>
                </div>
                <div className="flex ml-5 flex-row font-bold  pr-5 align-center flex-wrap gap-2 md:gap-6 text-[20px] sm:text-xl md:text-2xl lg:text-3xl w-[90%] justify-center mb-[20px] items-center font-passport">
                  <div className="z-30">GENERAL</div>
                  <div className="z-30">WORKSHOP</div>
                  <div className="z-30">PRO-SHOW</div>
                  <button
                    type="submit" 
                    className="rounded-lg p-2 bg-[#1E1E1E] z-[50] text-[#FFFFFF]"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
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
      )}
      <ToastContainer />
    </main>
  );
};

export default Register;
