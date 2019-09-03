import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ChatPreview from '../ChatPreview/ChatPreview'
import './ChatsPreview.scss'

const CHATS = gql`
    query {
        chats {
            _id
            users
            lastMessage
        }
    }
`

const Chats = () => {
    return (
        <div className="ChatsPreview">
            <div className="ChatsPreview__title-container">
                <h1 className="ChatsPreview__title">Chats</h1>
            </div>
            <div className="ChatsPreview__container">
                <ChatPreview />
                <ChatPreview />
                <ChatPreview />
                <ChatPreview />
                <ChatPreview />
            </div>
        </div>
    )
}
export default Chats
