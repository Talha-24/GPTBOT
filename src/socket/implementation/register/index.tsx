import React, { useState } from 'react'
import axios from "axios"
import useUtils from '../../hooks/useUtils';
const Regsiter: React.FC = () => {

    const {goTo}=useUtils();
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        image: null,
        password: "",
    });



    const onSubmit = async () => {
        try {
            await axios.post("http://localhost:8080/api/auth/register", formData).then((res) => {
                console.log(res);
            })
        } catch (error) {

        }

    }



    return (
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className='flex flex-col  h-screen w-screen items-center  justify-center'>
            <div className='border-1 border-black flex flex-col gap-3 p-10'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Username</label>
                    <input className='border-1 px-2 py-1 rounded-sm' type="text" placeholder='Enter name' value={formData.name} onChange={(e) => { setFormData((prev) => ({ ...prev, name: e.target.value, })) }} />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Email</label>
                    <input className='border-1 px-2 py-1 rounded-sm' type="email" placeholder='Enter email' value={formData.email} onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value, })) }} />
                </div>

                <div className='flex flex-col gap-2'>

                    <label htmlFor="" className='font-bold'>Password</label>
                    <input className='border-1 px-2 py-1 rounded-sm' type="password" placeholder='Enter account password' value={formData.password} onChange={(e) => { setFormData((prev) => ({ ...prev, password: e.target.value })) }} />


                    <label htmlFor="" className='font-bold'>Re-Enter Password</label>
                    <input className='border-1 px-2 py-1 rounded-sm' type="password" placeholder='Enter account password' value={formData.password} onChange={(e) => { setFormData((prev) => ({ ...prev, password: e.target.value })) }} />
                </div>
                <div className='flex flex-col items-start'>
                    <label htmlFor="" className='font-bold'>Profile Picture</label>
                    <input className='' type="file" onChange={async (e: any) => {
                        const file = e.target.files[0];
                        let fileUploader = new FormData();
                        fileUploader.append("files", file);
                        let path = await axios.post("http://localhost:8080/api/upload/file", fileUploader);
                        setFormData((prev) => ({ ...prev, image: path.data.data.files[0].path }));
                    }} />
                </div>
                <div className='flex flex-row w-full justify-between'>
                    <button onClick={()=>{ goTo("/"); }} className='cursor-pointer border-1 border-black px-1 hover:bg-black hover:text-white'> Login</button>
                    <button className='border-1 px-1 cursor-pointer bg-black text-white'>Register</button>
                </div>

            </div>
        </form>
    )
}

export default Regsiter
