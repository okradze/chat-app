import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './Message.scss'

const LeftMessage = ({ message, createdAt, photoURL }) => (
    <div className="Message-wrapper--left">
        <div className="Message">
            <time className="Message__date">{createdAt}</time>
            <div className="Message__content-wrapper">
                <ProfilePicture
                    width="4.2rem"
                    height="4.2rem"
                    photoURL={photoURL}
                />
                <div className="Message__content">{message}</div>
            </div>
        </div>
    </div>
)

export default LeftMessage
