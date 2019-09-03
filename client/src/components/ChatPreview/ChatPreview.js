import React, { useState } from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './ChatPreview.scss'

const ChatPreview = () => {
    const [isVisited, setIsVisited] = useState(false)

    return (
        <div
            role="button"
            tabIndex="0"
            onClick={() => setIsVisited(true)}
            onKeyPress={e => {
                if (e.which === 13) {
                    setIsVisited(true)
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
                <h4 className="ChatPreview__user-name">Mirian Okradze</h4>
                <div className="ChatPreview__last-message">Hello btw!</div>
            </div>
            <time className="ChatPreview__date">6:52 PM</time>
        </div>
    )
}

export default ChatPreview
