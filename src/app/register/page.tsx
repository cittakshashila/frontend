"use client"
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TakshashilaText from '../../../public/takshashila-text-2024.svg';
import TakshashilaLogo from '../../../public/register-logo.svg';
import WorldMap from '../../../public/world-map-bg.svg';
import Year from '../../../public/2024-travel.svg';


const schema = z.object({
  name: z.string().min(4).max(50),
  email: z.string().email(),
  college: z.string().min(3),
  mobile: z.string().min(10).max(10),
});


const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });


  const onSubmit = (data) => {
    console.log(data);
  };

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
  }, [errors]); 
    return (
    <main className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
      <section data-section className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-5 lg:snap-start"> 
        <ToastContainer
          toastClassName="error-toast" 
        />

        <div className="fixed min-w-[70vw] max-w-[70vw] h-[70vh] bg-[#FAFAFA] rounded-lg overflow-x-hidden overflow-y-hidden">
          <div className="bg-[#D9D9D9] h-[50px] border rounded-tr-lg rounded-tl-lg w-[100%]">
            <Image
              className="pt-2 pl-5"
              alt="takshashila-text" 
              src={TakshashilaText}
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="ml-5 text-xl md:text-2xl lg:text-3xl font-passport flex flex-col justify-around gap-[1rem] sm:gap-[2.5rem] flex-start"
          >
            <div className="ml-5 z-50 mt-3 font-passport flex">
              <input
                type="text"
                placeholder="name"
                {...register('name')}
                className="bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1"
              />
            </div>
            <div className="ml-5 z-50 font-passport flex flex-wrap flex-row">
              from{' '}
              <input
                type="text"
                placeholder="college"
                {...register('college')}
                className="sm:pl-5 bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1"
              />{' '}
              to chennai institute of technology
            </div>
            <div className="ml-5 z-50 font-passport flex">
              <input
                type="number"
                placeholder="mobile no"
                {...register('mobile')}
                className="bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1"
              />
            </div>
            <div className="ml-5 z-50 font-passport flex">
              <input
                type="email"
                placeholder="email"
                {...register('email')}
                className="bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1"
              />
            </div>
            <div className="flex ml-5 flex-row font-bold pr-5 align-center flex-wrap gap-2 md:gap-6 text-[20px] sm:text-xl md:text-2xl lg:text-3xl w-[90%] justify-center mb-[20px] items-center font-passport">
              <div className="z-30">GENERAL</div>
              <div className="z-30">WORKSHOP</div>
              <div className="z-30">PRO-SHOW</div>
              <button
                type="submit"
                className="rounded-lg p-2 bg-[#1E1E1E] z-50 text-[#FFFFFF]"
              >
                Register
              </button>
            </div>
          </form>
          <Image
            className="absolute top-0 sm:right-[10%] w-fit h-[140%] opacity-[60%]"
            src={TakshashilaLogo}
            alt="Takshashila-logo"
          />
          <Image
            className="absolute z-10 h-[120%] w-[100%] bottom-[1%] sm:h-[140%] md:h-[130%] lg:h-[100%] opacity-[70%]"
            src={WorldMap}
            alt="World-Map"
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
