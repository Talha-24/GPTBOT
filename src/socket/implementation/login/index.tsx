import React, { useState } from 'react'

import axios, { Axios } from 'axios';
import useUtils from '../../hooks/useUtils';



const Login: React.FC = () => {
    const { goTo } = useUtils();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onSubmit = async () => {
        try {
            const created = await axios.post('http://localhost:8080/api/auth/login', formData)
            localStorage.setItem("Token", created.data.token);
            localStorage.setItem("Name", created.data.user.name)
            localStorage.setItem("Email", created.data.user.email);
            localStorage.setItem("Image", created.data.user.image);
            localStorage.setItem("_id", created.data.user.id);
            goTo("/dashboard");
        } catch (error) {
        }
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }} className='flex flex-col  h-screen w-screen items-center gap-2 justify-center'>
            <div className='flex flex-col gap-3 border-1 border-black   p-10'>
                <div className='flex flex-col'>
                    <label htmlFor="">Email</label>
                    <input className='border-1 px-2 py-1 rounded-sm' type="email" placeholder='Enter your Email' value={formData.email} onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value, })) }} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Password</label>
                    <input className='border-1 px-2 py-1 rounded-sm' type="password" placeholder='Enter your Password' onChange={(e) => { setFormData((prev) => ({ ...prev, password: e.target.value, })) }} />
                </div>
                <div className='flex flex-row justify-between gap-2'>
                    <button onClick={() => { goTo("/register"); }} className='border-1 px-1 cursor-pointer hover:bg-black text-black hover:text-white '>Register</button>
                    <button className='border-1 px-1 cursor-pointer bg-black text-white'>Login</button>
                </div>
            </div>
        </form>
    )
}

export default Login
