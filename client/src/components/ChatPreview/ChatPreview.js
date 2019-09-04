import React, { useState } from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './ChatPreview.scss'

const ChatPreview = ({ fullName, lastMessage, createdAt, onClick }) => {
    const [isVisited, setIsVisited] = useState(false)

    const formatDate = createdAt => {
        const now = new Date()
        const date = new Date(createdAt)

        if (date.getDate() === now.getDate()) {
            return `${date.getHours()}:${date.getMinutes()}`
        }
    }

    return (
        <div
            role="button"
            tabIndex="0"
            onClick={() => {
                setIsVisited(true)
                onClick()
            }}
            onKeyPress={e => {
                if (e.which === 13) {
                    setIsVisited(true)
                    onClick()
                }
            }}
            className={`ChatPreview ${isVisited && 'ChatPreview--visited'}`}
        >
            <ProfilePicture
                width="4.5rem"
                height="4.5rem"
                photoURL="https://randomuser.me/api/portraits/men/10.jpg"
            />

            <div className="ChatPreview__user-info">
                <h4 className="ChatPreview__user-name">{fullName}</h4>
                <div className="ChatPreview__last-message">
                    {lastMessage ? lastMessage.message : 'Start a conversation'}
                </div>
            </div>
            <time className="ChatPreview__date">
                {lastMessage ? lastMessage.createdAt : formatDate(createdAt)}
            </time>
        </div>
    )
}

export default ChatPreview
