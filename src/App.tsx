import React from 'react'
import Loading from './screens/load'
import OnBoard from './screens/onboard'
import ChatScreen from './screens/dashboard'

const App:React.FC = () => {


  
  return (
    <div className='min-h-screen w-full'>
      {/* <Loading/> */}
      {/* <OnBoard/> */}
      <ChatScreen/>
    </div>
  )
}

export default App
