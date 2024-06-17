import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBubble from './Components/Chat/ChatBubble'
import ChatFace from './Components/Chat/ChatFace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatFace />
    </>
  )
}

export default App
