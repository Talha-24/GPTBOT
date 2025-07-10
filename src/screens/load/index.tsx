import React from 'react'
import { RoboIcon } from '../../assets/svg/index'


const Loading:React.FC = () => {
  return (
    <div className='bg-[#3369ff] max-md:rounded-xl  flex items-center justify-center h-screen'>

        <div>
            <img src={RoboIcon} alt="" />
        </div>
      
    </div>
  )
}

export default Loading
