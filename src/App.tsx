import React from 'react'
import ChatScreen from './screens/dashboard'
import Loading from './screens/load'
import OnBoard from './screens/onboard'
import Home from './socket/implementation'

const App:React.FC = () => {
/* 9 July
  1. Env files
  3. GPT clone
  4. Chat APp(pending )
  Next: 
  DSA 
  VECTORS
  ARrays
  Kedane Algorithm

  practice practic and practice
*/

  
  return (
    <div className='min-h-screen w-full'>
      {/* <ChatScreen/> */}
      {/* <Loading/> */}
      {/* <OnBoard/> */}
      {/* <CHATAPP/> */}
      <Home/>
      {/* <ChatArea/> */}
    </div>
  )
}

export default App
