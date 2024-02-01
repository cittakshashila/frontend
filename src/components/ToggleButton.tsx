
import ContentSwitcher from './ContentSwitch';
import Accordion from './accordion';

const ToggleButton = () => {
    return (
        <>
            <h1 className="text-4xl font-semibold pb-4 ml-20 text-white relative">
                Location
                <span className="absolute bottom-0 left-0 bg-white h-1 w-11/12 rounded-full"></span>
            </h1>

            <div className="flex justify-center items-center h-screen">
                <div className="w-2/3 h-3/6 bg-transparent border-2 border-solid border-white border-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg text-white rounded-md relative bottom-10 p-5 overflow:hidden">
                    
                    <div className="absolute inset-x-0 left-20 top-4 lg:p-10 lg:w-2/5 ">
                        <Accordion />
                    </div>

                    <div className="fixed inset-y-0 right-0 top-24 md:text-red">
                        <h1 className="text-4xl font-bold mb-4">Chennai Institute Of Technology</h1>
                        <br />
                        <br />
                        <p className="text-lg ">SH-113, Sarathy Nagar,</p>
                        <p className='md:text-sm'>Pudupedu Kundrathur,</p>
                        <p className='md:text-sm'>Sriperumbudur Main Road,</p>
                        <p>Chennai, Tamil Nadu</p>
                        <p>PIN: 600069</p>
                       
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default ToggleButton;
