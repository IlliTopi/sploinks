import React from 'react'
import ChatBubble from './ChatBubble'
import Lean from '../../assets/lean_daymn.jpg'
import Kisa from '../../assets/kisa.jpg'
import "./chat.css"

const ChatFace = () => {
  return (
    <div className='chatface-parent'>
        <ChatBubble ownMessage={false} profilePic={Lean} author='Juusotin 10' message='Marsumoi'/>
        <ChatBubble  ownMessage={true} profilePic={Kisa} author='Marsutin 7' message='WDMOPIWAMDOIWADMIO=WPADMIOWAM  oaMWDOMOWDAMOWMADOMWADOMWADMODMWAOMDOWAIMDOIw waoimdwaoimdoiwamdoiwamoidmwaoidm'/>
    </div>

  )
}

export default ChatFace