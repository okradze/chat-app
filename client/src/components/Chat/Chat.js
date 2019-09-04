import React from 'react'
import Messages from '../Messages/Messages'
import MessageForm from '../MessageForm/MessageForm'
import './Chat.scss'

const Chat = () => (
    <div className="Chat">
        <Messages />
        <MessageForm />
    </div>
)

export default Chat
