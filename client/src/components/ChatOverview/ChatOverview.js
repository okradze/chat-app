import React from 'react'
import MessagesOverview from '../MessagesOverview/MessagesOverview'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './ChatOverview.scss'

const ChatOverview = () => (
    <div className="ChatOverview">
        <div className="ChatOverview__header">
            <ProfilePicture
                width="5rem"
                height="5rem"
                photoURL="https://randomuser.me/api/portraits/men/11.jpg"
            />

            <div className="ChatOverview__user-info">
                <h3 className="ChatOverview__user-name">Mirian Okradze</h3>
                <div className="ChatOverview__user-status">
                    Active Now <span className="ChatOverview__user-active" />
                </div>
            </div>
        </div>
        <div className="Chat">
            <MessagesOverview />
            <form className="Chat__form">
                <textarea
                    placeholder="Type a message here"
                    className="Chat__textarea"
                    rows="1"
                />
            </form>
        </div>
    </div>
)

export default ChatOverview
