import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { FaVideo } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { io, Socket } from 'socket.io-client';

const ChatArea: React.FC = () => {

    const socketRef = useRef<Socket | null>(null);


    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<any>([]);
    const userId = localStorage.getItem("_id");
    const { search } = useLocation();
    let _id = search.split("=")[1];
    const token = localStorage.getItem("Token");


    useEffect(() => {
        if (!token || !_id) return;

        socketRef.current = io("http://localhost:8080/user-namespace", {
            auth: { token }
        });

        socketRef.current.on("connect", () => {
            console.log("✅ Connected to socket server");
        });

        socketRef.current.on("getOnlineUser", ({ user_id }) => {
            console.log("🟢 User online:", user_id);
            // Update your UI for online user
        });

        socketRef.current.on("getOfflineUser", ({ user_id }) => {
            console.log("🔴 User offline:", user_id);
            // Update your UI for offline user
        });

        socketRef.current.on("loadNewChat", (data) => {
            console.log("📥 New message received:", data);
            setMessages((prev) => [...prev, data]);
        });

        socketRef.current.on("chatMessageDeleted", (chatId) => {
            console.log("🗑 Message deleted:", chatId);
            setMessages((prev) => prev.filter(m => m._id !== chatId));
        });

        
        return () => {
            socketRef.current?.disconnect();
            console.log("❌ Disconnected");
        };
    }, [_id, token]);


    // LOAD PREVIOUS CHAT

    useEffect(() => {
        if (!socketRef.current || !userId || !_id) return;

        socketRef.current.emit("existsChat", {
            sender_id: userId,
            receiver_id: _id
        });

        socketRef.current.on("loadChats", ({ chats }) => {
            setMessages(chats);
        });
    }, [_id, userId]);


    // NEW MESSAGEAW SENDING

    const sendMessage = () => {
        if (!input.trim()) return;

        const payload = {
            sender_id: userId,
            receiver_id: _id,
            message: input.trim()
        };

        socketRef.current?.emit("newChat", payload);

        setMessages((prev) => [
            ...prev,
            { ...payload, createdAt: new Date().toISOString() }
        ]);
        setInput("");
    };



    const deleteMessage = (chatId: string) => {
        axios.delete(`http://localhost:8080/api/chat/${chatId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        socketRef.current?.emit("chatDeleted", chatId);
    };


    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append("files[]", file);

        const res = await axios.post("http://localhost:8080/api/upload/file", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });

        // Send uploaded file URL as a chat message
        const payload = {
            sender_id: userId,
            receiver_id: _id,
            message: res.data.files[0].url
        };

        socketRef.current?.emit("newChat", payload);
    };




    console.log("Messaged", messages);
    return (
        <div className=''>
            {/* HEADER */}
            <div className="user flex flex-row items-center gap-4 border-b-red-800 px-3 border-b-1 py-2 absolute top-0 left-0 w-full bg-white justify-between">
                <div className='flex items-center gap-3'>
                    <div className="image h-[42px] w-[60px]">
                        <img className='h-full w-full object-cover rounded-full' src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt="" />
                    </div>
                    <div className="details w-full">
                        <div className='flex items-center justify-between '>
                            <h4 className='text-[14px] leading-5 font-bold'>Mohammad Talha</h4>
                        </div>
                        <p className='text-[12px] text-green-500 font-semibold'>Online</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <FaVideo />
                    <MdCall />
                </div>


            </div>
            {/* MAIN BODY */}
            <div className='h-screen w-full bg-blue-400 overflow-auto py-20 px-4'>
                alsdjf

                {messages.map((value: any) => {
                    return (
                        <div>
                            {value.message}
                        </div>
                    )
                })}


            </div>
            {/* FOOTER */}

            <div className='px-10 py-3 gap-5 max-sm:px-2  w-full bg-white fixed left-0 bottom-0'>
                <div className='drop-shadow-green-400 border-1 rounded-full flex items-center justify-between px-4 py-2 max-h-[34px]'>
                    <textarea
                        onChange={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
                            setInput(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage(input);
                            }
                        }}
                        value={input}
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
