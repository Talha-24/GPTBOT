import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Dashboard: React.FC = () => {
    const navigate=useNavigate();

    return (
        <div className='flex flex-col p-4 gap-4'>
            <div className='user flex flex-row items-center gap-4'>
                <h1 className='font-bold'>CHAT APP</h1>

            </div>
            <div className="user flex flex-row items-center gap-4  pb-3">
                <div className='flex justify-between items-center gap-2 border-1 w-full py-1 rounded-full p-4 ' >
                    <input type="text" placeholder='Search' className='w-full outline-none' />
                    <IoSearchOutline />
                </div>
            </div>
            {Array.from({ length: 8 }, () => {
                return (
                    <div onClick={()=>{navigate("/chat-area")}} className="user flex flex-row items-center gap-4">
                        <div className="image h-10 w-12  rounded-full ">
                            <img className='h-full w-full object-cover rounded-full' src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt="" />
                        </div>
                        <div className="details w-full">
                            <div className='flex items-center justify-between '>
                                <h4 className='text-[14px] leading-5 '>Name</h4>
                                <p className='text-[10px]'>12 : 00</p>
                            </div>
                            <p className='text-[12px]'>Last Message</p>
                        </div>
                    </div>
                )
            })}


            {/* <div className="user flex flex-row items-center gap-4">
                <div className="image h-10 w-12  rounded-full ">
                    <img className='h-full w-full object-cover rounded-full' src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt="" />
                </div>
                <div className="details w-full">
                    <div className='flex items-center justify-between '>
                        <h4 className='text-[14px] leading-5 '>Name</h4>
                        <p className='text-[10px]'>12 : 00</p>
                    </div>
                    <p className='text-[12px]'>Last Message</p>
                </div>
            </div>


            <div className="user flex flex-row items-center gap-4">
                <div className="image h-10 w-12  rounded-full ">
                    <img className='h-full w-full object-cover rounded-full' src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt="" />
                </div>
                <div className="details w-full">
                    <div className='flex items-center justify-between '>
                        <h4 className='text-[14px] leading-5 '>Name</h4>
                        <p className='text-[10px]'>12 : 00</p>
                    </div>
                    <p className='text-[12px]'>Last Message</p>
                </div>
            </div>

            <div className="user flex flex-row items-center gap-4">
                <div className="image h-10 w-12  rounded-full ">
                    <img className='h-full w-full object-cover rounded-full' src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt="" />
                </div>
                <div className="details w-full">
                    <div className='flex items-center justify-between '>
                        <h4 className='text-[14px] leading-5 '>Name</h4>
                        <p className='text-[10px]'>12 : 00</p>
                    </div>
                    <p className='text-[12px]'>Last Message</p>
                </div>
            </div>


            <div className="user flex flex-row items-center gap-4">
                <div className="image h-10 w-12  rounded-full ">
                    <img className='h-full w-full object-cover rounded-full' src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt="" />
                </div>
                <div className="details w-full">
                    <div className='flex items-center justify-between '>
                        <h4 className='text-[14px] leading-5 '>Name</h4>
                        <p className='text-[10px]'>12 : 00</p>
                    </div>
                    <p className='text-[12px]'>Last Message</p>
                </div>
            </div> */}



        </div>
    )
}

export default Dashboard
