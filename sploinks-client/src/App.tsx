import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBubble from './Components/Chat/ChatBubble'
import ChatFace from './Components/Chat/ChatFace'
import Bottomfade from './Components/Chat/Bottomfade'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatFace />
      <Bottomfade />
    </>
  )
}

export default App
