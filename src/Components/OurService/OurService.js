import React from 'react';
import './OurService.css'

import coverPhoto from '../../../src/assets/cover.png'
import background from '../../../src/assets/bgimg.png'

import { CgMenuGridR } from 'react-icons/cg';
import { IoIosPhonePortrait } from 'react-icons/io';

const OurService = () => {

    const servicers = [
        {
            icon: { CgMenuGridR },
            name: "Responsive Design"
        },
       
 ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-[95%] mx-auto gap-6 my-10 '>

            <div className='relative'>
                <div>
                    <img src={background} alt="" className='lg:w-full mx-auto md:h-[100vh] h-[70vh] ' />
                </div>
                <div className='absolute md:top-5 top-2'>
                    <img src={coverPhoto} alt="" className='w-[75%] md:w-[85%] mx-auto lg:h-[80vh] h-[60vh] ' />
                </div>
            </div>

            <div className='mt-16 w-[95%] mx-auto'>
                <h1 className='font-bold text-xl lg:text-3xl custom-font text-gray-600'>What Our Software Can Do For You</h1>

                <div className='px-10 py-1 rounded-md bg-[#F7E1F7] w-[20%] mt-7 '>
                </div>
                <p className='bg-[#C478E4] p-2 rounded-full w-2 -mt-3 ball'></p>

                <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos in dolorem impedit accusamus assumenda sunt cumque repellat eligendi animi veniam.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-8'>



                    <div>
                        <div className='flex gap-3 items-center my-5 shadow-md rounded-sm shadow-gray-400 py-3 px-4'>
                            <CgMenuGridR /> <p className='text-md font-semibold'>Responsive Design</p>
                        </div>
                        <div className='flex gap-3 items-center my-5 shadow-md rounded-sm shadow-gray-400 py-3 px-4'>
                            <IoIosPhonePortrait /> <p className='text-md font-semibold'>Android Apps Development</p>
                        </div>
                        <div className='flex gap-3 items-center my-5 shadow-md rounded-sm shadow-gray-400 py-3 px-4'>
                            <CgMenuGridR /> <p className='text-md font-semibold'>Responsive Design</p>
                        </div>
                        <div className='flex gap-3 items-center my-5 shadow-md rounded-sm shadow-gray-400 py-3 px-4'>
                            <CgMenuGridR /> <p className='text-md font-semibold'>Responsive Design</p>
                        </div>
                        
                    </div>

                    <div>
                        <div className='flex gap-3 items-center my-5 shadow-md rounded-sm shadow-gray-400 py-3 px-4'>
                            <CgMenuGridR /> <p className='text-md font-semibold'>Responsive Design</p>
                        </div>
                        <div className='flex gap-3 items-center my-5 shadow-md rounded-sm shadow-gray-400 py-3 px-4'>
                            <CgMenuGridR /> <p className='text-md font-semibold'>Responsive Design</p>
                        </div>
                        <div className='flex gap-3 items-center my-5 shadow-md rounded-sm shadow-gray-400 py-3 px-4'>
                            <CgMenuGridR /> <p className='text-md font-semibold'>Responsive Design</p>
                        </div>
                        <div className='flex gap-3 items-center my-5 shadow-md rounded-sm shadow-gray-400 py-3 px-4'>
                            <CgMenuGridR /> <p className='text-md font-semibold'>Responsive Design</p>
                        </div>
                    </div>


                </div>
            </div>



        </div>
    );
};

export default OurService;