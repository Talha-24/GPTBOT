import React, { useState } from 'react'
import axios, { Axios } from "axios"
const Regsiter: React.FC = () => {

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: null,
    });



    const onSubmit = async () => {
        console.log("sbmitted", formData);
        try {
            const registered = await fetch("http://localhost:3000/api/users/register", {
                method: "POST",
                body: JSON.stringify({
                    ...formData,
                })
            });
            console.log(registered);
        } catch (error) {

        }

    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className='flex flex-col  h-screen w-screen items-center gap-2 justify-center'>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold'>Username</label>
                <input className='border-1 px-2 py-1 rounded-sm' type="text" placeholder='Enter name' value={formData.name} onChange={(e) => { setFormData((prev) => ({ ...prev, name: e.target.value, })) }} />
            </div>

            <div className='flex flex-col items-center'>
                <label htmlFor="" className='font-bold'>Profile Picture</label>
                <input className='border-1 px-2  w-1/2 ' type="file" onChange={async (e: any) => {
                    const file = e.target.files[0];
                    let fileUploader = new FormData();
                    fileUploader.append("files", file);
                    let path = await axios.post("http://localhost:3000/file", fileUploader);
                    setFormData((prev) => ({ ...prev, image: path.data.data.files[0].path }));
                    }} />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold'>Email</label>
                <input className='border-1 px-2 py-1 rounded-sm' type="email" placeholder='Enter email' value={formData.email} onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value, })) }} />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold'>Password</label>
                <input className='border-1 px-2 py-1 rounded-sm' type="password" placeholder='Enter account password' value={formData.password} onChange={(e) => { setFormData((prev) => ({ ...prev, password: e.target.value })) }} />
            </div>

            <div className='flex flex-row gap-30'>
                <div>

                </div>
                <button className='border-1 px-1 cursor-pointer bg-black text-white'>Register</button>
            </div>

        </form>
    )
}

export default Regsiter
