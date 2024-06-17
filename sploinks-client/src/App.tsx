import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBubble from './Components/Chat/ChatBubble'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatBubble />
    </>
  )
}

export default App
