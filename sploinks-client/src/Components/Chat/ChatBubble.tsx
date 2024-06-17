import React from 'react'
import Lean from '../../assets/lean_daymn.jpg'
import "./chat.css"

const ChatBubble = () => {
  return (
    <div className='chatbubble-parent'>
      <div className='chatbubble-profilepic'>
        <div className='chatbubble-picborder'>
          <img src={Lean} />
        </div>
      </div>
      <div className="chatbubble-content">
        <div className='chatbubble-author'>
          <p> Juusotin 7</p>
        </div>
        <div className='chatbubble-message'>
          ChatBubble
        </div>
      </div>
    </div>
  )
}

export default ChatBubble