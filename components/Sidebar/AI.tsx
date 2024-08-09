import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../chabot-dependencies/configs'
import MessageParser from '../chabot-dependencies/MessageParser'
import ActionProvider from '../chabot-dependencies/ActionProvider'

const AI = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Chatbot 
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      />
    </div>
  )
}

export default AI