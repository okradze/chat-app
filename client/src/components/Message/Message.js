import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './Message.scss'

const formatDate = date => {
    return `${date.getHours()}:${date.getMinutes()}`
}

const Message = ({ message, createdAt, photoURL, sentByMe }) => (
    <div
        className={
            sentByMe ? 'Message-wrapper--right' : 'Message-wrapper--left'
        }
    >
        <div className="Message">
            <time className="Message__date">
                {formatDate(new Date(createdAt * 1))}
            </time>
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

export default Message
