import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './Message.scss'

const RightMessage = ({ message, createdAt, photoURL }) => (
    <div className="Message-wrapper--right">
        <div className="Message">
            <time className="Message__date">{createdAt}</time>
            <div className="Message__content-wrapper">
                <div className="Message__content">{message}</div>
                <ProfilePicture
                    width="4.2rem"
                    height="4.2rem"
                    photoURL={photoURL}
                />
            </div>
        </div>
    </div>
)

export default RightMessage
