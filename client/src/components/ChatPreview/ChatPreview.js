import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './ChatPreview.scss'

const ChatPreview = () => (
    <div className="ChatPreview">
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

export default ChatPreview
