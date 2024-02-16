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
import { useAuth } from "@/store";

const Register = () => {
  const { activeSection } = useHighlightScroll();
  const activeStyle = "border-cream";
  const defaultStyle =
    "no-underline	text-cream border border-transparent transition-all duration-200 p-[3px] rounded";
  const { login } = useProfileButton();
  const { auth } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [clg_name, setClgName] = useState("");
  const [phone_no, setPhoneNo] = useState("");

  const registerUser = async () => {
    try {
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
    } catch (err: any) {
      console.log(err);
    }
  };

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
      <section
        data-section
        className="relative w-full h-full overflow-hidden  flex flex-col items-center justify-center p-5 lg:snap-start "
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
    </main>
  );
};

export default Register;
