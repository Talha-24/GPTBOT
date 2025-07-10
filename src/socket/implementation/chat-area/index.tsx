import React from 'react'

const ChatArea: React.FC = () => {


    return (
        <div className=''>
            {/* HEADER */}
            <div className="user flex flex-row items-center gap-4 border-b-red-800 px-3 border-b-1 py-2 absolute top-0 left-0 w-full bg-white">
                <div className="image h-11 w-12  rounded-full ">
                    <img className='h-full w-full object-cover rounded-full' src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt="" />
                </div>
                <div className="details w-full">
                    <div className='flex items-center justify-between '>
                        <h4 className='text-[14px] leading-5 '>Mohammad Talha</h4>
                    </div>
                    <p className='text-[12px] text-green-500 font-semibold'>Online</p>
                </div>
            </div>
            {/* MAIN BODY */}
            <div className='h-screen w-full bg-blue-400 overflow-auto py-20 px-4'>
                alsdjf
            </div>
            {/* FOOTER */}

            <div className='px-10 py-3 gap-5 max-sm:px-2  w-full bg-white fixed left-0 bottom-0'>
                <div className='drop-shadow-green-400 border-1 rounded-full flex items-center justify-between px-4 py-2 max-h-[34px]'>
                    <textarea
                        onChange={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
                            // setUserInput(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                // fetchAiResponse();
                            }
                        }}
                        // value={userInput}
                        rows={1}
                        placeholder='Write Your Message Here'
                        className='w-full resize-none overflow-y-auto outline-none placeholder:text-[var(--text-dark-gray)] text-[var(--text-dark-gray)] font-semibold text-sm max-h-[100px] px-[15px] py-[10px] leading-relaxed scrollbar-hide'
                    ></textarea>
                    <div className='flex items-center gap-4'>
                        <div className='cursor-pointer'>
                            {/* <img src={MicrophoneIcon} alt="" /> */}
                        </div>
                        <div className='cursor-pointer min-md:w-[20px] w-[20px]'>
                            {/* <img className='h-full w-full' src={MessageSendIcon} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatArea
