import React from 'react'
import ChatPreview from '../ChatPreview/ChatPreview'
import './ChatsPreview.scss'

const Chats = () => (
    <div className="ChatsPreview">
        <div className="ChatsPreview__title-container">
            <h1 className="ChatsPreview__title">Chat</h1>
        </div>
        <div className="chats-preview">
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
        </div>
    </div>
)

export default Chats
