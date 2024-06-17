import React from 'react'

import "./chat.css"

interface ChatBubbleProps {
  profilePic: string;
  author: string;
  message: string;
  ownMessage: boolean;
}

const ChatBubble : React.FC<ChatBubbleProps>= ({profilePic,author,message,ownMessage = false}) => {
  return (
    <div className='chatbubble-parent' style={ownMessage ? {alignSelf: 'flex-end'}: {}}>
      <div className='chatbubble-profilepic'>
        {!ownMessage && 
          <div className='chatbubble-picborder'>
            <img src={profilePic} />
          </div>
        }
      </div>
      <div className={ownMessage ? "chatbubble-content-own":"chatbubble-content"}>
        <div className='chatbubble-author'>
          <p> {ownMessage ? "You":author}</p>
        </div>
        <div className='chatbubble-message'>
          <p>{message}</p>
        </div>
      </div>
      <div className='chatbubble-tilted-under-square'></div>
    </div>
  )
}

export default ChatBubble