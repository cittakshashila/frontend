"use client"
import { FiAlertCircle } from "react-icons/fi";
import ContentSwitcher from "./ContentSwitch";
const CardButton = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="w-2/3 h-2/4 bg-gray-300 rounded-lg shadow-md flex justify-center items-center relative">
                    <FiAlertCircle className="text-white/10 rotate-12 text-[200px] absolute -top-24 left-0" />

                    <div className="absolute left-20 w-full"></div>

                    <div className="absolute left-14">
                        <h1 className="text-4xl font-bold mb-4">Chennai Institute Of Technology</h1>
                        <br />
                        <br />
                        <p className="hidden lg:block">SH-113, Sarathy Nagar,</p>
                        <p>Pudupedu Kundrathur,</p>
                        <p>Sriperumbudur Main Road,</p>
                        <p>Chennai, Tamil Nadu</p>
                        <p>PIN: 600069</p>
                    </div>

                    <div className="absolute right-14">
                        <h1 className="text-4xl font-bold mb-4">Chennai Institute Of Technology</h1>
                        <br />
                        <br />
                        <p className="hidden lg:block">SH-113, Sarathy Nagar,</p>
                        <p>Pudupedu Kundrathur,</p>
                        <p>Sriperumbudur Main Road,</p>
                        <p>Chennai, Tamil Nadu</p>
                        <p>PIN: 600069</p>
                    </div>
                   
                </div>
            </div>
        </>
    );
}
export default CardButton;