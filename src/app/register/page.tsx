"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OtpInput from "react-otp-input";
import axios from "axios";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useAuth, useOTP } from "@/store";
import { useProfileButton } from "@/hooks/useProfileButton";
import { NavBar } from "@/components";
import { useForm } from "react-hook-form";
import { API_URL, cn } from "@/libs/utils";
import TakshashilaText from "../../../public/takshashila-text-2024.svg";
import TakshashilaLogo from "../../../public/register-logo.svg";
import Map from "../../../public/world-map-bg.webp";
import Year from "../../../public/2024-travel.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { error } from "console";

const Register = () => {
  const { login } = useProfileButton();
  const { auth, setVerificationStatus } = useAuth();
  const OTP = useOTP((state) => state.otp);
  const router = useRouter();

  const [verifyOtp, setOtpVerify] = useState(false);
  const [otp, setOtp] = useState("");

  const formSchema = z.object({
    name: z
      .string({ required_error: "Name feild is required" })
      .min(4, "Name should be atleast 4 characters")
      .max(15, "Name should be atmost 15 characters"),
    college: z
      .string({ required_error: "Collage feild is required" })
      .min(3, "Collage Name should be atleast 3 characters")
      .max(50, "Collage Name should be atmost 50 characters"),
    mobile: z
      .string({ required_error: "Mobile Number is required" })
      .length(10, "Invalid mobile number"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Not a valid email"),
  });

  type UserType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserType>({
    resolver: zodResolver(formSchema.omit({ email: true })),
  });

  useEffect(() => {
    if (errors.name) {
      toast.error(errors.name.message);
    } else if (errors.college) {
      toast.error(errors.college.message);
    } else if (errors.mobile) {
      toast.error(errors.mobile.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    }
  }, [errors]);

  const onSubmit = async (user: UserType) => {
    try {
      if (auth?.verified) {
        const data = await axios.post(
          `${API_URL}/user`,
          {
            name: user.name,
            clg_name: user.college,
            phone_no: user.mobile,
          },
          {
            headers: { authorization: `Bearer ${auth?.access_token}` },
          },
        );
        if (data.status === 200) {
          await axios.post(`${API_URL}/support/registered`, {
            name: auth?.name,
            email: auth?.email,
          });
          router.push("/events");
        }
      } else {
        setOtpVerify(true);
        await axios.post(`${API_URL}/support/sendotp`, {
          otp: OTP,
          email: auth?.email,
        });
      }
      reset();
    } catch (err: any) {
      console.log(err);
    }
  };

  const checkOTP = () => {
    if (otp === OTP) {
      setOtpVerify(false);
      setVerificationStatus();
    } else {
      toast.error("Invalid OTP");
    }
  };

  if (!auth) {
    login();
    return (
      <main className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen md:snap-y md:snap-mandatory overflow-x-hidden">
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <span className="font-passport text-white text-3xl">
            Click Login and Fill this for to complete Registeration
          </span>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen md:snap-y md:snap-mandatory overflow-x-hidden">
      <NavBar />
      {verifyOtp ? (
        <section className="w-[100vw] h-[100vh] flex justify-center items-center">
          <div className="bg-[rgba(0,0,0,0.5)] text-[#fafafa] p-5">
            <div className="text-3xl font-oranienbaum py-5 text-center">
              Enter your OTP
            </div>
            <div className="flex justify-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span> </span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "3rem",
                  height: "4rem",
                  margin: "20px 0.5rem",
                  fontSize: "1.5rem",
                  borderRadius: 4,
                  backgroundColor: "rgba(0,0,0,0.3)",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              />
            </div>
            <div className="text-center font-oranienbaum my-3 text-lg">
              We have sent you the OTP through mail
            </div>
            <div className="text-center font-oranienbaum my-3 text-lg">
              Do not refresh this page
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[rgb(230,230,230)] text-black py-2 px-5 text-xl mb-5"
                onClick={() => checkOTP()}
              >
                Verify
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className=" relative w-full max-w-4xl h-full overflow-hidden flex flex-col items-center justify-center p-5 py-20 mx-auto">
          <section className="relative bg-white w-full rounded-lg overflow-clip">
            <section className="bg-[#D9D9D9] p-2 w-full h-14">
              <Image src={TakshashilaText} alt="takshashila-text" />
            </section>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" min-h-80 md:min-h-96 p-5 bg-[#f0f0f0] flex flex-col space-y-2 md:space-y-4"
            >
              <input
                type="text"
                placeholder="name"
                {...register("name")}
                className={cn(
                  "min-h-9 max-w-40 md:max-w-56 bg-transparent text-xl md:text-4xl font-mono border-slate-500 border-b-2 focus:outline-0",
                  errors.name && "border-red-500",
                )}
              />

              <span className="space-x-4 ">
                <h1 className="inline-block font-mono text-xl md:text-4xl text-grey">
                  from
                </h1>
                <input
                  type="text"
                  placeholder="collage"
                  {...register("college")}
                  className={cn(
                    "min-h-9 max-w-40 md:max-w-80 bg-transparent text-xl md:text-4xl font-mono border-slate-500 border-b-2 focus:outline-0",
                    errors.college && "border-red-500",
                  )}
                />
              </span>

              <input
                type="text"
                placeholder="mobile"
                className={cn(
                  "min-h-9 max-w-40 md:max-w-48 bg-transparent text-xl font-mono md:text-4xl border-slate-500 border-b-2 focus:outline-0",
                  errors.mobile && "border-red-500",
                )}
                {...register("mobile")}
              />
              <h1 className="font-mono text-xl font-bold textcenter md:text-4xl pt-4">
                {auth.email}
              </h1>

              <br />
              <button
                type="submit"
                className="bg-grey justify-self-end text-cream max-w-32 py-2 rounded-md font-mono hover:bg-gray-700 md:py-4 md:text-xl"
                disabled={isSubmitting}
              >
                Register
              </button>
            </form>

            <Image
              className="pointer-events-none scale-[200%] md:scale-150 object-contain object-center md:translate-y-16 md:translate-x-16 opacity-30"
              src={TakshashilaLogo}
              fill
              alt="takshashila-logo"
            />
            <Image
              alt="2024-year"
              src={Year}
              className="absolute pointer-events-none w-20 h-20 md:w-32 md:h-32 top-10 right-10 opacity-75"
            />

            <Image
              alt="2024-year"
              src={Map}
              fill
              className="absolute object-cover object-center pointer-events-none w-20 h-20 md:w-32 md:h-32 top-10 right-10 opacity-50"
            />
          </section>
        </section>
      )}
      <ToastContainer />
    </main>
  );
};

export default Register;
