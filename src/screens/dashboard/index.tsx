import React, { useEffect, useRef, useState } from 'react'
import { PrimaryRoboIcon, MessageSendIcon, MicrophoneIcon, VolumeIcon, ExitIcon, LoaderIcon } from "../../assets/svg/index"
import { HiOutlinePencilAlt } from "react-icons/hi";



const ChatScreen: React.FC = () => {
    const [Messages, setMessages] = useState<any[]>([]);
    const [userInput, setUserInput] = useState<string>("");
    const chatRef = useRef(null);

    const fetchAiResponse = () => {

        async function summarizeTranscript() {
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer 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`
                    },
                    body: JSON.stringify({
                        model: "gpt-4",
                        messages: [
                            {
                                role: "user",
                                content: userInput,
                            }
                        ]
                    }),
                });

                const data = await response.json();
                const summary = data.choices[0].message.content.trim();
                const user = { type: "receiver", message: userInput };
                setUserInput('');
                const ai = { type: "sender", message: summary };
                setMessages((prev) => [...prev, user, ai]);
                return summary;
            } catch (error) {
                console.error("Error summarizing transcript:", error);
                return null;
            }
        }
        summarizeTranscript();
    }
    useEffect(() => {
        chatRef?.current.scrollIntoView({ behaviour: 'smooth' });
    }, [Messages])
    return (
        <div className='w-full h-full flex flex-col justify-between'>
            <div className="sidebar w-50 bg-[#222222] p-2 absolute left-0 h-screen z-20 ">
                <div className='h-full w-full z-22'>
                    <div className="header py-2 bg-yellow-500 text-white text-center flex flex-row items-center">
                        <div>
                            <input className='border-1' type="text" />
                        </div>
                        <HiOutlinePencilAlt  />


                        hahsdfaf
                    </div>
                    hasdfaf
                </div>
            </div>


            <div className='header border-b-1 border-black py-2 sticky top-0 left-0  bg-white w-full'>
                <div className='flex justify-between  font-[Nunito] px-10 py-2 gap-5 max-sm:px-2 max-[649px]:p-2'>
                    <div className='w-full flex items-center gap-5'>
                        <div className='cursor-pointer w-[20px] min-md:w-[20px]'>
                            <img className='' src='https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png' alt="" /></div>
                        <div className='w-[20px] min-md:w-[32px]'>
                            <img className='h-full w-full' src={PrimaryRoboIcon} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-[var(--primary-bg)] font-extrabold uppercase mb-[4px]'>ChatGPT</h2>
                            <h3 className='text-[#3ABF38] font-semibold flex items-center gap-1 leading-0'> <div className=' w-[6px] h-[6px] rounded-full bg-[#3ABF38]'></div> Online</h3>
                        </div>
                    </div>
                    <div className='flex items-center  gap-4'>
                        <div className='cursor-pointer  min-md:[30px] w-[20px]' >
                            <img className='h-full w-full' src={VolumeIcon} alt="" />
                        </div>
                        <div className='cursor-pointer w-[20px] min-md:[30px]'>
                            <img className='w-full h-full' src={ExitIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* CHAT AREA */}
            <div className='chat-area pb-20 h-[calc(100vh-100px)] bg-[#dadada] py-4 px-10 overflow-y-auto max-[649px]:px-2'>
                {Messages.map((value) => {
                    if (value.type == "receiver") {
                        return <div className='user-chat flex justify-end w-full my-2 gap-2'>

                            <div className='min-md:w-2/5  w-9/10   bg-white   text-[var(--primary-bg)] max-[649px]:text-sm text-lg py-2 rounded-sm p-2  flex flex-row items-center justify-between'>
                                <p>
                                    {value?.message}
                                </p>
                                {!value.message ?
                                    <div className='h-6'>
                                        <img className='h-full w-full' src={LoaderIcon} alt="" />
                                    </div>
                                    : ""}

                            </div>

                            <div className='h-7 w-5'>
                                <img className='h-full w-full' src='https://www.freeiconspng.com/uploads/faces-png-pictures-1.png' alt="" />
                            </div>
                        </div>
                    } else {
                        return (
                            <div className='user-chat  flex justify-start w-full h-auto gap-4 my-2'>
                                <div className='h-10 w-5'>
                                    <img src={PrimaryRoboIcon} alt="" />
                                </div>
                                <div className='min-md:w-2/5   w-9/10   h-auto text-white   bg-[var(--primary-bg)] text-lg max-[649px]:text-sm py-2 rounded-sm p-2 font-text'>
                                    <p className=''>
                                        {value?.message}
                                    </p>

                                </div>
                            </div>
                        )
                    }
                })}
                <div ref={chatRef}></div>
            </div>

            {/* FOOTER */}
            <div className='px-10 py-3 gap-5 max-sm:px-2  w-full bg-white fixed left-0 bottom-0'>
                <div className='drop-shadow-green-400 border-1 rounded-full flex items-center justify-between px-4 py-2 max-h-[50px]'>
                    <textarea
                        onChange={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
                            setUserInput(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                fetchAiResponse();
                            }
                        }}
                        value={userInput}
                        rows={1}
                        placeholder='Write Your Message Here'
                        className='w-full resize-none overflow-y-auto outline-none placeholder:text-[var(--text-dark-gray)] text-[var(--text-dark-gray)] font-semibold text-sm max-h-[100px] px-[15px] py-[10px] leading-relaxed scrollbar-hide'
                    ></textarea>
                    <div className='flex items-center gap-4'>
                        <div className='cursor-pointer'>
                            <img src={MicrophoneIcon} alt="" />
                        </div>
                        <div className='cursor-pointer min-md:w-[20px] w-[20px]'>
                            <img className='h-full w-full' src={MessageSendIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ChatScreen
