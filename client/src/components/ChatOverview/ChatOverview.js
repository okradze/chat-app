import React from 'react'
import MessagesOverview from '../MessagesOverview/MessagesOverview'
import './ChatOverview.scss'

const ChatOverview = () => (
    <div className="ChatOverview">
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
