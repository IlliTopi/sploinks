import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBubble from './Components/Chat/ChatBubble'
import ChatFace from './Components/Chat/ChatFace'
import Bottomfade from './Components/Misc/Bottomfade'
import Sidepanel from './Components/Sidepanel/Sidepanel'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <div className='app-layout'>
      <Sidepanel />
      <ChatFace />
      
    </div>
    {/* <Bottomfade /> */}
    </>
  )
}

export default App
