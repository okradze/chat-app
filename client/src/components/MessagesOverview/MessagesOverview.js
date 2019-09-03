import React from 'react'
import LeftMessage from '../Message/LeftMessage'
import RightMessage from '../Message/RightMessage'

const MessagesOverview = () => (
    <div className="MessagesOverview">
        <LeftMessage
            createdAt="7:35 PM"
            sentByMe={false}
            photoURL="https://randomuser.me/api/portraits/men/17.jpg"
            message="Hi..."
        />
        <RightMessage
            createdAt="7:38 PM"
            sentByMe
            photoURL="https://randomuser.me/api/portraits/men/47.jpg"
            message="Hello"
        />
        <LeftMessage
            createdAt="7:39 PM"
            sentByMe={false}
            photoURL="https://randomuser.me/api/portraits/men/17.jpg"
            message="What's up"
        />
        <RightMessage
            createdAt="7:41 PM"
            sentByMe
            photoURL="https://randomuser.me/api/portraits/men/47.jpg"
            message="I doubled my company"
        />
    </div>
)

export default MessagesOverview
