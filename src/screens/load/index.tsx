import React from 'react'
import { RoboIcon } from '../../assets/svg/index'
const Loading:React.FC = () => {
  return (
    <div className='bg-[#3369ff] max-md:rounded-xl h-full flex items-center justify-center'>

        <div>
            <img src={RoboIcon} alt="" />
        </div>
      
    </div>
  )
}

export default Loading
