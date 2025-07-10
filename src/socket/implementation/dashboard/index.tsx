import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUtils from '../../hooks/useUtils';

interface USERINSTANCE{
    name:string;
    _id:string;
    image:string;
    is_online:string;
}

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const {goTo}=useUtils();

    const [allChats, setAllChats] = useState<USERINSTANCE[]>([]);


    const token = localStorage.getItem("Token");
    const viewUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/user/view-users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setAllChats(response?.data?.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        viewUsers();
    }, [])

    return (
        <div className='flex flex-col p-4 gap-4 bg-green-200'>
            <div className='user flex flex-row items-center gap-4 w-full bg-green-600 py-3 px-2 text-white'>
                <h1 className='font-bold'>CHAT APP</h1>

            </div>
            <div className="user flex flex-row items-center gap-4  pb-3">
                <div className='flex justify-between items-center gap-2 border-1 w-full py-1 rounded-full p-4 ' >
                    <input type="text" placeholder='Search' className='w-full outline-none' />
                    <IoSearchOutline />
                </div>
            </div>
            {allChats.map((user) => {
                return (
                    <div onClick={() => { 
                        goTo("/chat-area",{id:user._id});
                     }} className="user flex flex-row items-center gap-4">
                        <div className="image h-10 w-12  rounded-full ">
                            <img className='h-full w-full object-cover rounded-full' src={`http://localhost:8080/api/public/` + user.image} alt="" />
                        </div>
                        <div className="details w-full">
                            <div className='flex items-center justify-between '>
                                <h4 className='text-[14px] leading-5 capitalize'>{user?.name}</h4>
                                <p className={`text-[10px] ${user.is_online == "1" ? "text-green-400 ": "text-red-500"}`}>{user.is_online == "1" ? "Online": "Offline"}</p>
                            </div>
                            <p className='text-[12px]'>Last Message</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard
