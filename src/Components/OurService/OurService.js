import React from 'react';
import './OurService.css'

import coverPhoto from '../../../src/assets/cover.png'
import background from '../../../src/assets/bgimg.png'

import { CgMenuGridR } from 'react-icons/cg';
import { IoIosPhonePortrait } from 'react-icons/io';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import { TfiDropbox } from 'react-icons/tfi';
import { AiFillPrinter } from 'react-icons/ai';

const OurService = () => {

    const servicers = [
        {
            icon:  <CgMenuGridR />,
            name: "Responsive Design"
        },
        {
            icon:  < IoIosPhonePortrait />,
            name: "Android Apps Development"
        },
        {
            icon: <IoIosPhonePortrait />,
            name: "iOS Apps Development"
        },
        {
            icon: <BsFillCartCheckFill />,
            name: "E-Commerce Development"
        },
       
    ]

    const anotherServices = [
        {
            icon: <HiOutlineCodeBracket />,
            name: "React Web Development"
        },
        {
            icon: <HiOutlineCodeBracket />,
            name: "Laravel Web Development"
        },
        {
            icon: <TfiDropbox />,
            name: "UI/UX Design"
        },
        {
            icon: <AiFillPrinter />,
            name: "Print Ready Design"
        },
    ]
    
    

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-[95%] mx-auto gap-6 my-10 items-center '>

            <div className='relative custom-hidden ' >
                <div className='custom-circle '>
                    <img src={background} alt="" className='w-full md:w-[85%] mx-auto ' />
                </div>
                <div className='absolute top-[10%] left-[7%] bottom-[20%] right-[10%]  '>
                    <img src={coverPhoto} alt="" className=' w-[80%]  custom-margin ' />
                </div>
            </div>

            <div className='mt-16 w-[95%] mx-auto'>
                <h1 className='font-bold text-xl lg:text-3xl custom-font text-gray-600'>What Our Software Can Do For You</h1>

                <div className='px-10 py-1 rounded-md bg-[#CDF1D8] w-[20%] mt-7 '>
                </div>
                <p className='bg-[#4EDB87] p-2 rounded-full w-2 -mt-3 ball'></p>

                <p className='mt-5'> Software is a set of instructions, data or programs used to operate computers and execute specific tasks. It is the opposite of hardware, which describes</p>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-8'>



                    <div className='parent-div mb-5'>
                        
                        {
                            servicers.map((service,index)=> <div
                                
                                key={index}
                                className='flex gap-3 items-center  custom-shadow rounded-sm py-3 px-4 hover:bg-[#4EDB87] hover:text-white bg-hov '>
                                {service.icon} <p className='text-md font-semibold'>{ service.name}</p>
                            </div>)
                        }
                    </div>

                    <div className='parent-div mb-5'>
                        {
                            anotherServices.map((another, index) => <div

                                key={index}
                                className='flex gap-3 items-center custom-shadow rounded-sm  py-3 px-4 hover:bg-[#4EDB87] hover:text-white bg-hov '>
                                {another.icon} <p className='text-md font-semibold'>{another.name}</p>
                            </div>)

                        }
                        
                    </div>


                </div>
            </div>



        </div>
    );
};

export default OurService;