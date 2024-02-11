"use client" ;
import {useState} from "react";
import Image from "next/image";
import useHighlightScroll from "@/hooks/useHighlightScroll";
import TakshashilaText from "../../../public/takshashila-text-2024.svg";
import TakshashilaLogo from "../../../public/register-logo.svg" ;
import WorldMap  from "../../../public/world-map-bg.svg" ;
import Year from "../../../public/2024-travel.svg";
const Register = () => {
  const { activeSection } = useHighlightScroll();
  const activeStyle = "border-cream";
  const defaultStyle =
    "no-underline	text-cream border border-transparent transition-all duration-200 p-[3px] rounded";

    const [name,setName] : string = useState("");
    const [email,setEmail] : string  = useState("");
    const [college,setCollege] : string = useState("");
    const [mobile,setMobile] : string = useState("");

  return (
    <main className="bg-paint-effect bg-cover bg-center bg-[#272727]  h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
      <section
        data-section
        className="relative w-full  h-full overflow-hidden  flex flex-col items-center justify-center p-5 lg:snap-start "
      >

        <div className="relative w-[70vw] h-[70vh] bg-[#FAFAFA] rounded-lg overflow-hidden" >
               <div className="bg-[#D9D9D9] h-[50px] border rounded-tr-lg rounded-tl-lg w-[100%]">
                 <Image
                        className="pt-2 pl-5"
                        alt="takshashila-text"
                        src={TakshashilaText}
                    />
               </div>
              <div className="ml-5 text-xl md:text-2xl lg:text-3xl font-passport flex flex-col justify-around  gap-[1rem] sm:gap-[2.5rem] flex-start ">
                    <div className="ml-5 z-50 mt-3 font-passport flex">
                      <input type="text" placeholder="name" name="username" required className="bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1 " onChange = {event =>{setName(event.target.value)}} />
                      </div>   
                      <div className="ml-5 z-50 font-passport flex flex-wrap flex-row"> 
                        from  <input type="text" placeholder="college" required name="college" className="md:pl-5 bg-transparent outline-none text-[#0A0A0A] underline underline-offset-1" onChange = {event=>{setCollege(event.target.value)}}/>to chennai institute of technology
                      </div>
                      <div className="ml-5 z-50  font-passport flex">
                         <input type="number" placeholder="mobile no" required name="mobile no" className="bg-transparent text-[#0A0A0A] outline-none underline underline-offset-1" onChange = {event =>{setMobile(event.target.value)}}/>
                      </div>
                      <div className="ml-5 z-50  font-passport flex">
                        <input type="email" placeholder="email" required name="email" className="bg-transparent text-[#0A0A0A] outline-none underline underline-offset-1" onChange={(event)=>{setEmail(event.target.value)}}/>
                      </div>
                      <div className="flex ml-5 flex-row font-bold  pr-5 align-center flex-wrap gap-2 md:gap-6 text-[20px] sm:text-xl md:text-2xl lg:text-3xl w-[90%] justify-center mb-[20px] items-center font-passport">
                           <div className="z-30">GENERAL</div>
                           <div className="z-30">WORKSHOP</div>
                           <div className="z-30">PRO-SHOW</div>
                           <button className="rounded-lg p-2 bg-[#1E1E1E] z-50 text-[#FFFFFF]">Register</button>
                      </div>
               </div>
                <Image 
                    className="absolute top-0  sm:right-[10%] w-fit h-[140%]  opacity-[60%]"
                    src={TakshashilaLogo}
                    alt="Takshashila-logo"
                    />
                <Image 
                    className="absolute z-10 h-[120%] w-[full] bottom-[1%] sm:h-[140%] md:h-[130%] lg:h-[100%] opacity-[70%]"
                    src={WorldMap}
                    alt="World-Map"
                    />
                <Image 
                    className="absolute right-16 top-16 lg:bottom-[30%]  w-fit md:bottom-[50%] h-fit opacity-[70%]"
                    src={Year}
                    alt="World-Map"
                    />
        </div>

      </section>
    </main>
  );
};
export default Register;
