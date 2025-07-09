import React from 'react'
import { IntroIcon, Rightarrowicon } from "../../assets/svg/index"
const OnBoard: React.FC = () => {
    return (
        <div className='h-full w-full flex items-center justify-center p-7 max-md:p-2'>
            <div className='flex flex-col items-center justify-around h-full text-center'>
                <div className='flex flex-col items-center justify-between font-[Nunito] gap-4 text-[var(--text-gray)]'>
                    <h2 className='text-[var(--primary-bg)] text-2xl font-bold'>You AI Assistant</h2>
                    <div className='min-md:text-lg'>
                        <p className=''>Using this software,you can ask your </p>
                        <p className='leading-[0.90]'>questions and receive articles using</p>
                        <p>artificial intelligence assistant</p>
                    </div>
                </div>

                <div className='h-[50%] max-[440px]:h-[50%]'>
                    <img className='h-full w-full' src={IntroIcon} alt="" />
                </div>

                <div className='w-full flex items-center justify-center'>
                    <div className='bg-[var(--primary-bg)] w-[350px] flex justify-center px-7 py-3 rounded-full text-white font-semibold max-[600px]:w-[100%] max-[440px]:py-2 cursor-pointer'>
                        <button className='m-auto font-semibold'>Continue</button>
                        <div className=''>
                            <img className='' src={Rightarrowicon} alt="" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default OnBoard
