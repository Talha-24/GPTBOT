import React, { useState } from 'react'

import axios, { Axios } from 'axios';


const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        passwod: "",
    });

    const onSubmit = async() => {
        const created=await axios.post('http://localhost:3000/api/users/login',{ 
          ...formData    
        })

        console.log(created);
    }
    



    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }} className='flex flex-col  h-screen w-screen items-center gap-2 justify-center'>
            <div className='flex flex-col'>
                <label htmlFor="">Email</label>
                <input className='border-1 px-2 py-1 rounded-sm' type="email" placeholder='Enter your Email' value={formData.email} onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value, })) }} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Password</label>
                <input className='border-1 px-2 py-1 rounded-sm' type="password" placeholder='Enter your Password' onChange={(e) => { setFormData((prev) => ({ ...prev, passwod: e.target.value, })) }} />
            </div>
            <button className='border-1 px-1 cursor-pointer bg-black text-white'>Login</button>
        </form>
    )
}

export default Login
